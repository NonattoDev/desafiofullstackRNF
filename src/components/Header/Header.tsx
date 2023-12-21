import Image from "next/image";
import iconeGitHub from "../../../public/githubicon.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md mb-5">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Desafio Fullstack</a>
      </div>
      <div className="navbar-end">
        <Link href="https://github.com/NonattoDev">
          <Image src={iconeGitHub} width={30} height={30} alt="Icone GitHub" />
        </Link>
      </div>
    </div>
  );
}
