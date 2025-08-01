import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "../../API/axiosConfig"; // Update path as needed

const OrderPopup = ({ orderPopup, setOrderPopup, selectedBook, setOrderCount }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    address: "",
    phone: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   const orderData = {
  customerName: formData.customerName,
  email: formData.email,
  address: formData.address,
  phone: formData.phone,
  quantity: parseInt(formData.quantity),
  bookId: selectedBook?.id, // ✅ dynamic from clicked book
};


    try {
      const res = await axios.post("/orders/place", orderData);
      console.log("Order placed successfully:", res.data);

      if (typeof setOrderCount === "function") {
        setOrderCount((prev) => prev + 1);
      }

      setOrderPopup(false);
      setFormData({
        customerName: "",
        email: "",
        address: "",
        phone: "",
        quantity: 1,
      });
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order.");
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg w-[350px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
                Order: {selectedBook?.title}
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer text-gray-700 hover:text-red-500"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                required
                className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2"
              />

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-105 duration-200 text-white py-2 px-6 rounded-full font-semibold"
                >
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
