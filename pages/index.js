import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../services";

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default function Home({posts}) {
  return (
    <main className="container mx-auto px-10 pb-8">
      <Head>
        <title>Blogger</title>
        <link
          rel="icon"
          href="https://www.flaticon.com/free-icon/blogger_3669981"
        />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12">
        <div className="col-span-1 md:col-span-9 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-4 text-gray-800">
          <div className="md:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
