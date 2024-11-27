"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Download from "../components/Download";

const UploadSamples = () => {
    const router = useRouter();

    // Manage theme state and update class globally
    const [theme, setTheme] = useState<string>("dark");

    useEffect(() => {
        // Check if there's a saved theme preference in localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            // Apply the theme globally by adding the class to the body
            document.body.classList.add(savedTheme);
        } else {
            // Default to dark theme
            setTheme("dark");
            document.body.classList.add("dark");
        }
    }, []);

    // Function to handle theme change (toggle or manual change)
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className="h-[100vh] flex items-center justify-center pt-10 bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col items-center p-8 rounded-lg w-full max-w-md space-y-6 shadow-lg border-2 border-opacity-50 bg-white dark:bg-gray-900 dark:border-white">
                {/* Enter the Event Code */}
                <div className="w-full flex flex-col items-center space-y-4">
                    <label
                        htmlFor="eventCode"
                        className="text-lg font-semibold text-black dark:text-white"
                    >
                        Enter the Event Code
                    </label>
                    <input
                        id="eventCode"
                        type="text"
                        className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-black dark:bg-transparent dark:text-white border-black dark:border-white"
                        placeholder="Enter event code"
                    />
                    <button
                        onClick={() => alert("Event code submitted!")}
                        className="px-4 py-2 w-auto font-semibold rounded border border-black text-black bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition duration-300"
                    >
                        Submit
                    </button>
                </div>

                {/* Title: Upload Samples */}
                <h1 className="text-xl font-semibold text-center text-black dark:text-white">
                    Upload Samples
                </h1>

                {/* File Upload Input */}
                <input
                    type="file"
                    className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white bg-transparent text-black dark:bg-transparent dark:text-white border-black dark:border-white"
                />

                {/* Title: Sort Personalized Photo */}
                <h2 className="text-lg font-semibold text-center text-black dark:text-white">
                    Sort Personalized Photo
                </h2>

                {/* Sort Button */}
                <button className="px-4 py-2 w-auto font-semibold rounded border border-black text-black bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white transition duration-300">
                    Sort
                </button>

                {/* Download Button */}
                <Download />
            </div>
        </div>
    );
};

export default UploadSamples;
