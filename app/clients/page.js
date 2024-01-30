'use client'

import { useState } from "react";

const Client = () => {
    const [count, setCount] = useState(1);
    // console.log('Client Component')
    return (
        <div>
            <h1 className = 'text-7xl  font-bold mb-4'>{count}</h1>
            <button className="btn btn-info" onClick={() => setCount(count - 1)}>Decrease</button>
            <button className="btn btn-info ml-3" onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};

export default Client