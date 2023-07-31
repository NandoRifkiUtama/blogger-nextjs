import React from "react";
import moment from "moment";


const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg">
      <div className="relative overflow-hidden w-full h-[250px] md:h-[350px]">
        <Image
          className="w-full h-full object-cover rounded-t-lg"
          src={post.featuredImage.url}
          alt={post.slug}
        />
      </div>
      <div className="px-4 md:px-8 mt-4 flex items-center gap-2">
        <div className="h-7 w-7">
          <Image
            className="w-full h-full rounded-full object-cover"
            src={post.authors[0].photo.url}
            alt={post.authors[0].name}
          />
        </div>
        <div className="text-gray-500">
          <p className="font-semibold text-xs">{post.authors[0].name}</p>
        </div>
        <div className="font-semibold text-xs text-gray-500">
          <p>||</p>
        </div>
        <div>
          <p className="font-semibold text-xs text-gray-500">
            {moment(post.createdAt).format("DD MMM, YYYY")}
          </p>
        </div>
      </div>
      <div className="px-4 md:px-8 pb-2">
        <h3 className="font-bold mt-4  md:text-xl lg:text-2xl ">
          {post.title}
        </h3>
        <div className="mt-4 text-sm lg:text-md">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            );
            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
