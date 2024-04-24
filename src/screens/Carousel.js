import React from "react";

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-caption " style={{ zIndex: "10" }}>
            <form className="d-flex ">
              <input
                className="form-control me-2 bg-success text-white"
                type="search"
                placeholder="Search Your Favorite Items"
                aria-label="Search"
              />
              <button className="btn btn-outline-success bg-dark" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/100×100/?Burger"
              className="d-block w-100 "
              style={{ filter: "brightness(50%)", maxHeight: "475px" }}
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/400×300/?Pizza"
              className="d-block w-100"
              style={{ filter: "brightness(30%)", maxHeight: "475px" }}
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/400×300/?Biryani"
              className="d-block w-100"
              style={{ filter: "brightness(30%)", maxHeight: "475px" }}
              alt="Biryani"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/400×300/?Cake"
              className="d-block w-100"
              style={{ filter: "brightness(30%)", maxHeight: "475px" }}
              alt="Cakes"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
