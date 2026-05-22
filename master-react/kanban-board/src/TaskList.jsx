import React from "react";

const TaskList = ({ task }) => {
    return (
        <div
            draggable={true}
            onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", JSON.stringify({ task }));
            }}
            className='task-card'
            key={task.id}
        >
            <h3>{task.title}</h3>
        </div>
    );
};

export default TaskList;
