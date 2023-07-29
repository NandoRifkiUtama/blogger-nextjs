import React from "react";
import { useRouter } from "next/router";
import {
  PostDetail,
  Author,
  CommentForms,
  Comment,
  PostWidget,
  Categories,
  Loader,
} from "../../components";
import { getPosts, getPostDetails } from "../../services";

const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-9 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.authors} />
          <CommentForms slug={post.slug} />
          <Comment slug={post.slug} />
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-4 text-gray-800">
          <div className="md:sticky relative top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
