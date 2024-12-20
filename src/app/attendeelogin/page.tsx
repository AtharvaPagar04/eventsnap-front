"use client";
import React from "react";
import { useRouter } from "next/navigation";

const EventLogin = () => {
    const router = useRouter();

    const containerClass = `bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`;
    const cardClass = `rounded-lg p-8 w-11/12 max-w-lg shadow-lg border-2 border-opacity-50 
        bg-white text-black border-gray-300 
        dark:bg-gray-900 dark:text-white dark:border-gray-400`;
    const buttonClass = `w-full py-2 bg-gradient-to-r 
        from-blue-500 to-green-500 text-black 
        dark:from-purple-500 dark:to-pink-500 dark:text-white 
        font-semibold rounded hover:opacity-90`;

    return (
        <div
            className={`absolute inset-0 flex flex-col items-center justify-center ${containerClass}`}
        >
            <div className={cardClass}>
                <button
                    className={buttonClass}
                    onClick={() => router.push("/sort")}
                >
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default EventLogin;
