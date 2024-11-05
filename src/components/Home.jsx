import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>Captain Triple A&apos;s Crew Builder</h1>
            <div className="img-container">
                <img
                    src="/pirate1.png"
                    alt="pirate"
                    className="pirate-img-home"
                />
                <img
                    src="/pirate2.png"
                    alt="pirate"
                    className="pirate-img-home"
                />
                <img
                    src="/pirate3.png"
                    alt="pirate"
                    className="pirate-img-home"
                />
            </div>
            <div className="home-buttons">
                <Link to="/recruit" className="button">
                    Recruit New Pirate
                </Link>
                <Link to="/crew" className="button">
                    View Your Crew
                </Link>
            </div>
        </div>
    );
}

export default Home;
