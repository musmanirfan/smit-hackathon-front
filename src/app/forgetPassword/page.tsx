"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [showPass, setShowPass] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const route = useRouter();
    // const URI = process.env.NEXT_PUBLIC_SERVER_URI;



    const passChange = () => {
        route.push("/dashboard")
        console.log(setIsLoading, setErrorMessage, setIsError);
        

    };

    return (
        <div className="login_container flex w-full h-screen justify-center items-center bg-gradient-to-br from-green-100 to-green-50 p-4">
            <div className="login_child_container bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-center font-bold text-3xl mb-6 text-green-700">Change Password</h2>

                {/* Password Input */}
                <div className="mb-5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                    </label>
                    <input
                        id="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Enter your Current Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                    </label>
                    <input
                        id="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Enter your New Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={newPassword}
                        required
                        onChange={(e) => {
                            setNewPassword(e.target.value);
                        }}
                    />
                </div>

                {/* Show Password */}
                <div className="flex items-center space-x-2 mb-5">
                    <input
                        type="checkbox"
                        id="show-password"
                        required
                        className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        onClick={() => setShowPass(!showPass)}
                    />
                    <label
                        htmlFor="show-password"
                        className="text-sm font-medium text-gray-700"
                    >
                        Show Password
                    </label>
                </div>

                {/* Error Message */}
                {isError && (
                    <div className="bg-red-100 text-red-700 border border-red-500 rounded-lg p-3 text-sm mb-5">
                        {errorMessage}
                    </div>
                )}

                {/* Login Button */}
                <button
                    disabled={isLoading}
                    className={`w-full py-2 text-white rounded-lg font-medium shadow ${isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-500 transition duration-300"
                        }`}
                    onClick={() => {
                        passChange()
                    }}
                >
                    {isLoading ? (
                        <div className="flex justify-center items-center">
                            <svg
                                className="animate-spin h-5 w-5 text-white mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4zm2 5.291V16a8.014 8.014 0 01-2.176-5H0a10.001 10.001 0 004 9.174A9.99 9.99 0 006 17.291z"
                                ></path>
                            </svg>
                            Please wait...
                        </div>
                    ) : (
                        "Change"
                    )}
                </button>
            </div>
        </div>

    );
}
