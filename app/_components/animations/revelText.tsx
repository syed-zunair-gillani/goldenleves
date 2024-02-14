'use client'
import React from 'react'
import { motion } from 'framer-motion';

const RevelText = ({color='#080808', duration=1, delay=1, position}:any) => {
     return (
          <>
               <motion.span
                    initial={{ height: `${position}100%` }}
                    whileInView={{ height: '0px' }}
                    transition={{ duration, delay }}
                    className={`absolute bg-[${color}] inset-0`}></motion.span>
          </>
     )
}

export default RevelText