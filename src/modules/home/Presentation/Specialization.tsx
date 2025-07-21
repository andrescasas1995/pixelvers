
export const Specialization = () => {
    return (
        <section className="py-20 bg-gray-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 text-white">Áreas de Especialización</h2>
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">Mis servicios profesionales abarcan diferentes
                    áreas del mundo digital, combinando creatividad y tecnología.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div
                        className="bg-gray-medium rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 card">
                        <div className="h-40 bg-primary bg-opacity-20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                </path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Diseño Creativo</h3>
                            <p className="text-gray-300">Creo diseños visuales impactantes que comunican efectivamente el
                                mensaje de tu marca, desde identidad corporativa hasta interfaces digitales.</p>
                        </div>
                    </div>

                    <div
                        className="bg-gray-medium rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 card">
                        <div className="h-40 bg-secondary bg-opacity-20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                                </path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Desarrollo Web</h3>
                            <p className="text-gray-300">Desarrollo sitios web y aplicaciones que combinan diseño atractivo con
                                funcionalidad intuitiva, creando experiencias digitales memorables.</p>
                        </div>
                    </div>

                    <div
                        className="bg-gray-medium rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 card">
                        <div className="h-40 bg-accent bg-opacity-20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3">Contenido Digital</h3>
                            <p className="text-gray-300">Creación de contenido multimedia que cuenta historias y conecta con
                                audiencias en diferentes plataformas digitales.</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-8 mt-16 text-white">Servicios Específicos</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        className="bg-gray-medium rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 card">
                        <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Diseño UI/UX</h4>
                        <p className="text-gray-300">Interfaces de usuario atractivas y experiencias de usuario intuitivas para
                            aplicaciones web y móviles.</p>
                    </div>

                    <div
                        className="bg-gray-medium rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 card">
                        <div
                            className="w-12 h-12 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Desarrollo Frontend</h4>
                        <p className="text-gray-300">Implementación de interfaces de usuario con las últimas tecnologías web
                            para crear experiencias interactivas.</p>
                    </div>

                    <div
                        className="bg-gray-medium rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 card">
                        <div className="w-12 h-12 rounded-full bg-accent bg-opacity-20 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                                </path>
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Identidad Visual</h4>
                        <p className="text-gray-300">Creación de identidades de marca coherentes, incluyendo logos, paletas de
                            colores y guías de estilo.</p>
                    </div>

                    <div
                        className="bg-gray-medium rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2 card">
                        <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                                </path>
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Experiencias Interactivas</h4>
                        <p className="text-gray-300">Desarrollo de experiencias digitales inmersivas que invitan a la
                            exploración y la interacción.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
