"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GuarantorForm() {
  const [guarantor1Cnic, setGuarantor1Cnic] = useState("");
  const [guarantor1Email, setGuarantor1Email] = useState("");
  const [guarantor2Cnic, setGuarantor2Cnic] = useState("");
  const [guarantor2Email, setGuarantor2Email] = useState("");
  const [bankSlip, setBankSlip] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const route = useRouter();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBankSlip(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Simulate submission or API call
    setIsLoading(true);
    console.log(setErrorMessage, setIsError);
    
    setTimeout(() => {
      alert("Form submitted successfully!");
      setIsLoading(false);
      route.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="login_container flex w-full h-screen justify-center items-center bg-gradient-to-br from-green-100 to-green-50 p-4">
      <div className="login_child_container bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-center font-bold text-3xl mb-6 text-green-700">Guarantor Information</h2>

        {/* Guarantor 1 CNIC and Email */}
        <div className="mb-5">
          <label htmlFor="guarantor1Cnic" className="block text-sm font-medium text-gray-700 mb-2">
            Guarantor 1 CNIC
          </label>
          <input
            id="guarantor1Cnic"
            type="text"
            placeholder="Enter Guarantor 1 CNIC"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            value={guarantor1Cnic}
            onChange={(e) => setGuarantor1Cnic(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="guarantor1Email" className="block text-sm font-medium text-gray-700 mb-2">
            Guarantor 1 Email
          </label>
          <input
            id="guarantor1Email"
            type="email"
            placeholder="Enter Guarantor 1 Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            value={guarantor1Email}
            onChange={(e) => setGuarantor1Email(e.target.value)}
          />
        </div>

        {/* Guarantor 2 CNIC and Email */}
        <div className="mb-5">
          <label htmlFor="guarantor2Cnic" className="block text-sm font-medium text-gray-700 mb-2">
            Guarantor 2 CNIC
          </label>
          <input
            id="guarantor2Cnic"
            type="text"
            placeholder="Enter Guarantor 2 CNIC"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            value={guarantor2Cnic}
            onChange={(e) => setGuarantor2Cnic(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="guarantor2Email" className="block text-sm font-medium text-gray-700 mb-2">
            Guarantor 2 Email
          </label>
          <input
            id="guarantor2Email"
            type="email"
            placeholder="Enter Guarantor 2 Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            value={guarantor2Email}
            onChange={(e) => setGuarantor2Email(e.target.value)}
          />
        </div>

        {/* Bank Slip Upload */}
        <div className="mb-5">
          <label htmlFor="bankSlip" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Bank Slip or Salary Slip
          </label>
          <input
            id="bankSlip"
            type="file"
            className="w-full"
            onChange={handleFileUpload}
          />
          {bankSlip && (
            <p className="text-sm mt-2 text-green-600">
              File Selected: {bankSlip.name}
            </p>
          )}
        </div>

        {/* Error Message */}
        {isError && (
          <div className="bg-red-100 text-red-700 border border-red-500 rounded-lg p-3 text-sm mb-5">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          disabled={isLoading}
          className={`w-full py-2 text-white rounded-lg font-medium shadow ${isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-500 transition duration-300"
            }`}
          onClick={handleSubmit}
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
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}
