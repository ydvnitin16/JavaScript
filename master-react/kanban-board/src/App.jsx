import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import ListGettter from "./ListGettter";

const App = () => {
    const [list, setList] = useState([
        { id: 1, title: "Build Login Page", status: "TODO" },
        { id: 2, title: "Create Navbar", status: "TODO" },
        { id: 3, title: "Implement Auth", status: "IN_PROGRESS" },
        { id: 4, title: "Setup Project", status: "COMPLETED" },
    ]);

    useEffect(() => {
        console.log(list);
    }, [list]);

    let listByStatus = {};

    list.forEach((l) => {
        if (!listByStatus[l.status]) {
            listByStatus[l.status] = [l];
        } else {
            listByStatus[l.status].push(l);
        }
    });

    function onDropFn(list, status) {
        setList((prev) => {
            return prev.map((l) => {
                return Number(l.id) === Number(list.id) ? { ...l, status } : l;
            });
        });
    }

    return (
        <>
            <div className='kanban-container'>
                <h1 className='board-title'>Task Board</h1>

                <div className='board'>
                    {/* To Do */}
                    <div className='column'>
                        <div className='column-header todo'>
                            <h2>To Do</h2>
                            <span>{listByStatus["TODO"]?.length || 0}</span>
                        </div>

                        <div className='task-list'>
                            {listByStatus["TODO"]?.map((task) => (
                                <TaskList key={task.id} task={task} />
                            ))}
                            <ListGettter
                                onDropFn={(list) => {
                                    onDropFn(list, "TODO");
                                }}
                            />
                        </div>
                        <div></div>
                    </div>

                    {/* In Progress */}
                    <div className='column'>
                        <div className='column-header progress'>
                            <h2>In Progress</h2>
                            <span>{listByStatus["IN_PROGRESS"]?.length}</span>
                        </div>

                        <div className='task-list'>
                            {listByStatus["IN_PROGRESS"]?.map((task) => (
                                <TaskList key={task.id} task={task} />
                            ))}
                            <ListGettter
                                onDropFn={(list) => {
                                    onDropFn(list, "IN_PROGRESS");
                                }}
                            />
                        </div>
                    </div>

                    {/* Done */}
                    <div className='column'>
                        <div className='column-header done'>
                            <h2>Done</h2>
                            <span>{listByStatus["COMPLETED"]?.length}</span>
                        </div>

                        <div className='task-list'>
                            {listByStatus["COMPLETED"]?.map((task) => (
                                <TaskList key={task.id} task={task} />
                            ))}
                            <ListGettter
                                onDropFn={(list) => {
                                    onDropFn(list, "COMPLETED");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
