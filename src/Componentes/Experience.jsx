import React, { useState } from 'react';
import CeRIn from '../assets/Icons/Cerin.png';
import NoCountry from '../assets/Icons/NoCountry.jpeg'
import { ArrowBigDown } from 'lucide-react';

const Experience = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const Experience = [
        {
            logo: CeRIn,
            Title: 'Desarrollador FullStack, CeRIn Centro de Rehabilitación Infantil',
            Date: 'Febrero 2023 - Diciembre 2024',
            Location: 'Argentina - Rosario - Híbrido',
            description: `
        ✔ Colaboré en el desarrollo de un sistema de gestión de turnos, mejorando la eficiencia de la organización y la experiencia del usuario.<br/>
        ✔ Trabajé en el frontend con <strong>React.js</strong>, creando interfaces intuitivas utilizando <strong>Bootstrap</strong>.<br/>
        ✔ Contribuí al backend con <strong>.NET</strong>, optimizando la integración y el rendimiento.<br/>
        ✔ Contribuí al armado y gestión de la base de datos utilizando <strong>MySQL</strong>, asegurando la integridad y eficiencia de la información.
      `
        },
        {
            logo: NoCountry,
            Title: 'Desarrollador Front-End & Diseñador UX/UI, No Country',
            Date: 'Enero 2025 - Marzo2025',
            Location: 'Argentina-Remoto',
            description: `
        ✔ Diseñé y desarrollamos una aplicación web junto a un equipo multidisciplinario.<br/>
        ✔ Creé interfaces intuitivas y atractivas, asegurando una excelente experiencia de usuario.<br/>
        ✔ Implementé el diseño en código utilizando <strong>React.js</strong>, <strong>Bootstrap</strong> y <strong>Tailwind CSS</strong>.<br/>
        ✔ Destacada capacidad de trabajo en equipo, dominio

      `
        },
        {
            logo: NoCountry,
            Title: 'Team Leader, No Country',
            Date: 'Febrero 2025 - Marzo2025',
            Location: 'Argentina-Remoto',
            description: `
        ✔ Lideré dos equipos, facilitando la coordinación y optimización de tiempos.<br/>
        ✔ Promoví una comunicación clara y efectiva para maximizar el rendimiento del equipo.<br/>
        ✔ Resolví obstáculos que afectaban la eficiencia del desarrollo.<br/>
        ✔ Habilidades clave: Liderazgo, Comunicación, Resolución de Problemas.
      `
        },
    ];

    return (
        <div className="p-">
            {Experience.map((exp, index) => (
                <div
                    key={index}
                    onClick={() => toggle(index)}
                    className="cursor-pointer text-white rounded-xl flex flex-col justify-between items-center shadow-md p-4 hover:scale-105 transition-transform duration-300"
                >
                    {/* Header */}
                    <div className="flex flex-row items-center w-full gap-4">
                        <div className="bg-white rounded-full p-2">
                            <img
                                src={exp.logo}
                                className="w-10 h-10 md:w-6 md:h-6 lg:w-6 lg:h-6 object-contain rounded-full"
                                alt="logo"
                            />
                        </div>

                        <div className="flex-1">
                            <h1 className="text-base font-bold text-center md:text-left">{exp.Title}</h1>
                        </div>

                        <div>
                            <ArrowBigDown
                                size={32}
                                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                            />
                        </div>
                    </div>
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden w-full text-sm ${openIndex === index ? 'max-h-[500px] opacity-100 translate-y-0 mt-4' : 'max-h-0 opacity-0 translate-y-2'
                            }`}
                    >
                        <div className="flex justify-between mb-2">
                            <p>{exp.Date}</p>
                            <p>{exp.Location}</p>
                        </div>
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: exp.description }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Experience;
