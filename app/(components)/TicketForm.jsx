"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
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

  const handleSubmit = () => {
    console.log("Submitted");
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

        <label>Priority</label>
        <input
          id="priority-1"
          name="priority"
          type="radio"
          onChange={handleChange}
          required
          value={1}
          checked={formData.priority == "1"}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
        <label>1</label>
        <input
          id="priority-2"
          name="priority"
          type="radio"
          onChange={handleChange}
          required
          value={2}
          checked={formData.priority == "2"}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
        <label>2</label>
        <input
          id="priority-3"
          name="priority"
          type="radio"
          onChange={handleChange}
          required
          value={3}
          checked={formData.priority == "3"}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
        <label>3</label>
        <input
          id="priority-4"
          name="priority"
          type="radio"
          onChange={handleChange}
          required
          value={4}
          checked={formData.priority == "4"}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
        <label>4</label>
        <input
          id="priority-5"
          name="priority"
          type="radio"
          onChange={handleChange}
          required
          value={5}
          checked={formData.priority == "5"}
          className="bg-white text-black border border-gray-200 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
        />
        <label>5</label>
      </form>
    </div>
  );
};

export default TicketForm;
