import React from 'react'
import CheckoutSideBar from '../checkoutSideBar/checkoutSideBar'

const GlobalLayout = ({children}:any) => {

  return (
    <>
    {children}
    <CheckoutSideBar/>
    </>
  )
}

export default GlobalLayout