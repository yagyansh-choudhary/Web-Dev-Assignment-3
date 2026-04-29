import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Stats from "./components/Stats";
import Table from "./components/Table";

function App() {
  const [students, setStudents] = useState([
    { name: "Aman", score: 78 },
    { name: "Riya", score: 45 },
    { name: "Karan", score: 90 },
    { name: "Neha", score: 32 },
  ]);

  const updateScore = (index, newScore) => {
    const updated = [...students];
    updated[index].score = Number(newScore);
    setStudents(updated);
  };

  const addStudent = (name, score) => {
    setStudents([...students, { name, score: Number(score) }]);
  };

  return (
    <div className="container">
      <div className="header">
        <p className="sub">ACADEMIC TERMINAL V2.0</p>
        <h1>
          STUDENT <span>SCOREBOARD</span>
        </h1>
      </div>

      <Form addStudent={addStudent} />
      <Stats students={students} />
      <Table students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;