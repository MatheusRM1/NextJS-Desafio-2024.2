"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Produtos" },
  { href: "/admin", label: "Gerenciamento" },
  { href: "/contato", label: "Contato" },
];

const linkbuttom = [{ href: "/login", label: "Login" }];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#073576] top-0 w-full sticky z-20 mx-auto md:p-0">
      <div className="flex flex-wrap w-full p-5 justify-between items-center md:w-10/12 mx-auto">
        <div className="text-white flex lg:hidden mx-2">
          <button onClick={toogleSideBar}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <Link href="/" className="flex">
          <Image
            src={"/logo/Logo.png"}
            alt={"Logo da Loja"}
            width={904}
            height={904}
            className="h-12 w-52"
          />
        </Link>
        <nav className="flex justify-end">
          <div className="hidden lg:flex justify-end items-center gap-16">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <span className="text-xl text-white font-semibold px-8 lg:px-0 xl:px-8 hover:text-red-600 transition-all">
                  {link.label}
                </span>
              </Link>
            ))}

            {linkbuttom.map((link, index) => (
              <Link href={link.href} key={index}>
                <button className="text-xl text-white bg-red-500 font-semibold p-3 mx-2 hover:bg-blue-400  transition-all rounded-3xl">
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className={`fixed inset-0 z-30 flex flex-col bg-[#073576] p-5 lg:hidden tranform transition-transform duration-300 ease-in-out text-white ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`} >
            <button onClick={toogleSideBar}>
              <X className="w-6 h-6" />
            </button>
            <nav>
              {links.map((link, index) => (
                <Link href={link.href} key={index} onClick={toogleSideBar}>
                  <span className=" block text-xl font-semibold py-2 hover:text-red-600 transition-all my-5">
                    {link.label}
                  </span>
                </Link>
              ))}

              {linkbuttom.map((link, index) => (
                <Link href={link.href} key={index} onClick={toogleSideBar}>
                  <button className="flex text-center h-12 text-xl text-white bg-red-500 font-semibold p-3 mt-2 hover:bg-blue-400 transition-all rounded-3xl">
                    {link.label}
                  </button>
                </Link>
              ))}
              <div className="m-10">
                <Image
                  src={"/logo/Logo.png"}
                  alt={"Logo da Loja"}
                  width={904}
                  height={904}
                  className="h-12 w-52"
                />
              </div>
            </nav>
          </div>
      </div>
  );
}
