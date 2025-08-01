import React, { useState } from "react";
import ManageBooks from "./ManageBooks";
import ManageOrders from "./ManageOrders";
import ManageUsers from "./ManageUsers"; // 👈 new import

const AdminDashboard = () => {
  const [section, setSection] = useState("books");

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-blue-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <button
          onClick={() => setSection("books")}
          className="block w-full text-left py-2 hover:bg-blue-700 rounded"
        >
           Manage Books
        </button>
        <button
          onClick={() => setSection("orders")}
          className="block w-full text-left py-2 hover:bg-blue-700 rounded"
        >
           View Orders
        </button>
        <button
          onClick={() => setSection("users")}
          className="block w-full text-left py-2 hover:bg-blue-700 rounded"
        >
           Manage Users
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {section === "books" && <ManageBooks />}
        {section === "orders" && <ManageOrders />}
        {section === "users" && <ManageUsers />}
      </div>
    </div>
  );
};

export default AdminDashboard;
