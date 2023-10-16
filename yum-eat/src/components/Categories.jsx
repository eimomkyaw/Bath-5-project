

import { categories } from '../data/data'
import React from 'react'

const Categories = () => {
  return (
    <div className='mex-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Categories</h1>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2 mb-5'>
            {
                categories.map((item) =>(
                    <div key={item.id} className='p-4 flex justify-center items-center hover:scale-105 duration-300 w-full h-[50px] bg-white ' >
                            <img src={item.image} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories