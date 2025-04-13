import React, { useState } from 'react';
import boostrapIcon from '../assets/Tencologias/boostrapIcon.png';
import C from '../assets/Tencologias/C.png';
import Css from '../assets/Tencologias/Css.png';
import Expressjs from '../assets/Tencologias/Expressjs.png';
import Figma from '../assets/Tencologias/Figma.png';
import Git from '../assets/Tencologias/Git.png';
import Html from '../assets/Tencologias/Html.png';
import JavaScript from '../assets/Tencologias/JavaScript.png';
import MySql from '../assets/Tencologias/MySql.png';
import NetCore from '../assets/Tencologias/NetCore.png';
import Nodejs from '../assets/Tencologias/Nodejs.png';
import Postman from '../assets/Tencologias/Postman.png';
import Python from '../assets/Tencologias/Python.png';
import Reacticon from '../assets/Tencologias/React.png';
import SqlServer from '../assets/Tencologias/SqlServer.png';
import Tailwind from '../assets/Tencologias/Tailwind.png';
import Trello from '../assets/Tencologias/Trello.png';

const Technologies = ({ onSeleccionChange }) => {
  const [seleccionadas, setSeleccionadas] = useState([]);

  const toggleSeleccion = (id) => {
    setSeleccionadas((prev) => {
      const nuevasSeleccionadas = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      // Le avisamos al componente padre
      onSeleccionChange(nuevasSeleccionadas);
      return nuevasSeleccionadas;
    });
  };

  const secciones = [
    {
      titulo: 'Frontend',
      imagenes: [
        { id: 'html', src: Html },
        { id: 'javascript', src: JavaScript },
        { id: 'css', src: Css },
        { id: 'bootstrap', src: boostrapIcon },
        { id: 'tailwind', src: Tailwind },
        { id: 'react', src: Reacticon },
      ],
    },
    {
      titulo: 'Backend',
      imagenes: [
        { id: 'nodejs', src: Nodejs },
        { id: 'express', src: Expressjs },
        { id: '.net', src: NetCore },
        { id: 'c', src: C },
        { id: 'sqlserver', src: SqlServer },
        { id: 'mysql', src: MySql },
      ],
    },
    {
      titulo: 'Herramientas',
      imagenes: [
        { id: 'git', src: Git },
        { id: 'postman', src: Postman },
        { id: 'trello', src: Trello },
        { id: 'figma', src: Figma },
      ],
    },
  ];

  return (
    <div className='text-center w-8/10 mx-auto'>
      <h1 className='text-white font-bold text-3xl leading-none mb-3'>Tecnologías</h1>
      {secciones.map((seccion, index) => (
        <div
          key={index}
          className='border border-SecondonrySkyBlue rounded-2xl p-3 flex flex-col gap-2 mb-6'
        >
          <h2 className='text-white font-bold text-2xl leading-none mb-1'>{seccion.titulo}</h2>
          <div className='flex justify-center mb-2'>
            <div className='h-1 bg-PrimarySkyBlue w-5/10 rounded-2xl'></div>
          </div>
          <div className='flex justify-center flex-wrap gap-4'>
            {seccion.imagenes.map((img) => (
              <img
                key={img.id}
                src={img.src}
                onClick={() => toggleSeleccion(img.id)}
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-18 md:h-18 cursor-pointer transition-all duration-300 ease-in-out transform grayscale hover:grayscale-0 hover:scale-110
                  ${
                    seleccionadas.includes(img.id)
                      ? ' scale-110 grayscale-0'
                      : ''
                  }`}
                alt={img.id}
              />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Technologies;
