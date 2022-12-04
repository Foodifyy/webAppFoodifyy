import React from 'react'

const FoodPicUpload = () => {
  return (
    <div className='w-full py-5 h-[6rem] flex items-center justify-center bg-white rounded-md shadow-sm'>
        <button className='p-4 shadow-lg bg-zinc-100 rounded-md border-2 border-black md:text-2xl active:border-b-black active:border-b-4 '>
            Press to scan food
        </button>
    </div>
  )
}

export default FoodPicUpload