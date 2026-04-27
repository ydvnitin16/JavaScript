import React, { useEffect, useRef, useState } from "react";

const useInfiniteScroll = ({ setPage }) => {
    const rootElementRef = useRef(null);
    const scrollRef = useRef(null);
    
    useEffect(() => {
        console.log('New Intersector')
        const intersectionCallback = (entries) => {
            let entry = entries[0];
            console.log("entry triggered");
            if (entry.isIntersecting) {
                setPage((prev) => prev + 1);
            }
        };
        const options = {
            root: rootElementRef.current,
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 1,
        };
        const observer = new IntersectionObserver(
            intersectionCallback,
            options,
        );

        const target = scrollRef.current ? scrollRef.current : null;
        observer.observe(target);

        return () => observer.disconnect();
    }, []);

    return { scrollRef, rootElementRef };
};

export { useInfiniteScroll };
