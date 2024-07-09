import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/*left-side*/}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>Welcome to Book Haven, where book enthusiasts come together to buy and sell their favorite reads at unbeatable prices. Whether you're looking to expand your collection or pass on cherished books to new owners, we provide a seamless and secure platform for all your literary needs. Explore our extensive catalog, discover rare finds, and enjoy a community-driven marketplace that celebrates the joy of reading. Join us today and find the best deals on books you love, or give your beloved volumes a new home.</p>
                <div>
                    <input type="text" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300'> Search</button>
                </div>
            </div>
            {/*rightt-side*/}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner