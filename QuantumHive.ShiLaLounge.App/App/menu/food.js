import React from "react";

export default () => {
    return (
        <table className="table table-sm table-bordered">
            <thead>
            <tr>
                <th>Snacks/Hapjes</th>
                <th>Prijs (€)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Chicked Burger</td>
                <td>3,50</td>
            </tr>
            <tr>
                <td>Friet</td>
                <td>3,-</td>
            </tr>
            <tr>
                <td>Kipnuggets (8 Stuks)</td>
                <td>3,50</td>
            </tr>
            <tr>
                <td>Mandje Nacho's (Met Sauzen)</td>
                <td>3,50</td>
            </tr>
            <tr>
                <td>Fruitschaal (1 Persoon)</td>
                <td>3,-</td>
            </tr>
            <tr>
                <td>Fruitschaal (2 Personen)</td>
                <td>5,-</td>
            </tr>
            </tbody>
        </table>
    );
}