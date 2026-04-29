import React, { useState } from "react";

function Table({ students, updateScore }) {
    const [temp, setTemp] = useState({});

    return (
        <div className="table">
            <div className="table-header">
                <div>NAME</div>
                <div>SCORE</div>
                <div>STATUS</div>
                <div>UPDATE</div>
            </div>

            {students.map((s, i) => {
                const status = s.score >= 33 ? "PASS" : "FAIL";

                return (
                    <div className="row" key={i}>
                        <div>{s.name}</div>
                        <div className="score">{s.score}</div>
                        <div className={status === "PASS" ? "pass" : "fail"}>
                            ● {status}
                        </div>
                        <div className="update-box">
                            <input
                                value={temp[i] ?? s.score}
                                onChange={(e) =>
                                    setTemp({ ...temp, [i]: e.target.value })
                                }
                            />
                            <button onClick={() => updateScore(i, temp[i])}>
                                SAVE
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Table;