import React, { useEffect, useState } from 'react'
import image1 from '../assest/banner/1.webp'
import image2 from '../assest/banner/2.webp'
import image3 from '../assest/banner/3.webp'
import image4 from '../assest/banner/4.webp'
import image5 from '../assest/banner/5.webp'
import image6 from '../assest/banner/6.jpg'
import image6 from '../assest/banner/7.jpg'


import imagem1 from '../assest/banner/img1.webp'
import imagem2 from '../assest/banner/img2.webp'
import imagem3 from '../assest/banner/img3.webp'
import imagem4 from '../assest/banner/img4.webp'
import imagem5 from '../assest/banner/img5.webp'
import imagem6 from '../assest/banner/img6.webp'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const BannerProduct = () => {

    const [currentImage, setCurrentImage] = useState(0)

    const desktopImage = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ]

    const mobileImage = [
        imagem1,
        imagem2,
        imagem3,
        imagem4,
        imagem5,
        imagem6,
    ]

    const nextImage = () => {
        if (desktopImage.length - 1 > currentImage) {
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () => {
        if (currentImage != 0) {
            setCurrentImage(preve => preve - 1)
        }
    }

    useEffect(() => {

        const interval = setInterval(() => {

            if (desktopImage.length - 1 > currentImage) {

                nextImage()

            } else {

                setCurrentImage(0)
            }

        }, 5000)

        return () => clearInterval(interval)

    }, [currentImage])

    return (
        <div className='container mx-auto px-4 rounded'>
            <div className='h-56 md:h-72 w-full bg-slate-200 relative'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    <div className='flex justify-between w-full text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft /></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight /></button>
                    </div>
                </div>

                {/**Desktop and tablet version */}
                <div className='hidden md:flex h-full w-full overflow-hidden'>
                    {
                        desktopImage.map((imageURL, index) => {
                            return (
                                <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                    <img src={imageURL} className='w-full h-full' />
                                </div>
                            )
                        })
                    }
                </div>


                {/**mobile  version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                    {
                        mobileImage.map((imageURL, index) => {
                            return (
                                <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURL} style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                    <img src={imageURL} className='w-full h-full object-cover' />
                                </div>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default BannerProduct