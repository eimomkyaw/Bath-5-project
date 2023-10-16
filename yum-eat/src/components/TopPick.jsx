import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '../data/data';

const TopPick = () => {
  return (
    <div>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
        <div className='hidden lg:flex max-w-[1520] m-auto py-2 px-=2'>
            <Splide options = {{perPage:4,gap:'0.5rem',grag:'free',arrows:false}}>
        {
            topPicks.map((item)=> {
                return (
                    <SplideSlide  key={item.id}>
                    <div className='rounded-3xl relative'>
                    <div className='rounded-3xl w-full h-full text-white bg-black/30 absolute'>

                        <p className='px-2'>{item.title}</p>
                        <p className='px-2'>{item.price}</p>
                        <button className='border-dotted border-white text-white absolute
                         bottom-4 mx-2'>Add To Cart</button>
                    </div>
                    <img className='h-[200px] w-full object-cover rounded-3xl 
                    cursor-pointer hover:scale-150 ease-out duration-300'
                    src={item.img}/>
                    </div>
                    </SplideSlide>
                );
            })
        }
        </Splide>
    </div>
    </div>
  )
}

export default TopPick

