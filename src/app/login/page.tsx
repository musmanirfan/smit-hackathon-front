"use client";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
import { useState } from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import { json } from "stream/consumers";

export default function Login() {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const route = useRouter();
    // const URI = process.env.NEXT_PUBLIC_SERVER_URI;
    const ADMIN_EMAIL = "admin@example.com";
    const getValues = () => {
        setIsLoading(true);
        // axios
        //   .post(`http://localhost:3001/auth/login`, { email, password })
        //   .then((res) => {
        //     console.log("Response from server:", res.data); // Debugging response

        //     // Save user token or data in localStorage
        //     if (res.data && res.data.data) {
        //       localStorage.setItem("taskUser", JSON.stringify(res.data.data)); // Consistent key name
        //       console.log("Token saved in localStorage");
        //     } else {
        //       console.error("Invalid response structure:", res.data);
        //     }

        //     route.push("/main");
        //     setIsLoading(false);
        //   })
        //   .catch((error) => {
        //     if (error.code == "ERR_NETWORK") {
        //       setIsError(true);
        //       setErrorMessage(error.message);
        //     } else {
        //       setIsError(true);
        //       setErrorMessage(error.response.data.msg);
        //       setIsLoading(false);
        //     }
        //     setTimeout(() => {
        //       setIsError(false);
        //       setErrorMessage("");
        //       setIsLoading(false)
        //     }, 4000);
        //   });
        setTimeout(() => {
            if (!email || !password) {
                setIsError(true);
                setErrorMessage("Please enter both email and password.");
                setIsLoading(false);
                setTimeout(() => {
                    setIsError(false);
                    setErrorMessage("");
                }, 4000);
                return;
            }

            // Check if the entered email matches the hardcoded admin email
            if (email === ADMIN_EMAIL) {
                console.log("Admin login successful");
                localStorage.setItem("role", "admin"); // Save the role in localStorage
                route.push("/adminDashboard"); // Redirect to admin dashboard
            } else {
                console.log("User login successful");
                localStorage.setItem("role", "user"); // Save the role in localStorage
                route.push("/forgetPassword"); // Redirect to user dashboard
            }

            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="login_container flex w-full h-screen justify-center items-center bg-gradient-to-br from-green-100 to-green-50 p-4">
            <div className="login_child_container bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-center font-bold text-3xl mb-6 text-green-700">Login</h2>

                {/* Email Input */}
                <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>

                {/* Password Input */}
                <div className="mb-5">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                {/* Show Password */}
                <div className="flex items-center space-x-2 mb-5">
                    <input
                        type="checkbox"
                        id="show-password"
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
                        getValues();
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
                        "Login"
                    )}
                </button>
            </div>
        </div>

    );
}
