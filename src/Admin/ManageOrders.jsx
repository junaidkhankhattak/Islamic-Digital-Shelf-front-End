import React, { useEffect, useState } from "react";
import axios from "../API/axiosConfig";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border px-4 py-2">Customer Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Quantity</th>
             
              <th className="border px-4 py-2">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{order.customerName}</td>
                <td className="border px-4 py-2">{order.email}</td>
                <td className="border px-4 py-2">{order.address}</td>
                <td className="border px-4 py-2">{order.phone}</td>
                <td className="border px-4 py-2">{order.quantity}</td>
              
                <td className="border px-4 py-2">{new Date(order.orderDate).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
