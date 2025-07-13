import React from 'react';

export const Jumbotron = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item">
                    <img
                        src="https://vabadus.es/images/articulos/642b0d6e32096626294760.png"
                        className="d-block w-100"
                        alt="Slide 1"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </div>

                <div className="carousel-item active">
                    <img
                        src="https://cdn.sanity.io/images/8edntncj/production/c9c30f568342bd3ebeec3723fbbde19a61fbadcf-780x512.png"
                        className="d-block w-100"
                        alt="Slide 2"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </div>

                <div className="carousel-item">
                    <img
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1695403632077/23445d9d-4c22-4fc2-bc12-ec2a2fdcd974.png"
                        className="d-block w-100"
                        alt="Slide 3"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};