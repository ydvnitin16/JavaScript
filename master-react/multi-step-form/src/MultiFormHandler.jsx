import React, { useEffect, useReducer, useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";
import SkillsDetails from "./components/SkillsDetails";
import ReviewDetails from "./components/ReviewDetails";

const MultiFormHandler = ({steps, setSteps}) => {
    const details = {
        personalDetails: {
            name: "",
            email: "",
        },
        educationDetails: {
            degree: "",
            cgpa: "",
        },
        skillsDetails: {
            skill: "",
            experience: "",
        },
    };

    const reducer = (state, action) => {
        return {
            ...state,
            [action.updateTo]: { ...state[action.updateTo], ...action.payload },
        };
    };

    const [state, dispatch] = useReducer(reducer, details);

    switch (steps) {
        case 1:
            return (
                <PersonalDetails setDetails={dispatch} setSteps={setSteps} />
            );
            break;
        case 2:
            return (
                <EducationDetails setDetails={dispatch} setSteps={setSteps} />
            );
            break;
        case 3:
            return <SkillsDetails setDetails={dispatch} setSteps={setSteps} />;
            break;
        case 4:
            return <ReviewDetails details={state} />;
            break;
        default:
            return <div>No Steps Found!</div>;
            break;
    }
};

export default MultiFormHandler;
