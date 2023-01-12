import React from "react";
import Link from "next/link";
import Author from "./author";
import fetcher from "../../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";
import Image from "next/image";

function Related() {
  const { data, isLoading, isError } = fetcher("trending");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <div>
      <h1 className="text-xl font-bold">Related</h1>

      <div className="posts py-4 flex flex-col gap-3">
        {data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </div>
  );
}

function Post({ data }) {
  return (
    <div className="flex gap-3 my-4">
      <div className="image">
        <Link href={`/posts/${data.id}`}>
          <Image src={data.img} width={200} height={200} alt="post image"></Image>
        </Link>
      </div>
      <div className="info">
        <div className="cat text-sm">
          <Link href={`/posts/${data.id}`} className="text-sky-600">
            {data.category}
          </Link>
          <Link href={`/posts/${data.id}`} className="text-gray-800">
            - {data.published}
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`} className="font-bold text-1xl hover:text-gray-700">
            {data.title}
          </Link>
        </div>
        {data.author ? <Author data={data.author}></Author> : <></>}
      </div>
    </div>
  );
}

export default Related;
