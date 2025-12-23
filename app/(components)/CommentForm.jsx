"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CommentForm = ({ ticket }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //   const EDITMODE = ticket.id === "new" ? false : true;

  //   console.log("EDITMODE", EDITMODE);

  //    const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (EDITMODE) {
  //       const res = await fetch(`/api/Tickets/${ticket._id}`, {
  //         method: "PUT",
  //         body: JSON.stringify({ formData }),
  //         "content-type": "application/json",
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to update Ticket.");
  //       }
  //     } else {
  //       const res = await fetch("/api/Tickets", {
  //         method: "POST",
  //         body: JSON.stringify({ formData }),
  //         "content-type": "application/json",
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to create Ticket.");
  //       }
  //     }
  //     router.refresh();
  //     router.push("/");
  //   };

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
        className="w-full rounded border p-2"
        rows={3}
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button
        disabled={loading}
        className="rounded bg-blue-600 px-3 py-1 text-white disabled:opacity-50">
        {loading ? "Adding..." : "Add Comment"}
      </button>
    </form>
  );
};

export default CommentForm;
