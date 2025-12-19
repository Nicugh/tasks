import React, { useState } from "react";

interface MultipleChoiceQuestionsProps {
    expectedAnswer: string;
    options: string[];
}

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: MultipleChoiceQuestionsProps): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(
        options[0] || "",
    );

    const isCorrect = selectedAnswer === expectedAnswer;

    return (
        <div>
            <select
                value={selectedAnswer}
                onChange={(e) => {
                    setSelectedAnswer(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span>{isCorrect ? "✔️" : "❌"}</span>
        </div>
    );
}
