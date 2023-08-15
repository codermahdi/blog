import React from "react";
import blogData from "../data/blogData.json";
import Link from "next/link";

const Blog = () => {
  console.log(blogData);
  return (
    <div className="h-[92.3vh]">
      <h2 className="pt-12 text-center font-bold">BLOG Page</h2>
      <ul className="flex flex-row space-x-10 py-10 px-10">
        {blogData?.map((post) => (
          <li key={post.id} className="my-5">
            <div className="card w-96 bg-base-100 shadow-xl ">
              <Link href={`/post/${post.id}`}>
                <div className="card-body p-0">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={post.image}
                  />
                  <div className="p-5">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="mt-2">{post.content}</p>
                    <div className="card-actions justify-start mt-3">
                      <button className="btn btn-primary">Show Details</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
