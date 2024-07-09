import React from 'react'
// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import picture2 from "../assets/picture2.jpg"

const ReviewCard1 = () => {
    return (
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* texts */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus libero eaque illo voluptate ducimus commodi, eos, quam repellendus, officiis esse cum alias nemo blanditiis dolore quas officia molestiae accusantium!</p>
                <Avatar
                    alt="avatar of Jese"
                    img={picture2}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Michael Johnson</h5>
                <p className='text-sm'>Fitness Trainer</p>
            </div>
        </div>
    )
}

export default ReviewCard1