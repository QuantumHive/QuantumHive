import React from "react";

export default ({ title, imageSource, instagramUrl, instragram }) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <p className="text-white bg-dark px-3 position-relative" style={{ top: "150px" }}>{title}</p>
            <img src={imageSource} alt={title} className="rounded-circle" />

            <a href={instagramUrl} className="btn btn-outline-primary mt-2">
                {instragram}
            </a>
        </div>
    );
};