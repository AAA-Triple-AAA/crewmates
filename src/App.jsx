import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { supabase } from "./client";
import Home from "./components/Home";
import RecruitForm from "./components/RecruitForm";
import CrewGallery from "./components/CrewGallery";
import PirateDetails from "./components/PirateDetails";
import UpdateForm from "./components/UpdateForm";
import "./App.css";

function App() {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        fetchPirates();
    }, []);

    async function fetchPirates() {
        const { data, error } = await supabase
            .from("pirates")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) console.error("Error fetching pirates:", error);
        else setPirates(data);
    }

    async function addPirate(pirate) {
        const { data, error } = await supabase
            .from("pirates")
            .insert([pirate])
            .single();

        if (error) console.error("Error adding pirate:", error);
        else {
            setPirates([data, ...pirates]);
        }
    }

    async function updatePirate(id, updatedPirate) {
        const { data, error } = await supabase
            .from("pirates")
            .update(updatedPirate)
            .eq("id", id)
            .single();

        if (error) console.error("Error updating pirate:", error);
        else {
            setPirates(pirates.map((p) => (p.id === id ? data : p)));
        }
    }

    async function deletePirate(id) {
        const { error } = await supabase.from("pirates").delete().eq("id", id);

        if (error) console.error("Error deleting pirate:", error);
        else {
            setPirates(pirates.filter((p) => p.id !== id));
        }
    }

    return (
        <Router>
            <div className="App">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/recruit">Recruit</Link>
                    <Link to="/crew">Crew</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/recruit"
                        element={<RecruitForm addPirate={addPirate} />}
                    />
                    <Route
                        path="/crew"
                        element={
                            <CrewGallery
                                pirates={pirates}
                                deletePirate={deletePirate}
                            />
                        }
                    />
                    <Route
                        path="/pirate/:id"
                        element={<PirateDetails pirates={pirates} />}
                    />
                    <Route
                        path="/update/:id"
                        element={
                            <UpdateForm
                                pirates={pirates}
                                updatePirate={updatePirate}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
