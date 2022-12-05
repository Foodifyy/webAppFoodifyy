import React, { useState } from 'react'

const FoodPicUpload = ({setFoodApiData, setFoodImage}) => {

  const [base64Img,setBase64Img] = useState('');
  
  const handleBlobImg = (e) =>{
    if(e.target.files.length > 0){
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () =>{
        setBase64Img(reader.result.toString())
      }
      reader.readAsDataURL(file)
    } else {
      console.log("Choose food image correctly");
    }
  }
  
  
  const handleDataFetch = async () =>{
    
    const response = await fetch('https://api.foodifyy.com/',{
      method: 'POST',
      body: base64Img ,
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    const data = await response.json()
    
    setFoodApiData(data)
    setFoodImage(base64Img)
  }

  return (
    <div className='w-full py-5 md:px-0 px-2 flex items-center flex-col bg-white rounded-md shadow-sm'>  
      <div className='flex flex-wrap items-center justify-center md:justify-between'>
        <input
          type="file"
          id="file-ip-1"
          capture="user"
          accept="image/*"
          className=" bg-black rounded-md mb-2 md:mb-0 p-[10px] md:mr-2 text-white shadow-lg border-2 border-black"
          onChange={(e)=>handleBlobImg(e)}
        />
        <button onClick={handleDataFetch} className='py-2 px-4 shadow-lg hover:bg-zinc-50 bg-zinc-100 rounded-md border-2 border-black md:text-2xl active:border-b-black flex-grow active:border-b-4 '>
            Upload Image
        </button>
      </div>
      <div className='mt-3 text-xs md:text-sm text-slate-700 text-center' >
        Choose your food image to detect it&#39;s nutrient content.
      </div>
    </div>
  )
}

export default FoodPicUpload