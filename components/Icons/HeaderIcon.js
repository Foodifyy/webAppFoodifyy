import React from 'react'

const HeaderIcon = ({Icon}) => {
  return (
    <div className={`cursor-pointer flex item-center md:px-6 py-2 md:hover:bg-gray-100 text-gray-500 rounded-md active:border-b-2 active:border-black group focus:bg-gray-100`} >
        <Icon className="h-5 group-hover:text-black" />
    </div>
  )
}

export default HeaderIcon