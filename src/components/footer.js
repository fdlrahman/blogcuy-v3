import Newsletter from "./_child/newslatter";
import { ImInstagram, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";

function footer() {
  const yearNow = new Date().getFullYear();

  const bg = {
    background: "url(/images/footer.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "370px",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>

      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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

          <p className="py-5 text-gray-400 text-sm">
            Copyright ©{yearNow} All rights reserved | This template made by sf.del
          </p>
          <p className="text-gray-400 text-center text-sm">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
