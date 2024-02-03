import React from "react";

export default function Gif({ src, href }) {
    const containerStyle = {
        position: "relative",
        width: "180px",
        height: "180px",
    };

    const embedStyle = {
        width: "100%",
        height: "100%",
    };

    const linkStyle = {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.97)",
        padding: "8px",
        fontSize: "12px",
        textDecoration: "none",
        color: "#333",
    };

    return (
        <div style={containerStyle}>
            <iframe
                id="gifIframe"  // Pusty atrybut id
                src={src}
                style={embedStyle}
                title="gif"
                frameBorder="0"
            ></iframe>
            <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            </a>
        </div>
    );
}