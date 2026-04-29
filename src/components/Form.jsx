import React, { useState } from "react";

function Form({ addStudent }) {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");

    return (
        <div className="form-box">
            <div className="form-header">
                <span>● REGISTER STUDENT</span>
                <span>NEW ENTRY</span>
            </div>

            <div className="form-body">
                <input
                    placeholder="Student name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder="Score (0-100)"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                <button onClick={() => addStudent(name, score)}>+ ADD</button>
            </div>
        </div>
    );
}

export default Form;