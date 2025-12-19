import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2); // must be different

    let message = null;
    if (left === 1 && right === 1) {
        message = <div>Lose</div>;
    } else if (left === right) {
        message = <div>Win</div>;
    }

    return (
        <div>
            <span data-testid="left-die">Left Die: {left}</span>
            <span data-testid="right-die">Right Die: {right}</span>

            <Button
                onClick={() => {
                    setLeft(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRight(d6());
                }}
            >
                Roll Right
            </Button>

            {message}
        </div>
    );
}
