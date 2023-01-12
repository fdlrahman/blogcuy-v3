import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";
import fetcher from "../lib/fetcher";
import Spinner from "../components/_child/spinner";
import Error from "../components/_child/error";

function section2() {
  const { data, isLoading, isError } = fetcher("posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="py-16">
      <div className="container px-3 md:px-0 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 pb-10 text-center">Latest Post</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 justify-items-center">
          {data.map((value, index) => (
            <Post data={value} key={index}></Post>
          ))}
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  return (
    <div className="my-2">
      <div className="image my-3">
        <Link href={`/posts/${data.id}`}>
          <Image src={data.img} width="400" height="200" alt="image post" />
        </Link>
      </div>
      <div className="info w-96 md:w-auto">
        <div className="cat text-sm">
          <Link href={`/posts/${data.id}`} className="text-sky-600">
            {data.category}
          </Link>
          <Link href={`/posts/${data.id}`} className="text-gray-800">
            - {data.published}
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`} className="font-bold text-lg hover:text-gray-700">
            {data.title}
          </Link>
        </div>
        <p className="text-sm py-2">{data.subtitle}</p>

        {data.author ? <Author data={data.author}></Author> : <></>}
      </div>
    </div>
  );
}

export default section2;
