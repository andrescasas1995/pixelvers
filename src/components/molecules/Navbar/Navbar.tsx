import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from './Navbar.types';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-darker text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold select-none">AC</div>

                {/* Enlaces para escritorio */}
                <div className="hidden md:flex space-x-6">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `nav-link py-2 ${isActive ? 'text-accent font-bold' : ''}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* Botón de menú móvil */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    ☰
                </button>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `block py-2 nav-link transition-colors ${isActive ? 'text-accent font-bold' : ''
                                }`
                            }
                            onClick={() => setMenuOpen(false)} // Cierra el menú al seleccionar un enlace
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};
