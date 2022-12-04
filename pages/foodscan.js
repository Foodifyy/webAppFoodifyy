import React from 'react'
import FooddataPlot from '../components/FooddataPlot'
import FoodPicUpload from '../components/FoodPicUpload'
import RootLayout from '../components/Layout/RootLayout'

const FoodScan = () => {

  

  return (
    <RootLayout>
        {/* upload */}
        <FoodPicUpload/>
        {/* plot */}
        <FooddataPlot/>
    </RootLayout>
  )
}

export default FoodScan