import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Button
                onClick={() => {
                    setValue(value * 2);
                }}
            >
                Double
            </Button>{" "}
            <Button
                onClick={() => {
                    setValue(value / 2);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
