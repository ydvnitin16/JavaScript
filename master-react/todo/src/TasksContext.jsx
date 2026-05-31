import {
    createContext,
    useCallback,
    useEffect,
    useReducer,
    useState,
} from "react";

export const tasksContext = createContext();
const TasksProvider = ({ children }) => {

    // Use reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case "add":
                if (!action.title || action.title.trim() === "")
                    return setError("Please add task name");

                const task = { id: Date.now(), title: action.title, isCompleted: false };
                return [...state, task];
                break;

            case "delete":
                return state.filter((l) => l.id !== Number(action.id));
                break;

            case "status":
                return state.map((l) =>
                    l.id === action.id
                        ? l.isCompleted
                            ? { ...l, isCompleted: false }
                            : { ...l, isCompleted: true }
                        : l,
                );
                break;
        }
    };
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <tasksContext.Provider value={{ handler: dispatch, list: state }}>
            {children}
        </tasksContext.Provider>
    );
};

export { TasksProvider };
