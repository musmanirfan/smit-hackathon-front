"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const role = localStorage.getItem("role");

        if (role !== "user") {
            // Redirect to login page if the user is not a regular user
            alert("Access denied! Redirecting to login.");
            router.push("/");
        } else {
            setIsLoading(false); // Stop loading when access is granted
        }
    }, [router]);

    if (isLoading) {
        return (
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
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">User Dashboard</h1>
            <p className="text-gray-700">Welcome to your dashboard. View your account details here.</p>
        </div>
    );
};

export default UserDashboard;
