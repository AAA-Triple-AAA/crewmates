import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecruitForm.css";

function RecruitForm({ addPirate }) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [strength, setStrength] = useState("");
    const [loyalty, setLoyalty] = useState("");
    const [skill, setSkill] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPirate({ name, role, strength, loyalty, skill });
        navigate("/crew");
    };

    return (
        <div className="recruit-form">
            <h2>Recruit New Pirate</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Pirate Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required>
                    <option value="">Select Role</option>
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
                <button type="submit">Add to Crew</button>
            </form>
        </div>
    );
}

export default RecruitForm;
