import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <div className="d-none d-sm-none d-md-block mt-5">
                    <h1>Shi-La Lounge Arnhem</h1>
                </div>
                <div className="d-none d-sm-block d-md-none mt-5">
                    <h2>Shi-La Lounge Arnhem</h2>
                </div>
                <div className="d-block d-sm-none mt-5">
                    <h3>Shi-La Lounge Arnhem</h3>
                </div>

                <NavLink exact to="/menu" className="btn btn-outline-primary btn-lg mt-5"> Menu</NavLink>
                <NavLink exact to="/contact" className="btn btn-outline-primary btn-lg mt-4"> Contact</NavLink>

                
                
                {/*
                <div id="showcase" className="carousel slide my-5" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#showcase" data-slide-to="0" className="active"></li>
                        <li data-target="#showcase" data-slide-to="1"></li>
                        <li data-target="#showcase" data-slide-to="2"></li>
                        <li data-target="#showcase" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/images/showcase/shisha1.JPG" alt="Shisha showcase 1" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/showcase/shisha2.JPG" alt="Shisha showcase 2" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/showcase/shisha3.JPG" alt="Shisha showcase 3" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/showcase/shisha4.JPG" alt="Shisha showcase 4" />
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#showcase" rel="nofollow" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Vorige</span>
                    </a>
                    <a className="carousel-control-next" href="#showcase" rel="nofollow" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Volgende</span>
                    </a>
                </div>*/}
            </div>
        );
    }
}

export default Home;