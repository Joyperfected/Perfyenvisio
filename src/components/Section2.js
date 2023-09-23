

export default function Section2(){
    return(
        <section>
        <div className="container mt-5 mb-5">
          <h3 className="mb-3 px-4">How It Works</h3>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card iconcard m-auto">
                <i className="fa fa-bell iconbell ms-3"></i>
                <div className="card-body">
                  <h5>Early Prediction</h5>
                  <p className="card-text">
                    Get early predictions on breast cancer to ensure early
                    treatment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card iconcard m-auto">
                <i className="fa fa-clock  iconbell  ms-3"></i>
                <div className="card-body">
                  <h5>Save Time</h5>
                  <p className="card-text">
                    Our model provides quicker results, saves time and cost of
                    running tests
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card iconcard m-auto">
                <i className="fa fa-thumbs-up iconbell  ms-3"></i>
                <div className="card-body">
                  <h5> Data Storage</h5>
                  <p className="card-text">
                    Have access to your patients’ history with for easy
                    reference and referal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}