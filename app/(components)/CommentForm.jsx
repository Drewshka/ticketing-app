"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CommentForm = ({ ticket }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log("id", ticket._id);
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/Tickets/${ticket._id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Comment error:", errorData);
      throw new Error(errorData.message || "Failed to add comment");
    }

    setText("");
    setLoading(false);
    router.refresh(); // re-fetch ticket with new comments
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-2">
      <label className="font-medium">Add Comment</label>
      <textarea
        className="w-full rounded border p-2 bg-white text-black"
        rows={3}
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        disabled={loading}
        type="submit"
        className="btn"
        value={loading ? "Adding..." : "Add Comment"}
      />
    </form>
  );
};

export default CommentForm;
