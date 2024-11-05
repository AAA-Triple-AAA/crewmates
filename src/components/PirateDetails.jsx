import React from "react";
import { useParams, Link } from "react-router-dom";

function PirateDetails({ pirates }) {
    const { id } = useParams();
    const pirate = pirates.find((p) => p.id === parseInt(id));

    if (!pirate) return <div>Pirate not found!</div>;

    return (
        <div className="pirate-details">
            <h2>{pirate.name}</h2>
            <p>Role: {pirate.role}</p>
            <p>Strength: {pirate.strength}</p>
            <p>Loyalty: {pirate.loyalty}</p>
            <p>Skill: {pirate.skill}</p>
            <Link to="/crew" className="button">
                Back to Crew
            </Link>
        </div>
    );
}

export default PirateDetails;
