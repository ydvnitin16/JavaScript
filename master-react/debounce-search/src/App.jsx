import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const App = () => {
    const { search, setSearch, result } = useDebounce();

    return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
};

export default App;
