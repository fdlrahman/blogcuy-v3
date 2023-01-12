import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "../components/_child/spinner";
import Error from "../components/_child/error";

function section1() {
  const { data, isLoading, isError } = fetcher("trending");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  const bg = {
    background: "url(images/banner.png) no-repeat",
    backgroundPosition: "right",
    backgroundSize: "370px",
  };

  SwiperCore.use([Autoplay]);

  return (
    <section className="py-16" style={bg}>
      <div className="container px-10 md:px-0 mx-auto">
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 5000 }}>
          {data.map((value, index) => (
            <SwiperSlide key={index}>{<Slide data={value}></Slide>}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const Slide = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="image">
        <Link href={`/posts/${data.id}`}>
          <Image src={data.img} width={480} height={480} alt="image slide" priority />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${data.id}`} className="text-sky-600">
            {data.category}
          </Link>
          <Link href={`/posts/${data.id}`} className="text-gray-800">
            - {data.published}
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`}>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 hover:text-gray-700">
              {data.title}
            </h1>
          </Link>
        </div>
        <p className="text-gray-500 py-4">{data.subtitle}</p>

        {data.author ? <Author data={data.author}></Author> : <></>}
      </div>
    </div>
  );
};

export default section1;
