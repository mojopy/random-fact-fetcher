import React from "react";

const FactRenderer = ({ fact = '' }) => {
    return (
        <>
            <blockquote className="ph0 f4 f1-ns measure-narrow white center pb5">
                <p className="lh-copy lh-title-ns factP">
                    { fact }
                </p>
            </blockquote>
        </>
    );
}

export default FactRenderer;