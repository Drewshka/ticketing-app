const CommentList = ({ comments = [] }) => {
  if (comments.length === 0) {
    return <p className="text-sm text-gray-500 mt-4">No comments yet.</p>;
  }

  return (
    <div className="mt-6 space-y-3">
      <h4 className="font-semibold">Comments</h4>
      {comments.map((comment, index) => (
        <div key={index} className="rounded border p-2 text-sm bg-gray-50">
          <p>{comment.text}</p>
          <span className="text-xs text-gray-500">
            {new Date(comment.createdAt).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
