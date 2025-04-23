import React from 'react'
import wallex from '../assets/Proyectos/Wallex.jpeg'
import ComoenCasa from '../assets/Proyectos/Guarderia.png'
import EasyFit from '../assets/Proyectos/EasyFit.png'
import EpicWear from '../assets/Proyectos/EpicWear.png'
import FamilyMarket from '../assets/Proyectos/FamilyMarket.png'
import Portafolio from '../assets/Proyectos/Portafolio.png'
import Planify from '../assets/Proyectos/Planify.png'
import ProConnect from '../assets/Proyectos/ProConnect.png'
import SupermercadoLaEstancia from '../assets/Proyectos/SupermercadoLaEstancia.png'
import web from '../assets/Icons/SitioWeb.png'
import Github from '../assets/Icons/GithubHover.png'

const Proyectos = ({ seleccionadas }) => {
    const Proyectos = [
        {
            img: wallex,
            Titulo: "Wallex",
            tecnologias: ["React.js", "TailwindCSS", "Spring Boot"],
            descripcion: "Wallex es un sistema de gestión financiera diseñado para proporcionar a los usuarios una plataforma segura y eficiente para administrar su dinero. A través de esta solución, los usuarios podrán realizar operaciones como transferencias, consulta de saldo, gestión de tarjetas y recibir notificaciones en tiempo real sobre sus movimientos financieros.",
            enlaces: {
                repositorio: "https://github.com/No-Country-simulation/s21-02-ft-webapp"
            }
        },
        {
            img: ProConnect,
            Titulo: "ProConnect",
            tecnologias: ["React.js", "Bootstrap", "Node.js", "Css"],
            descripcion: "ProConnect es una plataforma que conecta empresas y profesionales, optimizando la gestión de empleo. Permite a reclutadores publicar ofertas y seleccionar candidatos, mientras los postulantes acceden a oportunidades y gestionan sus solicitudes. Los administradores supervisan el sistema para garantizar una experiencia segura y eficiente.",
            enlaces: {
                repositorio: "https://github.com/No-Country-simulation/c23-54-webapp"
            }
        },
        {
            img: Planify,
            Titulo: "Planify",
            tecnologias: ["React.js", "Bootstrap", "MySqlq", "Express.js", "Node.js"],
            descripcion: "Planify es un mvp básico con un estilo similar a Trello, la cual incluye diversas funcionalidades con implementación de base de datos. Este proyecto me permitio expandir mis conocimientos a Express.js y Node.js y mejorar con el eso de bootstrap.",
            enlaces: {
                repositorio: "https://github.com/cesarl94/planify"
            }
        },
        {
            img: SupermercadoLaEstancia,
            Titulo: "La estancia",
            tecnologias: ["Html", "Js", "Css", "Boostrap", "Boostwatch"],
            descripcion: "Supermercado Al Estancia es una interfaz web interactiva que permite a los usuarios explorar un catálogo de productos, agregar artículos a un carrito de compras y navegar por diferentes secciones de la tienda.",
            enlaces: {
                repositorio: "https://github.com/Ulimb/Bootcamp_Full-Stack",
                sitioweb: "https://bootcamp-full-stack.vercel.app/semana-6/proyecto/Pages/Home/Home.html"
            }
        },
        {
            img: Portafolio,
            Titulo: "Portafolio v1",
            tecnologias: ["React.js", "Css"],
            descripcion: "Creé un sitio web utilizando un diseño de columnas estilo bento con el fin de presentar formalmente mi perfil y conocimientos. .",
            enlaces: {
                repositorio: "https://github.com/TournierSebastian/PORTAFOLIO-Sebastian-Tournier",
                sitioweb: "https://portafolio-sebastian-tournier.vercel.app/"
            }
        },
        {
            img: ComoenCasa,
            Titulo: "Como En Casa",
            tecnologias: ["Html", "Js", "Css"],
            descripcion: "Como en Casa es una página web sencilla creada para un emprendimiento familiar de guardería canina. Su objetivo es presentar de manera clara los servicios y valores del negocio, brindando información esencial para atraer nuevos clientes. Con un diseño amigable y fácil de navegar, esta web busca ofrecer una experiencia agradable tanto para los dueños de las mascotas como para sus perros.",
            enlaces: {
                repositorio: "https://github.com/TournierSebastian/GuarderiaCanina",
                sitioweb: "https://guarderiacaninafamiliar.netlify.app/"
            }
        },
        {
            img: FamilyMarket,
            Titulo: "Family Market",
            tecnologias: ["React.js", "Css", ".Net", "SqlServer", "Mp Developers", "C#"],
            descripcion: "Family Market aplicación  orientada a la funcionalidad que incluye gestión de productos, carrito de compras, sistema de usuarios con roles, historial de ventas y filtros avanzados para productos. Implementé funcionalidades como creación, modificación, activación y desactivación de productos, así como redireccionamiento protegido basado en roles de usuario.",
            enlaces: {
                repositorio: "https://github.com/bereail/PPSPROYECT",
            }
        },
        {
            img: EpicWear,
            Titulo: "Epic Wear",
            tecnologias: [".Net", "SqlServer", "C#"],
            descripcion: "Epic Wear es una API diseñada para una tienda de ventas de camisetas, donde implemente un sistema CRUD para gestionar productos, usuarios y pedidos. Además, integraste un sistema de roles para diferenciar permisos y accesos dentro de la plataforma.",
            enlaces: {
                repositorio: "https://github.com/TournierSebastian/TupProgramacion3-Tpi",
            }
        }, {
            img: EasyFit,
            Titulo: "EasyFit",
            tecnologias: ["React.js", "FireBase", "Bootstrap"],
            descripcion: "EasyFit es una plataforma de nutrición centrada en el control de calorías. Dentro de este sistema, implemente  un CRUD (Crear, Leer, Actualizar y Eliminar) que permite a los usuarios y administradores gestionar información de manera diferenciada.",
            enlaces: {
                repositorio: "https://github.com/NekiroPLZ/easyfitv2",
            }
        }
    ]
    const proyectosFiltrados = seleccionadas.length === 0
        ? Proyectos // Si no hay tecnologías seleccionadas, mostramos todos los proyectos
        : Proyectos.filter(proyecto =>
            proyecto.tecnologias.some(tec => seleccionadas.includes(tec))
        );

    const proyectosAMostrar = proyectosFiltrados.length === 0 ? Proyectos : proyectosFiltrados;
    return (
        <div>

            {seleccionadas.length > 0 && (
                <div className='mt-4 text-white'>
                    <h3 className='font-bold'>Tecnologías Seleccionadas:</h3>
                    <p>{seleccionadas.join(', ')}</p>
                </div>
            )}

            <div className="grid gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
                {proyectosAMostrar.map((proyecto, index) => (
                    <div key={index} className="bg-[rgba(0,0,0,0.67)] text-white shadow-md rounded-xl overflow-hidden flex flex-col transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                        <img src={proyecto.img} alt={proyecto.Titulo} className="w-full h-48" />

                        <div className="p-4 flex flex-col flex-grow">

                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-center">{proyecto.Titulo}</h3>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {proyecto.tecnologias.map((tech, i) => (
                                        <span key={i} className="bg-slate-500 text-sm px-2 py-1 rounded-full">{tech}</span>
                                    ))}
                                </div>
                                <p className="text-sm text-white mb-3">{proyecto.descripcion}</p>
                            </div>


                            <div className="flex flex-wrap  gap-4 mt-auto">
                                {proyecto.enlaces.sitioweb && (
                                    <div className='bg-white px-2 py-1 rounded-2xl flex items-center gap-2'>
                                        <img src={web} className='w-6 h-6' />
                                        <a
                                            href={proyecto.enlaces.sitioweb}
                                            className="text-black"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Sitio Web
                                        </a>
                                    </div>
                                )}
                                {proyecto.enlaces.repositorio && (
                                    <div className='bg-white px-2 py-1 rounded-2xl flex items-center gap-2'>
                                        <img src={Github} className='w-6 h-6' />
                                        <a
                                            href={proyecto.enlaces.repositorio}
                                            className="text-black"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Repositorio
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Proyectos