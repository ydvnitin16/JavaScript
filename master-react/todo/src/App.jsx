import React, { useContext, useState } from "react";
import { tasksContext } from "./TasksContext";

const App = () => {
    const { handler, list } = useContext(tasksContext);
    const [title, setTitle] = useState();
    return (
        <>
            <div className='input-section'>
                <input
                    id='todo-input'
                    placeholder='Add new task...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    type='submit'
                    onClick={() => handler({ type: "add", title })}
                >
                    Create
                </button>
            </div>
            <ul id='todo-list'>
                {list?.length > 0 ? (
                    list.map((task) => (
                        <li key={task.id}>
                            <label>
                                <input
                                    type='checkbox'
                                    onChange={() =>
                                        handler({
                                            type: "status",
                                            id: task.id,
                                        })
                                    }
                                    checked={task.isCompleted}
                                />
                                {task.title}
                            </label>

                            <div className='actions'>
                                <button
                                    onClick={() =>
                                        handler({ type: "delete", id: task.id })
                                    }
                                ></button>
                            </div>
                        </li>
                    ))
                ) : (
                    <h1>List is empty</h1>
                )}
            </ul>
        </>
    );
};

export default App;
