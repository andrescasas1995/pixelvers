import { useEffect } from 'react';
import { Experience } from '@modules/home/Presentation/Experience';
import { MySelf } from '@modules/home/Presentation/MySelf';
import { AboutMe } from '@modules/home/Presentation/AboutMe';
import { Specialization } from '@modules/home/Presentation/Specialization';

const experiences = [
    {
        title: "Frontend Developer",
        subtitle: "Makers Solutions",
        from: "Abril 2025",
        to: "Presente",
        current: true,
        description: "Encargado del proyecto de inversiones, desarrollo, diseño y soporte del aplicativo",
        skills: ["React", "TypeScript", "Javascript", "GitHub"],
    },
    {
        title: "Full Stack Developer",
        subtitle: "10Pearls/Galileo",
        from: "Enero 2024",
        to: "Diciembre 2024",
        description: "Participé en la migración de una aplicación web bancaria, trasladando el frontend de Angular a React con Next.js e implementando tipado fuerte con TypeScript usando lenguaje JavaScript. En el backend, contribuí a la transición de PHP a Python, con una migración posterior a Golang. Mi principal enfoque estuvo en el desarrollo frontend con React.",
        skills: ["HTML5", "CSS3", "React", "NextJS", "TypeScript", "Javascript", "GitLab", "Jira"],
    },
    {
        title: "Full Stack Developer",
        subtitle: "Technisys",
        from: "Enero 2022",
        to: "Diciembre 2023",
        description: "Desarrollé nuevas funcionalidades para las versiones 3 y 4 de la aplicación web bancaria utilizando React usando lenguaje JavaScript. Además, inicié el desarrollo de la aplicación móvil con React Native para Android e iOS, siendo este mi principal enfoque. También realicé modificaciones en un backend monolítico en Java, que posteriormente fue migrado a microservicios con Golang. Mi trabajo se centró principalmente en el desarrollo frontend con React y React Native.",
        skills: ["HTML5", "CSS3", "React", "React-Native", "NextJS", "TypeScript", "Javascript", "GitHub", "Jira"],
    },
    {
        title: "Full Stack Developer",
        subtitle: "10Pearls/Technisys",
        from: "Octubre 2019",
        to: "Diciembre 2021",
        description: "Brindé soporte y solucioné bugs en la aplicación web bancaria, además de desarrollar nuevas funcionalidades para las versiones 1 y 2 utilizando React en el frontend usando lenguaje JavaScript, siendo este mi principal enfoque. También implementé nuevas funciones y corregí errores en el backend desarrollado en Java.",
        skills: ["HTML5", "CSS3", "React", "React-Native", "NextJS", "TypeScript", "Javascript", "GitHub", "Jira"],
    },
    {
        title: "Analista de TI",
        subtitle: "Info-Factor",
        from: "Octubre 2018",
        to: "Octubre 2019",
        description: "Brindé soporte y desarrollé nuevas funcionalidades en una aplicación de intercambio de divisas, utilizando AngularJS usando lenguaje JavaScript para el frontend y C# para el backend. Implementé consultas y optimicé el flujo completo de operaciones CRUD en bases de datos SQL. Además, participé en reuniones con el cliente para la planificación y levantamiento de requerimientos.",
        skills: ["C#", ".NET", "AngularJS", "HTML5", "CSS3", "Javascript", "SQL"],
    },
    {
        title: "Analista de TI",
        subtitle: "Ingeneo",
        from: "Diciembre 2016",
        to: "Mayo 2018",
        description: "Brindé soporte y desarrollé una aplicación de transporte para clientes del sector de carga terrestre, utilizando .NET como framework principal y C# con el patrón MVC, además de bases de datos en SQL. También desarrollé procedimientos almacenados en SQL Server para procesar datos provenientes de múltiples fuentes, como bases de datos y archivos de Excel, optimizando el manejo de información para un cliente del sector logístico. Adicionalmente, brindé soporte a aplicaciones de una caja de compensación y desarrollé soluciones web utilizando AngularJS, plantillas HTML y CSS.",
        skills: ["C#", ".NET", "AngularJS", "HTML5", "CSS3", "Javascript", "SQL"],
    },
    {
        title: "Analista de TI",
        subtitle: "Savia TIC",
        from: "Marzo 2015",
        to: "Diciembre 2016",
        description: "Brindé soporte y desarrollé una aplicación de transporte para clientes del sector de carga terrestre, utilizando .NET como framework principal y C# con el patrón MVC, además de bases de datos en SQL.",
        skills: ["C#", ".NET", "MVC", "HTML5", "CSS3", "Javascript", "SQL"],
    },
    {
        title: "Analista de TI",
        subtitle: "L&D Logística y Distribución",
        from: "Febrero 2014",
        to: "Febrero 2015",
        description: "Brindé soporte y desarrollé una aplicación de transporte para la empresa, utilizando PHP y bases de datos en SQL. Además, diseñé y desarrollé un sistema que calcula el consumo de combustible según la ruta y el tipo de camión, permitiendo determinar el monto a entregar a los conductores.",
        skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    },
];

export const Home = () => {
    useEffect(() => {
        document.title = "Andres Casas";
    }, []);

    return (
        <>
            <MySelf />
            <AboutMe />
            <Experience experiences={experiences} />
            <Specialization />
        </>
    )
}
