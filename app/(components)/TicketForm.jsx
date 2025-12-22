"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Ticket.");
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-full max-w-md"
        method="post"
        onSubmit={handleSubmit}>
        <h3>Create Your Ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
        <label htmlFor="title">Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required
          value={formData.description}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
          rows="5"
        />

        <label>Category</label>
        <select
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
          name="category"
          value={formData.category}
          onChange={handleChange}>
          <option value={"Hardware Problem"}>Hardware Problem</option>
          <option value={"Software Problem"}>Software Problem</option>
          <option value={"Project"}>Project</option>
        </select>

        <label className="font-medium">Priority</label>

        <div className="flex items-center gap-6 ml-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <label
              key={value}
              htmlFor={`priority-${value}`}
              className="flex items-center gap-1 cursor-pointer">
              <input
                id={`priority-${value}`}
                name="priority"
                type="radio"
                value={value}
                checked={formData.priority == value}
                onChange={handleChange}
                className="accent-blue-500"
              />
              <span>{value}</span>
            </label>
          ))}
        </div>

        <label>Label</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
          <option value={"not started"}>Not Started</option>
          <option value={"started"}>Started</option>
          <option value={"done"}>Done</option>
        </select>
        <input type="submit" className="btn" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
