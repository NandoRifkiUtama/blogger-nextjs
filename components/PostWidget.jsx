import React, { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { getRecentPosts, getSimilarPosts } from "../services";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [categories]);
  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg mb-4 p-2 md:p-4">
      <h3 className="font-semibold p-3 border-b border-gray-400">{slug ? "Related Post" : "Recent Post"}</h3>
      {relatedPost.map((post) => (
        <div key={post.title} className="flex gap-3 items-center my-6 text-xs">
          <div className="flex items-center justify-center p-2">
            <img
              className="w-[50px] h-[35px] object-cover rounded-full"
              src={post.featuredImage.url}
              alt={post.title}
            />
          </div>
          <div>
            <Link href={`/post/${post.slug}`}>
              <p className="font-semibold hover:text-gray-400 duration-300">
                {post.title}
              </p>
            </Link>
            <div className="flex gap-2 items-center mt-2">
              <AccessTimeIcon fontSize="xs" color="primary" />
              <p>{moment(post).format("MMM DD, YYYY")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
