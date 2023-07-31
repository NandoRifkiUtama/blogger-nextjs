import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

const CommentForms = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const nameElement = useRef();
  const emailElement = useRef();
  const commentElement = useRef();
  const storeDataElement = useRef();

  useEffect(() => {
    nameElement.current.value = window.localStorage.getItem("name");
    emailElement.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: name } = nameElement.current;
    const { value: email } = emailElement.current;
    const { value: comment } = commentElement.current;
    const { checked: storeData } = storeDataElement.current;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    });
  };

  return (
    <div className="bg-black/20 px-4 py-6 mt-4 rounded-lg gap-2">
      <h3 className="text-gray-200 font-bold py-2">Give a Feedback</h3>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <input
          ref={nameElement}
          type="text"
          name="name"
          placeholder="Name"
          className="bg-gray-300 rounded-lg px-4 py-2 text-gray-800 md:col-span-6 text-xs md:text-md outline-none"
        />
        <input
          ref={emailElement}
          type="email"
          name="email"
          placeholder="Email"
          className="bg-gray-300 rounded-lg px-4 py-2 text-gray-800 md:col-span-6 text-xs md:text-md outline-none"
        />
      </div>
      <textarea
        ref={commentElement}
        name="text"
        id=""
        cols="30"
        rows="5"
        placeholder="Comment"
        className="grid grid-cols-1 w-full mt-2 bg-gray-300 rounded-lg px-4 py-2 text-gray-800 text-xs md:text-md outline-none"
      />
      {error && (
        <p className="text-red-500 text-sm md:text-md my-4">
          All fields need to fill in !
        </p>
      )}
      <div className="grid grid-col-1 my-2">
        <div className="flex gap-2 items-center">
          <input
            className="hover:cursor-pointer"
            ref={storeDataElement}
            type="checkbox"
            id="storeData"
            name="storeData"
            value={true}
          />
          <p className="text-sm md:text-md">Remember your email</p>
        </div>
      </div>
      <div className="flex gap-2 ">
        <div>
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="bg-sky-500 text-xs md:text-md px-4 py-2 rounded-full mt-4 font-semibold hover:bg-sky-600 duration-300 "
          >
            Submit Comment
          </button>
        </div>
        <div className="pt-1">
          {showSuccessMessage && (
            <p className="text-green-500 font-bold text-sm md:text-md my-4">
              Success submitted comment for review
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentForms;
