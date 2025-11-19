import { useState } from "react";

export default function example() {
  // define the function inside your component
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    toast.success("✅ Your form has been submitted!");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full max-w-md bg-white p-6 rounded-lg shadow"
      >
        <input
          className="border px-3 py-2 rounded-md"
          placeholder="First name *"
          required
        />
        <input className="border px-3 py-2 rounded-md" placeholder="Last name" />
        <input className="border px-3 py-2 rounded-md" placeholder="Phone" />
        <input
          type="email"
          className="border px-3 py-2 rounded-md"
          placeholder="Email *"
          required
        />
        <textarea
          className="border px-3 py-2 rounded-md h-24"
          placeholder="Write a message"
        />

        <button
          type="submit"
          className="px-5 py-2 rounded-md bg-orange-500 text-white w-fit shadow hover:bg-orange-600 transition"
        >
          Send
        </button>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}
