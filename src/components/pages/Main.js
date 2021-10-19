import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const Main = ({ setFlashMessages }) => {
  const [message, setMessage] = useState("Loading...");

  let statusOK;
  let statusCode;

  const isStatusOK = (res) => {
    statusOK = res.ok;
    statusCode = res.status;
    return res.json();
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER + `/get/unprotected`)
    .then(isStatusOK)
    .then(data => {
      if (statusOK) {
        setMessage(data.message);
        console.log({"Who sent this message?": data.messager})

        let configs;
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
          configs = { sameSite: 'none', secure: true}
        } else {
          configs = { domain: process.env.REACT_APP_DOMAIN, sameSite: 'none', secure: true}
        }
        Cookies.set('sessionToken', data.session, configs);
        setFlashMessages(["The session token has been set in your browser."])
      } else {
        setMessage("Failed to receive a message from the server.");
      }
    });
  }, []);
  return (
    <main>
      <div className="container-md my-3">
        <div className="row my-5">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="row my-3">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <h1 className="text-center display-2 fw-bold fst-italic">Hey, there!</h1>
                <p className="text-center mt-3 fs-3">{message}</p>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </main>
  );
}

export default Main;
