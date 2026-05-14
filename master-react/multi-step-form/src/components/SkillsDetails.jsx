import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const SkillsDetails = ({ setDetails, setSteps }) => {
    const [skill, setSkill] = useState("");
    const [experience, setExperience] = useState("");

    return (
        <div>
            <Input
                label={"Primary Skill"}
                value={skill}
                onChange={setSkill}
                placeholder={"Enter skill (e.g., React)"}
                name={"skill"}
            />
            <Input
                label={"Years of Experience"}
                type='number'
                value={experience}
                onChange={setExperience}
                placeholder={"Enter years"}
                name={"experience"}
            />
            <Button
                onClick={() => {
                    setDetails({
                        updateTo: "skillsDetails",
                        payload: { skill, experience },
                    });
                    setSteps((prev) => prev + 1);
                }}
            >
                Next
            </Button>
        </div>
    );
};

export default SkillsDetails;
