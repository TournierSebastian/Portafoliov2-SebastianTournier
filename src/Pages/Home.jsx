import React, { useState } from 'react'
import FotoPerfil from '../assets/FotoPerfil.png'
import { FolderDown } from 'lucide-react'
import Cv from '../assets/Download/SebastianTournier_Curriculum.pdf'
import LinkedinDefault from '../assets/Icons/Linkedin.png'
import GithubDefault from '../assets/Icons/Github.png'
import Whatsapp from '../assets/Icons/Whatsapp.png'
import Gmail from '../assets/Icons/Gmail.png'
import Experience from '../Componentes/Experience'

import boostrapIcon from '../assets/Tencologias/boostrapIcon.png'
import C from '../assets/Tencologias/C.png'
import Css from '../assets/Tencologias/Css.png'
import Expressjs from '../assets/Tencologias/Expressjs.png'
import Figma from '../assets/Tencologias/Figma.png'
import Git from '../assets/Tencologias/Git.png'
import Html from '../assets/Tencologias/Html.png'
import JavaScript from '../assets/Tencologias/JavaScript.png'
import MySql from '../assets/Tencologias/MySql.png'
import NetCore from '../assets/Tencologias/NetCore.png'
import Nodejs from '../assets/Tencologias/Nodejs.png'
import Postman from '../assets/Tencologias/Postman.png'
import Python from '../assets/Tencologias/Python.png'
import Reacticon from '../assets/Tencologias/React.png'
import SqlServer from '../assets/Tencologias/SqlServer.png'
import Tailwind from '../assets/Tencologias/Tailwind.png'
import Trello from '../assets/Tencologias/Trello.png'
import Technologies from '../Componentes/Technologies'

export const Home = () => {

  const [seleccionadas, setSeleccionadas] = useState([]);

  return (
    <div className='bg-PrimaryBlue flex flex-col h-500'>
      <div className="bg-PrimarySkyBlue flex flex-col  md:items-center md:justify-center px-5 py-4 w-full h-auto fixed top-0 left-0 md:w-64 md:h-screen md:fixed md:top-0 md:left-0 z-50 md:z-40 cursor-pointer sm:px-6">
        <section className='flex flex-col items-center text-center mb-0 md:mb-6'>
          <img src={FotoPerfil} className='hidden md:block w-35 rounded-full bg-White pt-2 border-4 border-gray-400/50' />
          <h2 className='text-xl md:text-2xl font-bold text-white mt-3 whitespace-nowrap'>Sebastian Tournier</h2>
        </section>

        <nav className='flex flex-row md:flex-col md:items-center md:text-center text-gray-300 gap-2 sm:gap-4 text-base md:text-lg sm:text-xl md:mt-4 w-full md:w-auto justify-center md:justify-start md:h-auto'>
          <a className='hover:text-white transition duration-300 whitespace-nowrap' href='#sobre-mi'>Sobre Mí</a>
          <a className='hover:text-white transition duration-300' href='#Experiencia' >Experiencia</a>
          <a className='hover:text-white transition duration-300'>Tecnologías</a>
          <a className='hover:text-white transition duration-300'>Proyectos</a>
        </nav>
      </div>


      <div className="bg-PrimaryBlue flex-1 py-6 px-0 md:px-6 lg:px-6 md:ml-64 md:mt-0  mt-24">
        <div id="sobre-mi" className="scroll-mt-24">
          <div>
            <div className='flex items-center space-x-2 flex-wrap'>
              <div className='flex'>
                <h1 className='text-white text-4xl font-bold'>Sebastian</h1>
                <h1 className='text-PrimarySkyBlue text-4xl font-bold'>Tournier</h1>
              </div>
              <a className='flex bg-SecondonrySkyBlue px-2 py-1 rounded-3xl transition-transform duration-500 transform hover:scale-115' href={Cv} download="Sebastian-Tournier-CV.pdf">
                <FolderDown /> <p className='text-white font-bold text-mb'>Descargar CV</p>
              </a>
            </div>
            <div className='flex gap-1.5 items-center'>
              <h1 className='text-white font-bold text-base leading-none'>Desarrollador FullStack</h1>
              <a href='https://www.linkedin.com/in/sebastian-tournier/' target='black' rel="noopener noreferrer"> <img src={LinkedinDefault} alt="LinkedIn" className="w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125" /></a>
              <a href='https://github.com/TournierSebastian' target='black' rel="noopener noreferrer"><img src={GithubDefault} alt="GitHub" className="w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125" /></a>
              <a href={`https://wa.me/3413442728`} target='black' rel="noopener noreferrer"><img src={Whatsapp} alt="Whatsapp" className="w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125" /></a>
              <a href='mailto:sebastiantournier@gmail.com' target='black' rel="noopener noreferrer"><img src={Gmail} alt="Gmail" className="w-6 cursor-pointer transition-transform duration-300 transform hover:scale-125" /></a>
            </div>
          </div>
          <div className='text-white'>
            <p>Hola, soy Sebastián Tournier, tengo 22 años y soy un apasionado del desarrollo de paginas web, con un enfoque principal en el frontend. Me especializo en tecnologías como React, tengo conocimientos en backend utilizando .NET. Me destaco por mi perseverancia,
              mi constante deseo de aprender y mi espíritu innovador.
            </p>
            <p>Recientemente, finalicé mi Técnica tira Universitaria en Programación en la UTN y el Bootcamp Full Stack de Cilsa. Actualmente sigo ampliando mis conocimientos a través de  proyectos personales y participando en proyectos en grupales en distintas comunidades.</p>
            <p>Busco conectar con personas afines y explorar nuevas oportunidades en el campo de la programación. Siempre estoy dispuesto a enfrentar desafíos que me permitan mejorar mis habilidades como programador y contribuir con soluciones innovadoras.</p>
          </div>
        </div>
        <div className='flex justify-center mt-5 mb-5'>
          <div className='h-1 bg-PrimarySkyBlue  w-8/10 rounded-2xl'></div>
        </div>

        <div className='flex flex-col justify-center'>
          <div className=' text-center'>
            <h1 className='text-white font-bold text-3xl leading-none'>Experiencia Laboral</h1>
          </div>
          <div id="Experiencia" className="scroll-mt-40 md:scroll-mt-20  lg:scroll-mt-20" >
            <Experience />
          </div>
        </div>
        <div className='flex justify-center mt-5 mb-5'>
          <div className='h-1 bg-PrimarySkyBlue  w-8/10 rounded-2xl'></div>
        </div>

        <div className='flex flex-col  items-center'>
        <Technologies onSeleccionChange={setSeleccionadas} />
        <div className='mt-4 text-white'>
          <h3 className='font-bold'>Seleccionadas:</h3>
          <p>{seleccionadas.join(', ') || 'Ninguna'}</p>
        </div>

        </div>
      </div>
    </div>
  )
}
