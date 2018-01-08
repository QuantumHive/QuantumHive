import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <div className="d-none d-sm-none d-md-block">
                    <h1>Welkom bij Shi-La Lounge Arnhem</h1>
                </div>
                <div className="d-none d-sm-block d-md-none">
                    <h2>Welkom bij Shi-La Lounge Arnhem</h2>
                </div>
                <div className="d-block d-sm-none">
                    <h4>Welkom bij Shi-La Lounge Arnhem</h4>
                </div>
                

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
                </div>
            </div>
        );
    }
}

export default Home;