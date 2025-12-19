import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => {
                    setEditMode(!editMode);
                }}
            />

            {editMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        Student
                    </label>
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </div>
            }
        </div>
    );
}
