import React, { useState } from "react";

function Download() {
    const [isDarkMode, setIsDarkMode] = useState(true); // State to toggle between dark and light mode

    const styles = {
        button: {
            width: "50px",
            height: "50px",
            border: "none",
            borderRadius: "50%",
            backgroundColor: isDarkMode ? "rgb(27, 27, 27)" : "#f0f0f0", // Dark mode vs light mode background color
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            transitionDuration: "0.3s",
            boxShadow: isDarkMode
                ? "2px 2px 10px rgba(0, 0, 0, 0.11)"
                : "2px 2px 10px rgba(0, 0, 0, 0.05)", // Light shadow for light mode
        },
        svgIcon: {
            fill: isDarkMode ? "#2196f3" : "#1e1e1e", // Change the icon color for light mode
        },
        icon2: {
            width: "18px",
            height: "5px",
            borderBottom: "2px solid #2196f3",
            borderLeft: "2px solid #2196f3",
            borderRight: "2px solid #2196f3",
        },
        tooltip: {
            position: "absolute",
            right: "-80px",
            opacity: 0,
            backgroundColor: isDarkMode ? "rgb(12, 12, 12)" : "#e0e0e0", // Tooltip background color
            color: isDarkMode ? "white" : "black", // Tooltip text color
            padding: "5px 10px",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transitionDuration: "0.2s",
            pointerEvents: "none",
            letterSpacing: "0.5px",
        },
        tooltipBefore: {
            position: "absolute",
            content: "''",
            width: "10px",
            height: "10px",
            backgroundColor: isDarkMode ? "rgb(12, 12, 12)" : "#e0e0e0", // Tooltip triangle color
            transform: "rotate(45deg)",
            left: "-5%",
            transitionDuration: "0.3s",
        },
        buttonHover: {
            backgroundColor: isDarkMode ? "#2196f3" : "#03a9f4", // Hover color change
        },
        iconHover: {
            borderBottom: "2px solid black",
            borderLeft: "2px solid black",
            borderRight: "2px solid black",
        },
        svgHover: {
            fill: "black",
            animation:
                "slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        },
        keyframes: `
            @keyframes slide-in-top {
                0% {
                    transform: translateY(-10px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0px);
                    opacity: 1;
                }
            }
        `,
    };

    return (
        <div>
            <style>{styles.keyframes}</style>
            <button
                className="Btn"
                style={styles.button}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                        styles.buttonHover.backgroundColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode
                        ? "rgb(27, 27, 27)"
                        : "#f0f0f0"; // Reset to original button background color
                }}
                onClick={() => setIsDarkMode(!isDarkMode)} // Toggle mode on button click
            >
                <svg
                    className="svgIcon"
                    viewBox="0 0 384 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={styles.svgIcon}
                >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2" style={styles.icon2}></span>
                <span className="tooltip" style={styles.tooltip}>
                    100MB
                </span>
            </button>
        </div>
    );
}

export default Download;
