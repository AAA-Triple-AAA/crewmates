import React from "react";
import { Link } from "react-router-dom";

function CrewGallery({ pirates, deletePirate }) {
    return (
        <div className="crew-gallery">
            <h2>Your Crew</h2>
            {pirates && pirates.length > 0 ? (
                pirates.map((pirate) => (
                    <div key={pirate.id} className="pirate-card">
                        <Link to={`/pirate/${pirate.id}`}>{pirate.name}</Link>
                        <p>{pirate.role}</p>
                        <div className="attributes">
                            <span
                                className={`strength ${pirate.strength.toLowerCase()}`}>
                                {pirate.strength}
                            </span>
                            <span
                                className={`loyalty ${pirate.loyalty.toLowerCase()}`}>
                                {pirate.loyalty}
                            </span>
                            <span
                                className={`skill ${pirate.skill.toLowerCase()}`}>
                                {pirate.skill}
                            </span>
                        </div>
                        <Link to={`/update/${pirate.id}`} className="button">
                            Update Pirate
                        </Link>
                        <button onClick={() => deletePirate(pirate.id)}>
                            Walk the Plank
                        </button>
                    </div>
                ))
            ) : (
                <p>No pirates yet.</p>
            )}
        </div>
    );
}

export default CrewGallery;
