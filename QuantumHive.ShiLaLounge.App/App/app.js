import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Route } from "react-router-dom";

import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

import smokemachine from "./lib/smoke.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.navBarCollapseClick = this.navBarCollapseClick.bind(this);
    }

    componentDidMount() {
        const canvas = document.getElementById("smokeCanvas");
        const ctx = canvas.getContext("2d");
        window.addEventListener("resize", () => this.resizeCanvas(canvas), false);
        this.resizeCanvas(canvas);
        //const color = [134, 41, 150];
        const color = [145, 146, 146];
        const party = smokemachine(ctx, color);
        party.start();

        document.addEventListener("touchstart", event => {
            var touch = event.touches[0];
            const x = touch.pageX;
            const y = touch.pageY;
            const n = .5;
            const t = Math.floor(Math.random() * 200) + 3800;
            party.addsmoke(x, y, n, t);
        }, false);

        document.addEventListener("touchmove", event => {
            var touch = event.touches[0];
            const x = touch.pageX;
            const y = touch.pageY;
            const n = .5;
            const t = Math.floor(Math.random() * 200) + 3800;
            party.addsmoke(x, y, n, t);
        }, false);

        $(document).mousemove(event => {
            const x = event.pageX;
            const y = event.pageY;
            const n = .5;
            const t = Math.floor(Math.random() * 200) + 3800;
            party.addsmoke(x, y, n, t);
        });

        setInterval(() => party.addsmoke(innerWidth / 2, innerHeight, 1), 100);
    }

    resizeCanvas(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    navBarCollapseClick() {
        $("#navbarNav").collapse("hide");
    }

    render() {
        return (
            <div >
                <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="/images/shila-logo-trans.png" width="30" height="30" className="d-inline-block align-top" alt="Shi-La Lounge" /> Shi-La Lounge
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav">
                                <NavLink exact to="/" className="nav-link nav-item" onClick={this.navBarCollapseClick}> Home</NavLink>
                                <NavLink exact to="/menu" className="nav-link nav-item" onClick={this.navBarCollapseClick}> Menu</NavLink>
                                <NavLink exact to="/contact" className="nav-link nav-item" onClick={this.navBarCollapseClick}> Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container" style={{ marginTop: "64px", marginBottom: "110px" }}>
                    <main role="main" className="mx-auto">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/menu" component={Menu} />
                        <Route exact path="/contact" component={Contact} />
                    </main>
                </div>

                <nav className="navbar fixed-bottom navbar-light bg-light ">
                    <footer className="mx-auto d-flex flex-column">
                        <p>© 2018, Shi-La Lounge</p>

                        <div className="mx-auto">
                            <a href="https://www.instagram.com/shilalounge/" target="_blank" className="mr-1">
                                <img src="/images/instagram.png" alt="instagram" height="50" width="50" />
                            </a>
                            <a href="https://www.facebook.com/Shi-la-Lounge-1173785306101035/" target="_blank" className="">
                                <img src="/images/facebook.png" alt="facebook" height="50" width="50" />
                            </a>
                        </div>

                    </footer>
                </nav>
            </div>
        );
    }
}