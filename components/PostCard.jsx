import React from "react";
import Link from "next/link";
import moment from "moment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg mb-4 p-2 md:p-4">
      <div className="relative overflow-hidden shadow-md pb-80">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          fill
          className="object-cover rounded-lg absolute object-top h-80 w-full "
        />
      </div>
      <h1 className="font-bold mt-4 hover:text-gray-400 duration-500 md:text-xl lg:text-2xl">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="flex gap-4 items-center text-gray-800 my-4">
        <div className="flex items-center justify-center">
          <img
            src={post.authors[0].photo.url}
            alt={post.authors.name}
            fill
            className="rounded-full object-cover h-[30px] w-[30px]"
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-xs font-semibold text-gray-900">
            {post.authors[0].name}{" "}
            <span className="text-lg mx-3 text-gray-300">|</span>
          </p>
          <div className="flex gap-2">
            <AccessTimeIcon fontSize="xs" color="primary" />
            <div className="text-xs ">{moment(post.createdAt).format("MMM DD, YYYY")}</div>
          </div>
        </div>
      </div>
      <p className="text-sm mt-2 text-gray-500">{post.excerpt}</p>
      <div className="mt-3">
        <Link
          className="flex font-semibold hover:text-gray-400 transform hover:translate-x-1 duration-300 gap-2 items-center justify-start"
          href={`/post/${post.slug}`}
        >
          <p className="text-sm">Read More</p>
          <div>
            <ArrowForwardIcon fontSize="xs" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
