'use client'
import React, { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="max-w-md mx-auto p-4 border mb-10 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-2">Comments Section</h2>
      <p className="text-gray-500 dark:text-white mb-4">Share your thoughts below!</p>

      {/* Input Box */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Write a comment..."
        />
        <button
          onClick={addComment}
          className="px-4 py-2 bg-orange-400 text-white rounded-lg dark:bg-orange-400"
        >
          Post
        </button>
      </div>

      {/* Comments List */}
      <div className="mt-4">
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-white">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 dark:text-black px-4 py-2 mb-2 rounded-lg"
            >
              <p>{comment}</p>
              <button
                onClick={() => deleteComment(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentsSection;