

export default function Section1(){
    return(
        <section>
        <div className="container mt-5 px-4">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 mb-3">
              <h2 className="automate">
                Automated tests to <br /> save time on <br /> diagnosis
              </h2>
              <p className="predi">Predictions that never fails</p>
              <button className="getbtn">Get started</button>
            </div>
            <div className="col-lg-5">
              <img
                src="./images/firstpic-removebg-preview.png"
                alt=""
                className="firstimg w-100"
              />
            </div>
          </div>
          <div className="text-center mt-5 mb-4">
            <h3>About Envisio</h3>
            <p>
              The advent of the pandemic covid-19 made the world revisit the
              issue of inadequacies in it’s health sector. It is with same
              initiative in mind that we have created this product to rid the
              world of uncertainties where health is concerned and promote the
              usage of technology in achieving this goal. This model will
              predict a near-accurate possibility of breast cancer in women
            </p>
          </div>
        </div>
      </section>

    )
}