import React from "react";

const ListGettter = ({ onDropFn }) => {
    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                const data = JSON.parse(e.dataTransfer.getData("text/plain"));
                onDropFn(data.task);
            }}
            className='list-getter'
        >
            Drop Here
        </div>
    );
};

export default ListGettter;
