'use client'
import { GlobalContext } from '@/context/globalContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { BottleImage, StarIcon } from "@/public/assets";
import ButtonOutLined from '../ButtonOutlined';

const CheckoutSideBar = () => {
     const { cartOpen, setCartOpen } = useContext(GlobalContext)
     return (
          <section className={`bg-[#111111] py-6 px-6 fixed transition-all duration-300 ease-linear top-0 max-w-[440px] w-full gap-4  h-full z-50 flex flex-col justify-between
               ${cartOpen ? 'right-0' : '-right-[100%]'}
          `}>
               <div>
                    {/* cart header  */}
                    <div className='flex justify-between items-center'>
                         <h4 className='golden-gradient-text text-[32px]'>Cart</h4>
                         <Image src="/assets/icons/close.svg" alt="close" width={32} height={32} onClick={() => setCartOpen(false)} />
                    </div>
                    {/* cart Items  */}
                    <div className='mt-7 h-[calc(100vh-380px)] overflow-auto '>
                         {
                              [1, 2].map((item, idx) => (
                                   <div key={idx} className='flex gap-4 border-b-[.5px] border-[#AFAFAF] py-4'>
                                        <figure className='bg-[#070707] p-2 rounded-lg w-[100px] flex items-center justify-center'>
                                             <Image src={BottleImage} alt="BottleImage" width={50} height={50} />
                                        </figure>
                                        <div>
                                             <div className='flex justify-between gap-4'>
                                                  <p className='text-[#AFAFAF] text-sm'>Peru Vera May Black Overnight Travel Bag</p>
                                                  <p className='text-white'>$200.00</p>
                                             </div>
                                             <div className='flex justify-between gap-4'>
                                                  <div className="flex items-center mt-2 justify-between gap-4 px-2 py-1 border-[1px] border-[#AFAFAF] border-solid rounded-md ">
                                                       <p className="font-bold text-sm cursor-pointer">-</p>
                                                       <p className="text-sm">01</p>
                                                       <p className="font-bold text-sm cursor-pointer">+</p>
                                                  </div>
                                                  <Image src="/assets/icons/trash.svg" alt="close" width={20} height={20} onClick={() => setCartOpen(false)} />
                                             </div>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </div>
               {/* cart footer  */}
               <div className='max-h-[230px] h-full'>
                    <div className="bg-[#070707] p-3 px-6 mb-3 rounded-lg">
                         <p className='flex justify-between items-center py-3 gap-5 border-b-[.5px] border-[#464554]'>
                              <span>Subtotal</span>
                              <span>$200.00</span>
                         </p>
                         <p className='flex justify-between items-center py-3 gap-5 border-b-[.5px] border-[#464554]'>
                              <span>Shipping</span>
                              <span>Free</span>
                         </p>
                         <p className='flex justify-between items-center py-3 gap-5'>
                              <span>Total</span>
                              <span>$200.00</span>
                         </p>
                    </div>
                    <ButtonOutLined style={{width: '100%'}}>
                         Checkout
                    </ButtonOutLined>
               </div>
          </section>
     )
}

export default CheckoutSideBar