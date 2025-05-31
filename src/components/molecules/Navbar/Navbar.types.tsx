import { Contactus } from "../../../pages/Contactus";
import { Home } from "../../../pages/Home";
import { Projects } from "../../../pages/Projects";

export const links = [
    { to: '/', label: 'Inicio', element: <Home /> },
    { to: '/projects', label: 'Proyectos', element: <Projects /> },
    { to: '/contact', label: 'Contacto', element: <Contactus /> },
];