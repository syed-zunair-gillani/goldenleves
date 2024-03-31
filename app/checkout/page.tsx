"use client";
import { ButtonContained, FormWrapper, Textfield } from "../_components";
import { useContext, useState } from "react";
import RadioButton from "../_components/radioButton";
import { GlobalContext } from "@/context/globalContext";
import OrderSummary from "./orderSummary";
import { toast } from "react-toastify";



const Checkout = () => {
  const { setButtonState, cartProduct } = useContext(GlobalContext);
  const [formValue, setFormValue] = useState({
    name: '',
    phone_number: '',
    email: '',
    country: '',
    address: '',
    town: '',
    state: '',
    zipcode: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formValue, cartProduct }),
    })
    const data = await res.json()
    if(data?.status === 'ok'){
      toast("Order Submitted");
      // reset fields 
      setFormValue({
        name: '',
        phone_number: '',
        email: '',
        country: '',
        address: '',
        town: '',
        state: '',
        zipcode: ''
      })
      localStorage.removeItem("cartProduct");
    }else{
      toast("Error!");
    }
  };



  return (
    <div className="section-margin flex flex-col lg:flex-row gap-4 xl:gap-10">
      <div className="w-full flex flex-col gap-6 basis-full lg:basis-[70%]">
        <FormWrapper title="Contact Info">
          <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap pt-6">
            <Textfield
              label="Name"
              placeholder="Enter name"
              className="w-full flex-1"
              name="name"
              value={formValue?.name}
              onChange={handleChange}

            />
            <Textfield
              label="Phone Number"
              placeholder="Enter number"
              className="w-full flex-1"
              name="phone_number"
              value={formValue?.phone_number}
              onChange={handleChange}
            />
            <Textfield
              label="Emaill"
              placeholder="Enter email"
              className="w-full flex-1"
              name="email"
              value={formValue?.email}
              onChange={handleChange}
            />
          </div>
        </FormWrapper>

        <FormWrapper title="Shipping Address">
          <Textfield label="Address" placeholder="Enter address"
            value={formValue?.address}
            name="address"
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap pt-6">
            <Textfield
              name="country"
              value={formValue?.country}
              onChange={handleChange}
              label="Country"
              placeholder="Enter country"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="town"
              value={formValue?.town}
              onChange={handleChange}
              label="Town/City"
              placeholder="Enter town"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="state"
              value={formValue?.state}
              onChange={handleChange}
              label="State"
              placeholder="Enter state"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="zipcode"
              value={formValue?.zipcode}
              onChange={handleChange}
              label="Zip Code"
              placeholder="Enter zip code"
              className="w-full flex-1 md:basis-[45%]"
            />
          </div>
        </FormWrapper>

        <FormWrapper title="Payment Information">
          <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap pt-6">
            <div className="basis-full flex flex-col md:flex-row items-center gap-6 flex-wrap">
              <RadioButton onClick={() => setButtonState("cash")} value="cash">
                Cash on Delivery
              </RadioButton>
              {/* <RadioButton
                onClick={() => setButtonState("credit-card")}
                value="credit-card"
              >
                Credit/Debit Card
              </RadioButton> */}
              <div className="w-1/2" />
            </div>
            {/* <Textfield
              name="accountTitle"
              label="Account Title"
              placeholder="Enter title"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="cardNumber"
              label="Card Number"
              placeholder="Enter card number"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="expiryDate"
              label="Expiry Date"
              placeholder="Enter expiry date"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="CVVCode"
              label="CVV Code"
              placeholder="Enter Code"
              className="w-full flex-1 md:basis-[45%]"
            /> */}
          </div>
        </FormWrapper>

        <ButtonContained >
          <p className="font-bold text-[#080808]" onClick={handleSubmit}>Complete Order</p>
        </ButtonContained>

      </div>
      <div className="basis-full lg:basis-[30%]">
        <OrderSummary data={cartProduct} />
      </div>

    </div>
  );
};

export default Checkout;
