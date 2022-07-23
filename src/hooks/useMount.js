import React, { useEffect, useRef } from 'react'

const UseMount = (cb, condition = true) => {
    const isCalledRef = React.useRef(false);
    React.useEffect(() => {
        if (condition && !isCalledRef.current) {
            isCalledRef.current = true;
            cb();
        }
    }, [cb, condition]);
}
UseMount.displayName = "UseMount";
export default UseMount;