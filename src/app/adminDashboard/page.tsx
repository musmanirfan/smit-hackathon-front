"use client"

// import { useAuth } from "@/hooks/useAuth";

import { useAuth } from "../hooks/useAuth";

const AdminDashboard = () => {
    const { isAuthorized, isLoading } = useAuth("admin");

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

    if (!isAuthorized) return null;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Admin Dashboard</h1>
            <p className="text-gray-700">Welcome to the Admin Dashboard. Manage users and data here.</p>
        </div>
    );
};

export default AdminDashboard;
