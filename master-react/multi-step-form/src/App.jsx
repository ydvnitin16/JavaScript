import React, { useState } from "react";
import Progress from "./components/Progress";
import MultiFormHandler from "./MultiFormHandler";

const App = () => {
    const [steps, setSteps] = useState(1);
    const totalSteps = 3;

    return (
        <>
            <Progress progress={Math.ceil(((steps - 1) / totalSteps) * 100)} />
            <MultiFormHandler steps={steps} setSteps={setSteps} />
        </>
    );
};

export default App;
