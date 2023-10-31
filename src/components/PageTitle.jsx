import React from 'react'

const PageTitle = ({id , text}) => {
  return (
    <header className="py-36 px-2 md:px-32">
    <h2 className="flex py-10 items-center space-x-4 md:text-xl lg:py-0 lg:text-2xl">
      <span className="relative text-gray-700 font-bold id-fade">{id}</span>
      <span className="uppercase text-white tracking-[0.3rem] text-fade">
       {text}
      </span>
    </h2>
  </header>
  )
}

export default PageTitle