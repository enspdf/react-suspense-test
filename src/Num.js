import React from "react";

export const Num = ({ resource }) => {
    const num = resource.num.read();

    return (
        <div>The random number is : {num}</div>
    );
};