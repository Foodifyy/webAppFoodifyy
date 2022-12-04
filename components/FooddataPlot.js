import Image from 'next/image'
import React from 'react'

// apex charts
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const FooddataPlot = () => {

  const foodData = {"Calcium":"0%","Calories":"300","Cholesterol":"117 mg","Dietary_Fiber (g)":"3 g","Iron":"0%","Monounsaturated (g)":"2 g","Polyunsaturated (g)":"1 g","Potassium (mg)":"625 mg","Protein (g)":"45 g","Saturated (g)":"2 g","Servings:":"200 g","Sodium (mg)":"123 mg","Sugars (g)":"7 g","Total_Carbs (g)":"7 g","Total_Fat (g)":"6 g","Trans (g)":"0 g","Vitamin_A":"0%","Vitamin_C":"0%","item_found":"Indian - Chicken Tikka","item_name":"chicken tikka"}  

  return (
    <div className='bg-white mt-2 rounded-md p-4 flex flex-col shadow-sm'>
        <div className='flex mb-2 gap-2 flex-wrap'>
                <div className='flex items-center p-1 flex-grow shadow-md border-[#333333] bg-[#333333] border-2 rounded-md '>
                    <Image src='/demo-food-img.png' height={100} width={100}  alt="Food Image" className="rounded-md shadow-md "/>
                    <div className='flex flex-col ml-2'>
                        <div><span className='text-slate-200'>Food : </span> <span className='text-white' >{foodData.item_name}</span></div>
                        <div><span className='text-slate-200'>Type : </span> <span className='text-white' >{foodData.item_found}</span></div>    
                        <div><span className='text-slate-200'>Servings : </span> <span className='text-white' >{foodData['Servings:']}</span></div>    
                    </div>
                </div>
                <div className='flex items-center justify-center p-1 flex-grow shadow-md border-zinc-100 bg-zinc-100 border-2 rounded-md' >
                    <span className='text-[#333333] font-medium' >Calories : </span>
                    <span className='text-[#536976] ml-1'>{foodData.Calories}</span>
                </div>
                <div className='flex items-center justify-center p-1 flex-grow shadow-md border-zinc-50 bg-zinc-50 border-2 rounded-md' >
                    <span className='text-[#333333] font-medium' >Calcium : </span> 
                    <span className='text-[#536976] ml-1'>{foodData.Calcium}</span>
                </div>
                <div className='flex items-center justify-center p-1 flex-grow shadow-md border-zinc-50 bg-zinc-50 border-2 rounded-md' >
                    <span className='text-[#333333] font-medium' >Iron : </span>
                    <span className='text-[#536976] ml-1'>{foodData.Iron}</span>
                </div>
        </div>
        <div className='border-gray-100 border-2 shadow-md rounded-md'>
            <Chart
                type='bar'
                        series={[{
                        name : "Mineral Content",
                        data : [foodData.Cholesterol, foodData['Dietary_Fiber (g)'], foodData['Protein (g)'], foodData['Sugars (g)'], foodData['Total_Carbs (g)'], foodData['Total_Fat (g)'], foodData['Saturated (g)']]
                        }]}
                        options={{
                        chart : {
                            id : "Mineral Content",
                        },
                        xaxis : {
                            categories : ['Cholestrol', 'Dietry Fiber', 'Protein', 'Sugar', 'Total Carbs', 'Total Fat','Saturated'],
                            title : {
                                text : "Nutrients",
                                position: "bottom"
                            },
                        },
                        yaxis : {
                                title : {
                                    text : "gram (g)",
                                },
                        },
                            colors : ["#536976"],
                            plotOptions : {
                                bar : {
                                    borderRadius: 4,
                                    dataLabels : {
                                        position : "top",
                                    }
                                }
                            },
                            dataLabels: {
                                enabled: true,
                                offsetY: -20,
                                style: {
                                    colors: ["#000000"],
                                    fontSize: 12
                                }
                            },
                        }}
                height={200}
            />  
        </div>
    </div>
  )
}

export default FooddataPlot