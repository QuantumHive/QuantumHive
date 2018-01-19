import React from "react";
import Artist from "./artist";

class LiveMusic extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center">Line-up</h1>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <Artist title="Serkan Yıldırım" imageSource="/images/artists/serkan.jpg" instagramUrl="https://www.instagram.com/serkan_music/" instragram="@serkan_music" />
                    </div>
                    <div className="col-12 col-md-6">
                        <Artist title="Ersen Şahin" imageSource="/images/artists/ersen.jpg" instagramUrl="https://www.instagram.com/01ersenn/" instragram="@01ersenn" />
                    </div>
                </div>

                <div className="mt-5 border border-primary py-3 px-2">
                    <p className="text-center lead">Om de twee weken live muziek.</p>
                    <p className="text-center">Op vrijdagen of zaterdagen vanaf <strong>21:00</strong> uur.</p>
                    <p className="text-center">Entree: <strong>€10,-</strong> </p>
                </div>

                <div className="embed-responsive embed-responsive-1by1 mt-5">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/JEdBdoRhf1Q" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}

export default LiveMusic; 