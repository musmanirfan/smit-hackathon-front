"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import InnerPagesHeader from "@/components/InnerPagesHeader";
import InnerPageBanner from "@/components/InnerPageBanner";
import Footer from "@/components/footer";

export default function PersonalInformationClient() {
  const searchParams = useSearchParams(); // Use client-side search params
  const router = useRouter();

  // Extract query parameters
  const loanAmount = searchParams.get("loanAmount") || "";
  const initialDeposit = searchParams.get("initialDeposit") || "";
  const loanPeriod = searchParams.get("loanPeriod") || "";
  const monthlyPayment = searchParams.get("monthlyPayment") || "";

  // State for personal information
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");

  // Redirect if query parameters are missing
  useEffect(() => {
    if (!loanAmount || !initialDeposit || !loanPeriod || !monthlyPayment) {
      const timeout = setTimeout(() => {
        router.push("/"); // Redirect to home
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [loanAmount, initialDeposit, loanPeriod, monthlyPayment, router]);

  const handleSubmit = () => {
    if (!name || !cnic || !email) {
      alert("Please fill in all fields!");
      return;
    }

    const finalData = {
      loanAmount,
      initialDeposit,
      loanPeriod,
      monthlyPayment,
      name,
      cnic,
      email,
    };

    console.log("Final Data Submitted:", finalData);
    alert("Your application has been submitted successfully!");
    router.push("/login");
  };

  if (!loanAmount || !initialDeposit || !loanPeriod || !monthlyPayment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-medium text-gray-700 bg-white p-6 rounded-md shadow-md">
          No data found. Redirecting to the Loan Form...
        </p>
      </div>
    );
  }

  return (
    <>
      <InnerPagesHeader />
      <InnerPageBanner currentPage="Personal Information" previousPage="Home" />
      <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
          <h2 className="text-3xl font-extrabold text-green-700 mb-6 text-center">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Loan Details */}
            <div className="bg-gradient-to-r from-green-200 via-green-100 to-green-50 p-6 rounded-lg shadow-md border border-green-300">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Loan Details</h3>
              <p className="text-gray-800">
                <strong>Loan Amount:</strong> PKR {loanAmount}
              </p>
              <p className="text-gray-800">
                <strong>Initial Deposit:</strong> PKR {initialDeposit}
              </p>
              <p className="text-gray-800">
                <strong>Loan Period:</strong> {loanPeriod} years
              </p>
              <p className="text-gray-800">
                <strong>Monthly Payment:</strong> PKR {monthlyPayment}
              </p>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CNIC</label>
                  <input
                    type="text"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter your CNIC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:from-green-500 hover:to-green-400 transition"
          >
            Submit Application
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
