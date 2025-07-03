// VerifyCode.jsx
import React, { useState } from "react";

const VerifyCode = ({ isOpen, onClose }) => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...code];
    updated[index] = value;
    setCode(updated);

    // Auto focus next input
    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent  backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-center">
          Enter Verification Code
        </h3>
        <p className="text-gray-600 text-center mb-4">
          We've sent a 4-digit code to your email.
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded text-lg focus:ring-2 focus:ring-lime-400"
            />
          ))}
        </div>

        <div className="flex justify-center ">
          <button
            onClick={onClose}
            className="bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
