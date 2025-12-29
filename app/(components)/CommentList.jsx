"use client";

import { useRouter } from "next/navigation";

const CommentList = ({ comments = [], ticketId }) => {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (comments.length === 0) {
    return <p className="text-sm text-gray-500 mt-4">No comments yet.</p>;
  }

  const handleDelete = async (commentId) => {
    const res = await fetch(
      `${API_URL}/api/Tickets/${ticketId}/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete comment");
    }

    router.refresh();
  };

  return (
    <div className="mt-4 space-y-3">
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="relative rounded border p-3 text-sm bg-gray-50">
          {/* ❌ Delete button */}
          <button
            onClick={() => handleDelete(comment._id)}
            className="absolute top-1 right-1 text-gray-400 hover:text-red-500"
            title="Delete comment">
            ✕
          </button>

          <p className="text-gray-900">{comment.text}</p>

          <span className="text-xs text-gray-500">
            {new Date(comment.createdAt).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
