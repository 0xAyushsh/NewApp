import React from 'react'
import carousel1 from '../carousel1.jpeg'
import carousel2 from '../carousel2.jpg'
import carousel3 from '../carousel3.jpg'
import image1 from '../image1.jpg'
import image2 from '../image2.jpeg'
import image3 from '../image3.jpg'
import './Home.css'


export default function Home() {



    return (
        <div >
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel3} className="d-block w-100 my-carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className="h3">GameStop</p>
                            <p>Reddit Trades Crumble as GameStop, AMC and Silver Plunge</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100 my-carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-dark">
                            <p className="h3">Times Cover</p>
                            <p>Times back with lastest cover</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel1} className="d-block w-100 my-carousel-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <p className="h3">Indian Politics</p>
                            <p>FaceOff Between Centre and Opposition</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <section class="headlines-section p-2 mb-5 ml-5">
                <p class="h3 ml-3 mt-5 ">Headlines</p>
                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-md-4 headlines-column p-3">
                            <div className="d-flex flex-column">
                                <img className="img-fluid mb-2" src={image1}
                                    alt="" />
                                <p className="text-secondary">Apple's new privacy feature to roll out by early spring</p>
                            </div>
                        </div>
                        <div className="col-md-4 headlines-column p-3">
                            <div className="d-flex flex-column">
                                <img className="img-fluid mb-2 " src={image2}
                                    alt="" />
                                <p className="text-secondary">ULIPs tax exemption linked to premium</p>
                            </div>
                        </div>
                        <div className="col-md-4 headlines-column p-3">
                            <div className="d-flex flex-column">
                                <img className="img-fluid mb-2" src={image3}
                                    alt="" />
                                <p className="text-secondary">‘Consumers will not be burdened by farm cess’</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
