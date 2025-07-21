import perfil from '../../../assets/Perfil.jpg';

export const MySelf = () => {
    return (
        <section id="inicio" className="hero-gradient text-white p-20 pixel-grid bg-darker">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pixel">
                        Hola, soy <span className="text-secondary">Andrés Casas</span>
                    </h1>
                    <p className="text-xl mb-6">Desarrollador y Diseñador Digital</p>
                    <p className="mb-8 opacity-90">Explorando la creatividad a través de píxeles, diseño y tecnología para crear
                        experiencias digitales únicas.</p>
                    <div className="flex space-x-4">
                        <a href="#"
                            className="bg-secondary text-dark px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition duration-300">Ver
                            Proyectos</a>
                        <a href="#"
                            className="border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-dark transition duration-300">Contactar</a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center transform rotate-350">
                    <div className="w-72 h-72 rounded-lg bg-gray-dark p-2 shadow-xl pixel-animation glow transform hover:rotate-25 hover:scale-120
                    active:scale-90 active:rotate-25 transition duration-300">
                        <div className="w-full h-full rounded-lg bg-darker flex items-center justify-center overflow-hidden">
                            <img src={perfil} alt="Perfil" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
