import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateForm({ pirates, updatePirate }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const pirate = pirates.find((p) => p.id === parseInt(id));

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [strength, setStrength] = useState("");
    const [loyalty, setLoyalty] = useState("");
    const [skill, setSkill] = useState("");

    useEffect(() => {
        if (pirate) {
            setName(pirate.name);
            setRole(pirate.role);
            setStrength(pirate.strength);
            setLoyalty(pirate.loyalty);
            setSkill(pirate.skill);
        }
    }, [pirate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePirate(parseInt(id), { name, role, strength, loyalty, skill });
        navigate("/crew");
    };

    if (!pirate) return <div>Pirate not found!</div>;

    return (
        <div className="update-form">
            <h2>Update {pirate.name}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quartermaster">Quartermaster</option>
                    <option value="Gunner">Gunner</option>
                    <option value="Navigator">Navigator</option>
                    <option value="Cook">Cook</option>
                </select>
                <div className="attribute-selector">
                    <p>Strength:</p>
                    {["Weakhearted", "Average", "Mighty"].map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setStrength(s)}
                            className={strength === s ? "selected" : ""}>
                            {s}
                        </button>
                    ))}
                </div>
                <div className="attribute-selector">
                    <p>Loyalty:</p>
                    {["Treacherous", "Neutral", "Faithful"].map((l) => (
                        <button
                            key={l}
                            type="button"
                            onClick={() => setLoyalty(l)}
                            className={loyalty === l ? "selected" : ""}>
                            {l}
                        </button>
                    ))}
                </div>
                <div className="attribute-selector">
                    <p>Skill:</p>
                    {["Landlubber", "Seasoned", "Master"].map((s) => (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setSkill(s)}
                            className={skill === s ? "selected" : ""}>
                            {s}
                        </button>
                    ))}
                </div>
                <button type="submit">Update Pirate</button>
            </form>
        </div>
    );
}

export default UpdateForm;
