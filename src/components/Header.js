

export default function Header(){
    return(
        <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 py-3">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    {" "}
                    <span className="envi">envisio</span>
                    <span className="envy">.</span>{" "}
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse navdiv"
                    id="navbarNav"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link navlist pe-5"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link navlist pe-5" href="#">
                          Product
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link navlist pe-5" href="#">
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link navlist">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}