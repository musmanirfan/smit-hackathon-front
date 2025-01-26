"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Dialog } from "@mui/material";
import { useRouter } from "next/navigation";

const categories = [
    {
        name: "Wedding Loans",
        subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
        maxLoan: "PKR 5 Lakh",
        loanPeriod: "3 years",
    },
    {
        name: "Home Construction Loans",
        subcategories: ["Structure", "Finishing", "Loan"],
        maxLoan: "PKR 10 Lakh",
        loanPeriod: "5 years",
    },
    {
        name: "Business Startup Loans",
        subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
        maxLoan: "PKR 10 Lakh",
        loanPeriod: "5 years",
    },
    {
        name: "Education Loans",
        subcategories: ["University Fees", "Child Fees Loan"],
        maxLoan: "Based on requirement",
        loanPeriod: "4 years",
    },
];

const ServuceDropDown = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [popup, setPopup] = useState<{ subcategory: string | null }>({ subcategory: null });
    const [loanAmount, setLoanAmount] = useState<number | null>(null);
    const [initialDeposit, setInitialDeposit] = useState<number | null>(null);
    const [loanPeriod, setLoanPeriod] = useState<number | null>(null);
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const router = useRouter();

    // Toggle category dropdown
    const toggleCategory = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Open popup for subcategory
    const openPopup = (subcategory: string) => {
        setPopup({ subcategory });
    };

    // Close popup and reset fields
    const closePopup = () => {
        setPopup({ subcategory: null });
        setMonthlyPayment(null);
    };

    // Calculate monthly payment
    const calculateMonthlyPayment = () => {
        if (loanAmount && initialDeposit !== null && loanPeriod) {
            const totalMonths = loanPeriod * 12;
            const payment = (loanAmount - initialDeposit) / totalMonths;
            setMonthlyPayment(payment);
        }
    };

    // Handle submission and navigate with query params
    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();

        // Check for valid input
        if (!loanAmount || !initialDeposit || !loanPeriod || !monthlyPayment) {
            alert("Please fill out all fields and calculate the payment.");
            return;
        }

        // Construct query parameters
        const queryString = new URLSearchParams({
            loanAmount: loanAmount.toString(),
            initialDeposit: initialDeposit.toString(),
            loanPeriod: loanPeriod.toString(),
            monthlyPayment: monthlyPayment.toFixed(2), // Ensure decimal points
        }).toString();

        router.push(`/personalInformation?${queryString}`);
    };

    return (
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-8xl mx-auto">
            <div className="space-y-4">
                {categories.map((category, index) => (
                    <div key={index} className="border border-green-600 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleCategory(index)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-green-600 text-white text-lg md:text-xl font-medium focus:outline-none"
                        >
                            <span>{category.name}</span>
                            {openIndex === index ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                        </button>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="bg-gray-50 text-black px-6 py-4 space-y-4 border-t border-gray-200"
                            >
                                <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded-md">
                                    <p className="font-semibold text-green-700">
                                        Maximum Loan: <span className="text-black">{category.maxLoan}</span>
                                    </p>
                                    <p className="font-semibold text-green-700">
                                        Loan Period: <span className="text-black">{category.loanPeriod}</span>
                                    </p>
                                </div>
                                <div className="mt-4 space-y-3">
                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <button
                                            key={subIndex}
                                            onClick={() => openPopup(subcategory)}
                                            className="w-full flex items-center justify-between text-left px-5 py-3 border border-gray-300 rounded-md shadow-sm hover:text-green-600 hover:border-green-600 transition duration-200"
                                        >
                                            <span>{subcategory}</span>
                                            <ChevronDown className="text-gray-400" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            {/* Popup Form */}
            {popup.subcategory && (
                <Dialog open={!!popup.subcategory} onClose={closePopup} className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-lg shadow-lg md:!max-w-[500px] md:w-[500px] !max-w-[98vw] !w-[98vw] !p-6 relative"
                    >
                        <h3 className="text-lg font-bold mb-4">Apply for {popup.subcategory}</h3>
                        <form onSubmit={handleNext}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Loan Amount</label>
                                    <input
                                        type="number"
                                        value={loanAmount || ""}
                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Initial Deposit</label>
                                    <input
                                        type="number"
                                        value={initialDeposit || ""}
                                        onChange={(e) => setInitialDeposit(Number(e.target.value))}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Loan Period (in years)</label>
                                    <input
                                        type="number"
                                        value={loanPeriod || ""}
                                        onChange={(e) => setLoanPeriod(Number(e.target.value))}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
                                    />
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        onClick={calculateMonthlyPayment}
                                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700 w-full"
                                    >
                                        Calculate Monthly Payment
                                    </button>
                                    {monthlyPayment !== null && (
                                        <div className="mt-4 text-green-600 font-semibold">
                                            Your monthly payment will be: <strong>PKR {monthlyPayment.toFixed(2)}</strong>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={closePopup}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={monthlyPayment === null}
                                    className={`px-4 py-2 rounded text-white ${monthlyPayment === null ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                                        }`}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </Dialog>
            )}
        </div>
    );
};

export default ServuceDropDown;
