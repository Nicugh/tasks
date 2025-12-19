import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    const isCorrect = givenAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={givenAnswer}
                onChange={(e) => {
                    setGivenAnswer(e.target.value);
                }}
                placeholder="Type your answer"
            />
            <span style={{ marginLeft: "8px" }}>{isCorrect ? "✔️" : "❌"}</span>
        </div>
    );
}
