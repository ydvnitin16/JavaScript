import { useCallback, useEffect, useRef, useState } from "react";

const useDebounce = () => {
    const [search, setSearch] = useState();
    const timerRef = useRef(null);

    useEffect(() => {
        const callApi = (search) => {
            console.log(search);
        };

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callApi(search);
        }, 2000);

        return () => clearTimeout(timerRef.current);
    }, [search]);

    return { result: search, search, setSearch };
};

export default useDebounce;
