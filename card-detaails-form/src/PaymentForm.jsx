import React, { useState } from "react";
import CardFront from "./assets/bg-card-front.png";
import CardBack from "./assets/bg-card-back.png";
import MainBg from "./assets/bg-main-desktop.png";

const PaymentForm = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Cardholder name is required";
    if (!form.number) {
      newErrors.number = "Card number is required";
    } else if (!/^\d{16}$/.test(form.number.replace(/\s/g, ""))) {
      newErrors.number = "Card number must be 16 digits";
    }

    if (!form.expMonth || !form.expYear) {
      newErrors.exp = "Expiry date is required";
    } else if (
      !/^\d{2}$/.test(form.expMonth) ||
      !/^\d{2}$/.test(form.expYear) ||
      parseInt(form.expMonth) < 1 ||
      parseInt(form.expMonth) > 12
    ) {
      newErrors.exp = "Invalid expiry date";
    }

    if (!form.cvc) {
      newErrors.cvc = "CVC is required";
    } else if (!/^\d{3}$/.test(form.cvc)) {
      newErrors.cvc = "CVC must be 3 digits";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Payment submitted!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Card section */}
      <div className="relative w-full md:w-2/5 h-screen flex justify-center items-center">
        <img
          src={MainBg}
          alt="Main Background"
          className="absolute inset-0 w-[300px] h-full object-cover"
        />

        <div className="relative z-10 flex flex-col space-y-8 items-start justify-center px-6 translate-x-20">
          {/* Front Card */}
          <div className="relative translate-x-2">
            <img
              src={CardFront}
              alt="Card Front"
              className="w-80 rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between text-white">
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 bg-white rounded-full"></div>
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              </div>
              <div className="text-lg tracking-widest">
                {form.number
                  ? form.number.padEnd(16, "•").replace(/(.{4})/g, "$1 ").trim()
                  : "0000 0000 0000 0000"}
              </div>
              <div className="flex justify-between text-sm">
                <span>{form.name || "JANE APPLESEED"}</span>
                <span>
                  {form.expMonth || "00"}/{form.expYear || "00"}
                </span>
              </div>
            </div>
          </div>

          {/* Back Card */}
          <div className="relative ml-20">
            <img
              src={CardBack}
              alt="Card Back"
              className="w-80 rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-6 bottom-0 flex items-center justify-end pr-4 text-black text-sm">
              {form.cvc || "000"}
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="w-full md:w-1/2 flex items-center justify-end bg-white">
        <form
          className="w-full max-w-md space-y-4 pl-4 pr-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-xs font-semibold mb-1">
              CARDHOLDER NAME
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">
              CARD NUMBER
            </label>
            <input
              name="number"
              type="text"
              value={form.number}
              onChange={handleChange}
              placeholder="e.g. 1234 5678 9123 0000"
              className={`w-full border ${
                errors.number ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">
                EXP. DATE (MM/YY)
              </label>
              <div className="flex space-x-2">
                <input
                  name="expMonth"
                  type="text"
                  value={form.expMonth}
                  onChange={handleChange}
                  placeholder="MM"
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
                <input
                  name="expYear"
                  type="text"
                  value={form.expYear}
                  onChange={handleChange}
                  placeholder="YY"
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
              </div>
              {errors.exp && <p className="text-red-500 text-xs">{errors.exp}</p>}
            </div>

            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">CVC</label>
              <input
                name="cvc"
                type="text"
                value={form.cvc}
                onChange={handleChange}
                placeholder="e.g. 123"
                className={`w-full border ${
                  errors.cvc ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.cvc && <p className="text-red-500 text-xs">{errors.cvc}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-900 text-white rounded-md p-3 mt-4 hover:bg-purple-800 transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
