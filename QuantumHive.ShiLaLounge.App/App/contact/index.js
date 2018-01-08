import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h3>Openingstijden</h3>
                <table className="table table-sm table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Dag</th>
                            <th>Tijd</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Maandag</td>
                            <td>16:00 - 01:00</td>
                        </tr>
                        <tr>
                            <td>Dinsdag</td>
                            <td>16:00 - 01:00</td>
                        </tr>
                        <tr>
                            <td>Woensdag</td>
                            <td>16:00 - 01:00</td>
                        </tr>
                        <tr>
                            <td>Donderdag</td>
                            <td>15:00 - 02:00</td>
                        </tr>
                        <tr>
                            <td>Vrijdag</td>
                            <td>15:00 - 02:00</td>
                        </tr>
                        <tr>
                            <td>Zaterdag</td>
                            <td>15:00 - 02:00</td>
                        </tr>
                        <tr>
                            <td>Zondag</td>
                            <td>16:00 - 01:00</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Adres</h3>
                <address>
                    <strong>Shi-La Lounge</strong>
                    <br />
                    Nieuwstraat 66
                    <br />
                    6811 HX, Arnhem
                    <br />
                    Telefoon: +31 6 31 95 65 78
                </address>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA9QBJTbl62J_c9RhLFF_m36Jlx0ViP9zM&q=place_id:ChIJM9ed_1Gkx0cR-eF_H11HtG4"
                        allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

export default Contact;