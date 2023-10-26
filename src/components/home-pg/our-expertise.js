import React from "react";
import expertise1 from "../../images/expertise-001.png";

const ExpertiseItem = ({ image, name }) => {
  return (
    <li>
      <article>
        <figure>
          <img src={image} alt="expertise1" className="expertise-img" />
        </figure>
        <h6>{name}</h6>
      </article>
    </li>
  );
};

const OurExpertise = () => {
  return (
    <>
      <section className="our-expertise-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3>our Expertise</h3>
              <ul className="our-expertise-list">
                <ExpertiseItem image={expertise1} name={"Sweets"} />
                <ExpertiseItem image={expertise1} name={"Savories"} />
                <ExpertiseItem image={expertise1} name={"Beverages"} />
                <ExpertiseItem image={expertise1} name={"Hot Snacks"} />
                <ExpertiseItem image={expertise1} name={"Chaats"} />
                <ExpertiseItem image={expertise1} name={"Sandwiches"} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurExpertise;
