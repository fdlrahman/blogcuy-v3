import Image from "next/image";

export default function error() {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold text-gray-600 py-2">Hey!</h1>
      <h1 className="text-xl font-bold text-orange-600 pb-10">Something Went Wrong</h1>

      <div className="flex justify-center">
        <Image
          src={"/images/not_found.png"}
          alt="not found image"
          height={300}
          width={300}
          priority
        ></Image>
      </div>
    </div>
  );
}
