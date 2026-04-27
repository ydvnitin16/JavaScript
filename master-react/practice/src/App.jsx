import React, { useEffect, useState } from "react";
import { useInfiniteScroll } from "./useInfiniteScroll";

const App = () => {
    const [data, setData] = useState();

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(null);

    const { rootElementRef, scrollRef } = useInfiniteScroll({ setPage });
    useEffect(() => {
        async function load() {
            console.log(page);
            console.log(limit);
            const res = await fetch(
                `https://dummyjson.com/products?limit=${page * limit}`,
            );
            const data = await res.json();
            setData(data.products);
            setTotal(data.total);

            console.log(data);
        }
        load();
    }, [page, limit]);

    return (
        <div id='container' ref={rootElementRef}>
            <div className='grid'>
                {data?.map((product) => (
                    <div key={product.id} className='card'>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className='card-img'
                        />
                        <div className='card-body'>
                            <h3>{product.title}</h3>
                            <p className='price'>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                Page: {page}/{Math.ceil(total / limit)}
            </div>
            <div style={{ height: "20px" }} ref={scrollRef} />
        </div>
    );
};

export default App;
