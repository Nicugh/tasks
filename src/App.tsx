import React from "react";
import "./App.css";
import logo from "./Assests/Crab.jpg"; // with import
import { Button } from "react-bootstrap";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>is this a header?</h1>
            <div
                style={{ width: 50, height: 10, backgroundColor: "red" }}
            ></div>
            <p>
                {/* Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. */}
                <img src={logo} alt="An awesome picture of a crab" />
                <ul>
                    <li>Crabs are neat</li>
                    <li>Crabs are strong</li>
                    <li>Crabs are the future</li>
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </ul>
                Hello World Now by Nicholas M,
            </p>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
        </div>
    );
}

export default App;
