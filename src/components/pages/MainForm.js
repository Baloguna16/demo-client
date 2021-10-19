import { useState } from 'react';
import Cookies from 'js-cookie';

const MainForm = ({ setFlashMessages }) => {
  let statusOK;

  const [secret, setSecret] = useState("Not shared yet...");
  const [message, setMessage] = useState("Now it's your turn to share something!");

  const isStatusOK = (res) => {
    statusOK = res.ok;
    return res.json();
  }

  // Send the 'secret' as json in a POST request to the Flask side
  const submit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_SERVER + '/post', {
      method: 'POST',
      body: JSON.stringify({ secret }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(isStatusOK)
    .then(data => {
      setFlashMessages(data.flashes);
      if (statusOK) {
        setMessage(data.message);
        setFlashMessages(["Thanks for sharing your secret!"])
      } else {
        setMessage("We didn't get your secret...");
      }
    });
    window.scrollTo(0, 0);
  }

  return (
    <div className="container-md my-3">
      <div className="row my-5">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <h1 className="text-center display-3 fw-bold fst-italic">Now, you tell me a secret...</h1>
          <p className="text-center my-3 fs-5 text-muted">{message}</p>
          <form onSubmit={submit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="newSecret"
                name="secret"
                placeholder="Sometimes I..."
                onChange={e => setSecret(e.target.value)}
                minLength="1"
                maxLength="200"
                required
              />
              <label htmlFor="newSecret" className="fst-italic text-muted">Your Secret</label>
            </div>
            <div className="d-grid gap-2 mb-3">
              <button
                className="next-step-2 btn btn-info"
                type='submit'
                value='Submit'
              >
                ~ Share your secret ~
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default MainForm;
