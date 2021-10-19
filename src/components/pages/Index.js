const Index = () => {
  return (
    <main>
      <div className="container-md my-3">
        <div className="row my-5">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="row my-3">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <h1 className="text-center display-1 fw-bold fst-italic">Demo App</h1>
                <p className="text-center my-3 fs-4">This app is a demo of API calls between a React frontend and Flask Python backend.</p>
                <p className="text-center mt-3 fst-italic">Check out these resources for more info:</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-center">
                    <a href="https://medium.com/p/bc002dd94787/edit">Walkthrough on Medium</a>
                  </li>
                  <li class="list-group-item text-center">
                    <a href="https://www.github.com/Baloguna16/demo-client">Github Repo for Frontend</a>
                  </li>
                  <li class="list-group-item text-center">
                    <a href="https://www.github.com/Baloguna16/demo-server">Github Repo for Backend</a>
                  </li>
                </ul>
                <p className="text-center mt-5 fst-italic">And please consider supporting me at one of these addresses :)</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-center">
                    <p>BTC: bc1q2xkh6tsznrv6xxlka6maafh5e5xuejdt6fvhny</p>
                  </li>
                  <li class="list-group-item text-center">
                    <p>ETH: 0x1Ef1116a490d1117a0ef838677F0c12a149013Eb</p>
                  </li>
                  <li class="list-group-item text-center">
                    <p>DOGE: DH87FKtr3jWsNkgT66FGG47dqcVBiTzXu9</p>
                  </li>
                  <li class="list-group-item text-center">
                    <p>SOL: 4uXATpQYZv1tUGB7xGU2RSAtwFrPiXNRVRdfmpiZJjqs</p>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </main>
  );
}

export default Index;
