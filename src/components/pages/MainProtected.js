import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

const MainProtected = () => {
  const [message, setMessage] = useState("Loading...");

  let statusOK;
  let statusCode;

  const isStatusOK = (res) => {
    statusOK = res.ok;
    statusCode = res.status;
    return res.json();
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER + `/get/protected`, {
      credentials: 'include'
    })
    .then(isStatusOK)
    .then(data => {
      if (statusOK) {
        setMessage(data.message);
        console.log({"Who sent this message?": data.messager})
      } else {
        setMessage("Sorry, you don't have the ~special access~ to receive this message from the server.");
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
                <h1 className="text-center display-3 fw-bold fst-italic">Let me tell you a secret...</h1>
                <p className="text-center mt-3 fs-4">{message}</p>
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

export default MainProtected;
