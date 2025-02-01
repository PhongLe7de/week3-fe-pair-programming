import React from "react";

function Tour({image, date, title, info, location, duration, cost}) {
  return (
    <div>
      <div>
        <section className="section" id="tours">
          <div className="section-title">
            <h2>
              featured <span>tours</span>
            </h2>
          </div>
          <div className="section-center featured-center">
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="Tibet Adventure" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map" />
                    </span>
                    {location}
                  </p>
                  <p>{cost}</p>
                  <p>{duration}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tour;
