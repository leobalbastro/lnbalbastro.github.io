// aca va todo lo de la pagina principal
export default function Home() {
    return (
        <>
            <section className="p-3 text-center">
                <div className="flex justify-center flex-col">
                    <p className="lg:text-5xl text-base md:text-xl">Leonardo Balbastro</p>
                    <h2 className="lg:text-3xl text-base md:text-xl ">Web Developer</h2>
                </div>
            </section>
            <section className="p-3 text-center flex justify-center">
                <p className="w-2/3 text-start lg:text-lg text-base md:text-xl">Bienvenidos a mi sitio personal, esta pagina es el home y esta destinada para ser un punto de partida para todo aquel interesado en mis conocimientos en desarrollo web, esta pagina esta construida en NextJS 13, usando Typescript y TailwindCSS, se utilizan componentes propios del framework y se customiza a partir de tailwind. La idea de esta web es darle una nueva perspectiva y modernizarla, así como implementar tema claro/oscuro , lazyloading, y todo esto sin perder de vista el SEO de la pagina, para que en todo momento sea una mejora pura de la version anterior.</p>
            </section>
        </>
    )
}