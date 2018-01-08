import React from "react";
import Shisha from "./shisha";
import Drinks from "./drinks";
import Food from "./food";
import WarmDrinks from "./warmdrinks";

class Menu extends React.Component {
    render() {
        return (
            <div>
                <h3>Onze menu</h3>

                <ul className="nav nav-tabs" id="menu-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="shisha-tab" data-toggle="tab" href="#shisha" role="tab">Shisha's</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="drinks-tab" data-toggle="tab" href="#drinks" role="tab">Frisdranken</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="warm-drinks-tab" data-toggle="tab" href="#warm-drinks" role="tab">Warme Dranken</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="food-tab" data-toggle="tab" href="#food" role="tab">Snacks/Hapjes</a>
                    </li>
                </ul>
                <div className="tab-content" id="menu-tab-content">
                    <div className="tab-pane fade show active" id="shisha" role="tabpanel">
                        <Shisha/>
                    </div>
                    <div className="tab-pane fade" id="drinks" role="tabpanel">
                        <Drinks/>
                    </div>
                    <div className="tab-pane fade" id="warm-drinks" role="tabpanel">
                        <Food/>
                    </div>
                    <div className="tab-pane fade" id="food" role="tabpanel">
                        <WarmDrinks/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;