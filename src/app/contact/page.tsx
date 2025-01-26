"use client";

import Footer from "@/components/footer";
import InnerPageBanner from "@/components/InnerPageBanner";
import InnerPagesHeader from "@/components/InnerPagesHeader";
import React, { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert("Thank you for contacting us!");
            setIsSubmitting(false);
            setName("");
            setEmail("");
            setMessage("");
        }, 1500);
    };

    return (
        <>
            <InnerPagesHeader />
            <InnerPageBanner currentPage={"Contact"} previousPage={'Home'} />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-screen-md md:w-[75vw]">
                    <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                        Contact Us
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                placeholder="Enter your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-2 text-white font-medium rounded-lg shadow ${isSubmitting
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-600 hover:bg-green-500 transition duration-300"
                                }`}
                        >
                            {isSubmitting ? "Submitting..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
