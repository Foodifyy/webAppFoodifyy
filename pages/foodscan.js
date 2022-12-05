import React from 'react'
import FooddataPlot from '../components/FooddataPlot'
import FoodPicUpload from '../components/FoodPicUpload'
import RootLayout from '../components/Layout/RootLayout'

const FoodScan = () => {

  const foodData = {"Calcium":"0%","Calories":"300","Cholesterol":"117 mg","Dietary_Fiber (g)":"3 g","Iron":"0%","Monounsaturated (g)":"2 g","Polyunsaturated (g)":"1 g","Potassium (mg)":"625 mg","Protein (g)":"45 g","Saturated (g)":"2 g","Servings:":"200 g","Sodium (mg)":"123 mg","Sugars (g)":"7 g","Total_Carbs (g)":"7 g","Total_Fat (g)":"6 g","Trans (g)":"0 g","Vitamin_A":"0%","Vitamin_C":"0%","item_found":"Indian - Chicken Tikka","item_name":"chicken tikka"} 
  

  return (
    <RootLayout>
        {/* upload */}
        <FoodPicUpload/>
        {/* plot */}
        <FooddataPlot foodData={foodData} />
    </RootLayout>
  )
}

export default FoodScan