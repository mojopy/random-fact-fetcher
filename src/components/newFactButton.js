import React from "react";

const NewFactButton = ({ grabNewFact }) => {
    return (
        <>
            <button
                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black mt3"
                type="fetch"
                onClick={grabNewFact}
            >
                Another one!
            </button>
        </>
    );
}

export default NewFactButton;