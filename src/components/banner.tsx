export default function Banner() {
  return (
    <section className="bg-gray-50 max-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-left md:text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <p>Oi, eu sou o Edson Alves</p>
            <strong className="font-extrabold text-stone-400 sm:block">Desenvolvedor Fullstack</strong>
          </h1>

          <p className="mt-4 sm:text-md/relaxed">
            Apaixonado por aprender e aplicar novas tecnologias para criar soluções eficientes e escaláveis.
          </p>

          <div className="mt-8 flex md:flex-wrap justify-start md:justify-center gap-4">
            <a
              className="block w-fit rounded bg-black px-4 md:px-12 py-3 text-sm font-medium text-white shadow hover:bg-stone-400 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Curriculo
            </a>

            <a
              className="block w-fit rounded px-4 md:px-12 py-3 text-sm font-medium text-black border shadow-md hover:text-stone-400 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}