import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const EducationDetails = ({ setDetails, setSteps }) => {
    const [degree, setDegree] = useState();
    const [cgpa, setCgpa] = useState();

    return (
        <div>
            <Input
                label={"Degree"}
                value={degree}
                onChange={setDegree}
                placeholder={"Enter Degree"}
                name={"degree"}
            />
            <Input
                label={"CGPA"}
                type='number'
                value={cgpa}
                onChange={setCgpa}
                placeholder={"Enter CGPA"}
                name={"cgpa"}
            />
            <Button
                onClick={() => {
                    setDetails({
                        updateTo: "educationDetails",
                        payload: { degree, cgpa },
                    });
                    setSteps((prev) => prev + 1);
                }}
            >
                Next
            </Button>
        </div>
    );
};

export default EducationDetails;
