import React from "react";
import Navbar from "../Components/Navbar";
import BookComponent from "../Components/BookComponent";

function Home() {
    return (
        <>
            {/* <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner" style={{ height: "93vh" }}>
                    <div className="carousel-item active">
                        <img
                            src="./assets/images/banner2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="./assets/images/banner2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="./assets/images/banner2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}

            {/* -carousel ends here */}

            <div className="container">
                <h1 className="text-center mt-3">Our Books</h1>
                <div className="row my-3" data-masonry='{"percentPosition": true }'>
                    <BookComponent
                        src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt="Book 1"
                        createdAt="12-12-2021"
                        name="Book 1"
                        price="100"
                        isbn="123456789"
                    />

                    <BookComponent
                        src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt="Book 1"
                        createdAt="12-12-2021"
                        name="Book 1"
                        price="100"
                        isbn="123456789"
                    />
                </div>
            </div>
        </>
    );
}

export default Home;
