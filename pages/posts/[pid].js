import Format from "../../src/layout/format";
import Author from "../../src/components/_child/author";
import Related from "../../src/components/_child/related";
import getPost from "../../src/lib/helper";
import fetcher from "../../src/lib/fetcher";
import Spinner from "../../src/components/_child/spinner";
import Error from "../../src/components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const { pid } = router.query;

  const { data, isLoading, isError } = fetcher(`posts/${pid}`);

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return <Article {...data}></Article>;
}

export function Article(data) {
  return (
    <>
      <Format>
        <section className="container mx-auto py-14 px-4 md:w-1/2">
          <div className="flex justify-center">
            {data.author ? <Author data={data.author}></Author> : <></>}
          </div>

          <div className="post py-3">
            <h1 className="font-bold text-4xl text-gray-800 text-center pb-3">{data.title}</h1>

            <p className="text-gray-500 text-lg text-center">{data.subtitle}</p>

            <div className="py-10">
              <Image src={data.img} width={900} height={600} alt="jumbo image" priority></Image>
            </div>

            <div className="content text-gray-600 flex flex-col gap-4">{data.description}</div>
          </div>

          <div className="pt-5">
            <Related></Related>
          </div>
        </section>
      </Format>
    </>
  );
}
