import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between px-50 py-9 bg-zinc-900 text-white">
      <Link href={"/"} className="font-semibold">
        {"</ricardo>"}
      </Link>

      <nav className="flex gap-6">
        <Link href={"/about"}>Sobre</Link>
        <Link href={"/projects"}>Projetos</Link>
        <Link href={"/contact"}>Contatos</Link>
      </nav>
    </header>
  );
}
