import React from "react";

const FactRenderer = ({ fact = '' }) => {
    return (
        <>
            <blockquote class="ph0 f4 f1-ns measure-narrow washed-yellow center pb5">
                <p class="fw9 lh-copy lh-title-ns factP">
                    { fact }
                </p>
            </blockquote>
        </>
    );
}

export default FactRenderer;