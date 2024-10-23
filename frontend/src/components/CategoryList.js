import React, { useEffect, useState } from 'react'
import summaryapi from '../common'
import { Link } from 'react-router-dom'

const CategoryList = () => {

  const [categoryporduct, setcategoryproduct] = useState([])
  const [loading, setloading] = useState(false)

  const fetchcategoryproduct = async () => {

    setloading(true)
    const response = await fetch(summaryapi.categoryProduct.url)
    const dataResponce = await response.json()
    setloading(false)
    setcategoryproduct(dataResponce.data)

  }

  useEffect(() => {

    fetchcategoryproduct()

  }, [])

  return (
    <div className='container mx-auto p-4'>

      <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
        {

          categoryporduct.map((product, index) => {
            return (

              <Link to={"/product-category/"+product?.category} className='cursor-pointer'>
                <div className='w-16 h-16 md:w-20 md:h-20 md:rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>

                  <img src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all' />

                </div>

                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>

              </Link>
            )

          })

        }
      </div>

    </div>
  )
}

export default CategoryList