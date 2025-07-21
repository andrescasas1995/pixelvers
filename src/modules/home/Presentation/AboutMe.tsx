
export const AboutMe = () => {
    return (
        <section id="sobre-mi" className="py-20 bg-gray-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white text-pixel">Sobre Mí</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <div className="bg-gray-medium p-6 rounded-lg border-l-4 border-primary">
                            <p className="text-gray-200 mb-4">
                                ¡Hola! Soy <strong>Andrés Casas</strong>, desarrollador y
                                diseñador digital. Mi pasión es combinar el arte digital con la tecnología para crear
                                experiencias inmersivas y únicas.
                            </p>
                            <p className="text-gray-200 mb-4">
                                Con experiencia en desarrollo web, diseño gráfico, y creación de
                                contenido digital, he dedicado mi carrera a explorar las posibilidades creativas que ofrece
                                el mundo digital.
                            </p>
                            <p className="text-gray-200">
                                Mi objetivo es crear proyectos que no solo sean funcionales sino
                                también visualmente atractivos, donde cada píxel cuenta una historia y cada interacción crea
                                una experiencia memorable.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-medium p-4 rounded-lg shadow-md glow-primary transform hover:scale-90">
                                <div className="text-primary text-4xl mb-2">10+</div>
                                <div className="text-gray-300">Años de experiencia</div>
                            </div>
                            <div className="bg-gray-medium p-4 rounded-lg shadow-md glow-accent transform hover:scale-90">
                                <div className="text-accent text-4xl mb-2">2</div>
                                <div className="text-gray-300">Proyectos en progreso</div>
                            </div>
                            <div className="bg-gray-medium p-4 rounded-lg shadow-md glow-primary transform hover:scale-90">
                                <div className="text-primary text-4xl mb-2">15+</div>
                                <div className="text-gray-300">Tecnologías manejadas</div>
                            </div>
                            <div className="bg-gray-medium p-4 rounded-lg shadow-md glow-accent transform hover:scale-90">
                                <div className="text-accent text-4xl mb-2">∞</div>
                                <div className="text-gray-300">Posibilidades creativas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
