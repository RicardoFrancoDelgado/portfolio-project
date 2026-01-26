import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 px-30 bg-zinc-900 text-white">
      <div className="col-span-3 row-span-3 row-start-2">
        <div className="flex flex-col justify-evenly h-100">
          <h1 className="flex flex-col text-3xl gap-4">
            Olá! Meu nome é{" "}
            <span className="text-green-700 text-6xl">
              Ricardo Franco Delgado
            </span>
          </h1>
          <p className="mt-2 text-2xl">
            Sou um desenvolvedor apaixonado por resolver problemas através da
            tecnologia. Meu stack principal envolve Next.js, TypeScript e
            Tailwind para o front-end, complementado pela agilidade do Go
            (Golang) e a estruturação de dados em SQL. Sempre em busca de
            construir aplicações eficientes e com ótima experiência de uso.
          </p>
        </div>

        <div className="flex gap-8 mt-9">
          <button type="button">Download CV</button>
          <button type="button">GitHub</button>
          <button type="button">LinkedIn</button>
        </div>
      </div>
      <div className="col-span-2 row-span-3 col-start-4 row-start-2">
        <Image src={"/icon-me-Photoroom.png"} width={600} height={600} alt="" />
      </div>
    </div>
  );
}
