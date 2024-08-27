import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


const Secondpage = () => {
  return (
    <><Navbar/>
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-green-500  text-4xl text-center'>
      Hostels <span className='text-black font-bold'>Available</span>
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className=' text-lg text-green-500'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              All
            </button>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              2-sharing
            </button>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              3-sharing
            </button>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              4-sharing
            </button>
            
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='text-lg text-green-500'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              $
            </button>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              $$
            </button>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              $$$
            </button>
            <button
              className='m-1 px-3 text-slate-500 border-slate-500 border-[1.5px] hover:border-green-500 rounded-xl duration-150'
              >
              $$$$
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      </>
  )
}

export default Secondpage;