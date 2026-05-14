import React from "react";

const Progress = ({ progress }) => {
    return (
        <div className='progress-bar'>
            <span className='progress' style={{ width: progress * 2 }}></span>
        </div>
    );
};

export default Progress;
