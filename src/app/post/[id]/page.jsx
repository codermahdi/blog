"use client";

import { useParams } from "next/navigation";
import blogData from "../../data/blogData.json"; // We will create this file in Task 3.
import Link from "next/link";

const page = () => {
  const params = useParams();

  // console.log(router);
  const { id } = params;
  const post = blogData.find((post) => post.id === parseInt(id));

  return (
    <>
      <div className="mx-14 text-center">
        <button className="btn btn-wide btn-primary my-10">
          <Link href={"/blog"}>Go Blog Page</Link>
        </button>

        <article className="flex flex-col shadow my-4 text-justify">
          <img
            className="w-1/2"
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
          />
          <div className="flex flex-col justify-start p-6">
            <h1 className="text-2xl font-bold pb-3">{post.title}</h1>
            <p href="#" className="text-sm pb-8">
              Published on {post.date}
            </p>
            <p className="pb-3">{post.content}</p>
          </div>
        </article>
        <h2>Chamge</h2>
      </div>
    </>
  );
};

export default page;
