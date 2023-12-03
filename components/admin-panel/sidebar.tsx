"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

type Link = {
  text: string;
  url: string;
};

interface SideBarProps {
  links: Link[];
}

const SideBar: FunctionComponent<SideBarProps> = ({ links }: SideBarProps) => {
  const path = usePathname();
  return (
    <section className="flex flex-col items-center bg-gray-900 text-white pt-28">
      <h2 className="text-xl">Admin panel</h2>

      <div className="flex flex-col w-full gap-5 pt-10 px-10 ">
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={`transition ${
              path === link.url ? "text-indigo-500" : "hover:text-indigo-200"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
