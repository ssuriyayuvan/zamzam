import React from "react";
import aboutHome from "../../images/about-zamzam.png";
const AboutUsHome = () => {
  return (
    <>
      <section className="aboutus-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="heading-block">
                <h3>About us</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={aboutHome}
                alt={"aboutHome"}
                className="img-fluid abt-cntnt-img"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="abt-cntnt-box">
                <h3>our story</h3>
                <p>
                  We're all about creating delicious memories since 1989. Our
                  Journey from a small Tea Shop to a Flavorful Legacy!
                </p>
                <p>
                  Back in 1989, we started as a cozy tea shop in Madurai, right
                  across from the old Periyar bus stand.
                  <a href="javascript:void(0);">Read More..</a>
                </p>
              </div>
              <div className="abt-cntnt-box">
                <h3>Our mission:</h3>
                <p>
                  Thanks to our amazing customers, we can proudly say we're one
                  of the best sweet and savory brands in South Tamil Nadu. Our
                  goal is to keep getting better and become known as the top
                  choice for sweets and savories from South India.
                  <a href="javascript:void(0);">Read More..</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsHome;
