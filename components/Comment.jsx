import React, { useState, useEffect } from "react";
import moment from "moment";
import { getComments } from "../services";


const Comment = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);
  return (
  <>
    {comments.length > 0 && (
      <div className="bg-black/20 px-4 py-6 mt-4 rounded-lg gap-2">
        <h3 className="font-semibold py-2 ">{comments.length}{' '}Comments</h3>
        {comments.map((comment)=>(
          <div key={comment.slug} className="border border-white p-2 rounded-xl mb-3">
            <p className="text-sm md:text-md px-4"><span className="font-semibold text-gray-800">{comment.name}</span>{' '}on{' '}{moment(comment.createdAt).format('MMM DD, YYYY')}</p>
            <p className="text-sm md:text-md px-4">{comment.comment}</p>
          </div>
        ))}
      </div>
    )}
  </>);
};

export default Comment;
