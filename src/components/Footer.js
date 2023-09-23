

export default function Footer(){
    return(
        <footer>
        <div className="container mt-5 m-auto">
          <div className="row text-center mb-5">
            <div className="col-lg-4">
              <ul>
                <li className="abt">About</li>
                <li className="abt">Blog</li>
                <li className="abt">Contact us</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <span className="envi">envisio</span>
              <span className="envy">.</span> <br />
              <i className="fab fa-twitter envi"></i>
              <i className="fab fa-instagram envi me-3 ms-3"></i>
              <i className="fas fa-envelope envi"></i>
            </div>
            <div className="col-lg-4">
              <ul>
                <li className="abt">Privacy</li>
                <li className="abt">Terms of use</li>
              </ul>
            </div>
          </div>
          <p className="copy">Copyright &copy; 2021 Envisio</p>
        </div>
      </footer>
    )
}