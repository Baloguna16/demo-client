const Index = () => {
  return (
    <main>
      <div className="container-md my-3">
        <div className="row my-5">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="row my-3">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <h1 className="text-center display-1 fw-bold fst-italic">Demo App</h1>
                <p className="text-center my-3 fs-4">This app is a demo of API calls between a React frontend and Flask Python backend.</p>
                <p className="text-center mt-3 fst-italic">Check out these resources for more info:</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-center">
                    <a href="https://www.hubbub.shop">Walkthrough on Medium</a>
                  </li>
                  <li class="list-group-item text-center">
                    <a href="https://www.github.com/Baloguna16/demo-client">Github Repo for Frontend</a>
                  </li>
                  <li class="list-group-item text-center">
                    <a href="https://www.github.com/Baloguna16/demo-server">Github Repo for Backend</a>
                  </li>
                </ul>
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

export default Index;
