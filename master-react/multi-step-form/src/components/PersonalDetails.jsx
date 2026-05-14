import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const PersonalDetails = ({ setDetails, setSteps }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    return (
        <div>
            <Input
                label={"Name"}
                value={name}
                onChange={setName}
                placeholder={"Enter name"}
                name={"name"}
            />
            <Input
                label={"Email"}
                type='email'
                value={email}
                onChange={setEmail}
                placeholder={"Enter email"}
                name={"email"}
            />
            <Button
                onClick={() => {
                    setDetails({
                        updateTo: "personalDetails",
                        payload: { name, email },
                    });
                    setSteps((prev) => prev + 1);
                }}
            >
                Next
            </Button>
        </div>
    );
};

export default PersonalDetails;
