"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SignupForm = () => {
    const router = useRouter();

    const handleClick1 = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/create-album");
    };

    const handleClick2 = () => {
        router.push("/login");
    };

    const containerClass = `bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`;
    const inputClass = `w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 
        dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 
        bg-gray-100 border-gray-300 text-black placeholder-gray-500`;
    const buttonClass = `w-full py-2 mb-4 font-semibold rounded shadow-md hover:opacity-90 
        bg-gradient-to-r 
        dark:from-purple-500 dark:to-pink-500 dark:text-white 
        from-blue-500 to-green-500 text-black`;

    return (
        <div
            className={`flex justify-center items-center h-screen ${containerClass}`}
        >
            <div className="w-full max-w-md px-6 py-4 rounded-lg shadow-md border-2 border-opacity-50">
                <h1 className="text-2xl font-semibold mb-2">
                    Create an Account
                </h1>
                <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Enter your information to sign up
                </p>
                <form className="space-y-2" onSubmit={handleClick1}>
                    <div className="text-left py-2">
                        <label
                            htmlFor="full-name"
                            className="block font-medium mb-1"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            placeholder="John Doe"
                            className={inputClass}
                        />
                    </div>
                    <div className="text-left">
                        <label
                            htmlFor="username"
                            className="block font-medium mb-1"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="johndoe"
                            className={inputClass}
                        />
                    </div>
                    <div className="text-left">
                        <label
                            htmlFor="email"
                            className="block font-medium mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="john.doe@example.com"
                            className={inputClass}
                        />
                    </div>
                    <div className="text-left">
                        <label
                            htmlFor="phone-number"
                            className="block font-medium mb-1"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone-number"
                            placeholder="+1234567890"
                            className={inputClass}
                        />
                    </div>
                    <div className="text-left">
                        <label
                            htmlFor="password"
                            className="block font-medium mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            className={inputClass}
                        />
                    </div>
                    <p className="text-left text-sm text-gray-500 dark:text-gray-400">
                        Must be at least 8 characters, including a number and a
                        special character.
                    </p>
                    <button className={buttonClass}>Sign Up</button>
                </form>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Already a member?{" "}
                    <span
                        onClick={handleClick2}
                        className="text-purple-500 dark:text-purple-400 font-medium hover:underline cursor-pointer"
                    >
                        Log in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
