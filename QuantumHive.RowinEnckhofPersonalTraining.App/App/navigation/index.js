import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav">
                                <NavLink exact to="/agenda" className="nav-link nav-item" onClick={this.navBarCollapseClick}> Agenda</NavLink>
                                <NavLink exact to="/measurements" className="nav-link nav-item" onClick={this.navBarCollapseClick}> Metingen</NavLink>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                        Gebruikers
                                    </a>
                                    <div className="dropdown-menu">
                                        <NavLink exact to="/customers" className="dropdown-item" onClick={this.navBarCollapseClick}> Klanten</NavLink>
                                        <NavLink exact to="/employees" className="dropdown-item" onClick={this.navBarCollapseClick}> Medewerkers</NavLink>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                        Stamdata
                                    </a>
                                    <div className="dropdown-menu">
                                        <NavLink exact to="/locations" className="dropdown-item" onClick={this.navBarCollapseClick}> Locaties</NavLink>
                                        <NavLink exact to="/coursetypes" className="dropdown-item" onClick={this.navBarCollapseClick}> Lestypes</NavLink>
                                        <NavLink exact to="/courses" className="dropdown-item" onClick={this.navBarCollapseClick}> Lessen</NavLink>
                                    </div>
                                </li>

                                <NavLink exact to="/account" className="nav-link nav-item" onClick={this.navBarCollapseClick}> Account</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;