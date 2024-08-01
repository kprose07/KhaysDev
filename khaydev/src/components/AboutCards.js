import React from "react";
import "../css/about.css";

function About() {
  const one =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhhXREx5bvcElxOFLsBeZL_kLgyqciPa7ddjEN6I83utdqTJT2AsFbe9iwuJoz790PRc&usqp=CAU";
  const two =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFw8m4LIwVxBt7Zk4jvr9RqkbCfRQCAArEw&usqp=CAU";
  const three =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWwMqRSvkD5BJXemjK1cSGs8iacr9a3NtagkEE4QN9hHzLes0_QkFQ9ZQAthlQYCI_Rk&usqp=CAU";
  const four =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvkh-ud2PXq0rK8Egcj6-a18pOEiM307G1A&usqp=CAU";

  return (
    <div className="contain">
      <section className="hero-section">
        <div className="card-grid">
          <div className="card">
            <div
              className="card__background"
              style={{
                backgroundImage: `url(${one})`,
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading ho">Past</h3>
              <p className="card__category">
                Mr. Poncie Turner is the sole owner of Turner's Cleaning
                Service.
              </p>
            </div>
          </div>
          <div className="card">
            <div
              className="card__background"
              style={{ backgroundImage: `url(${two})` }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">Current</h3>
              <p className="card__category">
                Turner's Cleaning Service is currently managed by the owner, Mr.
                Poncie Turner. He is responsible for hiring and training,
                quality assurance,
              </p>
            </div>
          </div>
          <div className="card">
            <div
              className="card__background"
              style={{ backgroundImage: `url(${three})` }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">Future</h3>
              <p className="card__category">Custodians/Maintenance Workers:</p>
              <p className="card__category">
                Turner's Cleaning Service currently has experienced, on-call
                staff of 7-10 workers who are contracted at the time work is
                available. As the company grow
              </p>
            </div>
          </div>
          <div className="card">
            <div
              className="card__background"
              style={{ backgroundImage: `url(${four})` }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">Hobbies</h3>
              <p className="card__category">
                Turner's Cleaning Service currently contracts bookkeeping and
                payroll services through Kimble Accounting Services, a 30+ year
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
