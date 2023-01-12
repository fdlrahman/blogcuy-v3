import { ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";

function header() {
  return (
    <header className="bg-sky-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-3 sm:py-0">
          <input type="text" className="text-input" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"} className="navbar-brand">
            Spy&apos;s Lab ,
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={"https://www.instagram.com/sf.del/"} target="_blank">
              <ImInstagram color="#888888" />
            </Link>
            <Link href={"https://twitter.com/OrangKhayah"} target="_blank">
              <ImTwitter color="#888888" />
            </Link>
            <Link href={"https://github.com/fdlrahman"} target="_blank">
              <ImGithub color="#888888" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
