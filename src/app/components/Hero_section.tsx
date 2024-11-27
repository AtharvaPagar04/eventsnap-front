import React from "react";
import Sparkle from "./Sparkle";

function Hero_section() {
    return (
        <div className="relative">
            {/* Sparkle component as background */}
            <Sparkle
                id="particles"
                className="custom-particles absolute top-0 left-0 w-full h-full"
                background="transparent"
                particleSize={5}
                minSize={1}
                maxSize={1.8}
                speed={1}
                particleColor="#ffffff"
                particleDensity={150}
            />

            <div className="relative text-center text-white mt-20">
                <h1 className="text-9xl font-bold mb-4 typing-animation">
                    Welcome to EventSnap
                </h1>
                <p className="text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nobis, quidem!
                </p>
            </div>

            {/* Add the typing animation CSS */}
            <style jsx>{`
                @keyframes typing {
                    from {
                        width: 0;
                    }
                    to {
                        width: 100%;
                    }
                }

                @keyframes blink {
                    50% {
                        border-color: transparent;
                    }
                }

                .typing-animation {
                    display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    border-right: 3px solid white; /* Cursor effect */
                    animation: typing 4s steps(40, end),
                        blink 0.75s step-end infinite;
                    width: 100%; /* Initially hidden, reveals gradually */
                }
            `}</style>
        </div>
    );
}

export default Hero_section;