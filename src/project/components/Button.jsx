import React from "react";

export default function Button({ text = "click", btnClass, icon, onClick }) {
    return (
        <button className={`btn ${btnClass}`} onClick={onClick}>
            <span className="icon-large">{icon}</span>
            &nbsp;{text}&nbsp;
            <span className="icon-large">{icon}</span>
        </button>
    );
}