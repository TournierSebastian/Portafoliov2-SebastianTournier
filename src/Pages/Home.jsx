import React from 'react'
import FotoPerfil from '../assets/FotoPerfil.png'

export const Home = () => {
  return (
    <div className='bg-PrimaryBlue flex h-10000'>

      {/* <div className="bg-PrimarySkyBlue flex flex-col items-center justify-center px-3 h-screen cursor-pointer">
        <section className='flex-col text-center justify-items-center mb-3 '>
          <img src={FotoPerfil} className='w-30 rounded-[100px] bg-White pt-2 border-4  border-gray-400/50'></img>
          <h2 className='text-2xl font-bold text-white'>Sebastian Tournier</h2>
        </section>

        <nav className='flex flex-col text-center  text-gray-300 gap-2 text-lg'>
          <a className='hover:text-White'>Sobre Mi</a>
          <a className='hover:text-White'>Experiencia</a>
          <a className='hover:text-White'>Tecnologias</a>
          <a className='hover:text-White'>Proyectos</a>
        </nav>
      </div> */}

      <div className="bg-PrimarySkyBlue flex flex-col items-center justify-center px-4 py-6 h-screen cursor-pointer sm:px-6 fixed top-0 left-0 w-ful">
        <section className='flex flex-col items-center text-center mb-6'>
          <img src={FotoPerfil} className='w-30 rounded-[100px] bg-White pt-2 border-4  border-gray-400/50'></img>
          <h2 className='text-2xl sm:text-3xl font-bold text-white mt-3'>Sebastian Tournier</h2>
        </section>

        <nav className='flex flex-col items-center text-center text-gray-300 gap-4 text-lg sm:text-xl'>
          <a className='hover:text-white transition duration-300'>Sobre Mí</a>
          <a className='hover:text-white transition duration-300'>Experiencia</a>
          <a className='hover:text-white transition duration-300'>Tecnologías</a>
          <a className='hover:text-white transition duration-300'>Proyectos</a>
        </nav>
      </div>


      <div>



      </div>
    </div>
  )
}
