"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    const handleSignUpClick1 = () => {
        router.push("/signup");
    };

    const handleSignUpClick2 = () => {
        router.push("/create-album");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-300 dark:border-gray-600">
                {/* Heading */}
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Sign In.
                </h1>

                {/* Email Input */}
                <div className="text-left mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                    >
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Password Input */}
                <div className="text-left mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Sign-In Button */}
                <button
                    className="w-full py-2 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded hover:opacity-90"
                    onClick={handleSignUpClick2}
                >
                    Sign In.
                </button>

                {/* Footer Links */}
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Don't have an account?{" "}
                    <span
                        onClick={handleSignUpClick1}
                        className="text-purple-500 font-medium hover:underline cursor-pointer"
                    >
                        Create an account
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
