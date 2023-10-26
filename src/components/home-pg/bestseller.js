import React from "react";
import bestseller1 from "../../images/bestseller-001.png";
import { FaRegHeart } from "react-icons/fa";

const BestsellerItem = ({ image, name }) => {
  return (
    <li>
      <article>
        <figure>
          <FaRegHeart className="heart-like-icon" />
          <img src={image} alt="bestseller1" className="expertise-img" />
        </figure>
        <h6>{name}</h6>
      </article>
    </li>
  );
};

const BestSellerList = () => {
  return (
    <>
      <section className="bestseller-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="heading-block">
                <h3>Best Sellers</h3>
              </div>
              <ul className="bestseller-list">
                <BestsellerItem image={bestseller1} name={"Sweets"} />
                <BestsellerItem image={bestseller1} name={"Savories"} />
                <BestsellerItem image={bestseller1} name={"Beverages"} />
                <BestsellerItem image={bestseller1} name={"Hot Snacks"} />
                <BestsellerItem image={bestseller1} name={"Chaats"} />
                <BestsellerItem image={bestseller1} name={"Sandwiches"} />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellerList;
