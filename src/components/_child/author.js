import Image from "next/image";

function author({ data }) {
  if (!data) return <></>;

  return (
    <div className="author flex py-4">
      <div className="image">
        <Image
          src={"/images/author/author1.jpg"}
          className="rounded-full"
          width={40}
          height={40}
          alt="author image"
        ></Image>
      </div>
      <div className="info mx-3 flex justify-center flex-col text-sm">
        <h1 className="font-bold text-gray-700">{data.name}</h1>
        <p className="text-gray-500">{data.designation}</p>
      </div>
    </div>
  );
}

export default author;
