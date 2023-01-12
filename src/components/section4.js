import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "../components/_child/spinner";
import Error from "../components/_child/error";
import author from "./_child/author";

function section4() {
  const { data, isLoading, isError } = fetcher("posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="py-16">
      <div className="container px-3 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Business</h1>

            {/* posts */}
            <div className="my-7">
              {data[0] ? <Post data={data[0]}></Post> : <></>}
              {data[1] ? <Post data={data[1]}></Post> : <></>}
              {data[2] ? <Post data={data[2]}></Post> : <></>}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Travel</h1>

            {/* posts */}
            <div className="my-7">
              {data[1] ? <Post data={data[1]}></Post> : <></>}
              {data[2] ? <Post data={data[2]}></Post> : <></>}
              {data[3] ? <Post data={data[3]}></Post> : <></>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const bg = {
    background: `url(${data.img}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div className="flex gap-3 my-4">
      <div className="image">
        <Link href={`/posts/${data.id}`}>
          <div className="bg-gray-500 w-40 h-32" style={bg}></div>
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
        {data.author ? <Author data={author}></Author> : <></>}
      </div>
    </div>
  );
}

export default section4;
