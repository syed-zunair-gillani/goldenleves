"use client";
import { ButtonContained, FormWrapper, Textfield } from "../_components";
import { useContext } from "react";
import RadioButton from "../_components/radioButton";
import { GlobalContext } from "@/context/globalContext";
import OrderSummary from "./orderSummary";

const Checkout = () => {
  const { setButtonState } = useContext(GlobalContext);
  return (
    <div className="section-margin flex flex-col lg:flex-row gap-4 xl:gap-10">
      <div className="w-full flex flex-col gap-6 basis-full lg:basis-[70%]">
        <FormWrapper title="Contact Info">
          <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap pt-6">
            <Textfield
              name="name"
              label="Name"
              placeholder="Enter name"
              className="w-full flex-1"
            />
            <Textfield
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter number"
              className="w-full flex-1"
            />
            <Textfield
              name="email"
              label="Emaill"
              placeholder="Enter email"
              className="w-full flex-1"
            />
          </div>
        </FormWrapper>

        <FormWrapper title="Shipping Address">
          <Textfield label="Address" placeholder="Enter address" />
          <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap pt-6">
            <Textfield
              name="country"
              label="Country"
              placeholder="Enter country"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="town"
              label="Town/City"
              placeholder="Enter town"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="state"
              label="State"
              placeholder="Enter state"
              className="w-full flex-1 md:basis-[45%]"
            />
            <Textfield
              name="zipCode"
              label="Zip Code"
              placeholder="Enter zip code"
              className="w-full flex-1 md:basis-[45%]"
            />
          </div>
        </FormWrapper>

        <FormWrapper title="Payment Information">
          <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap pt-6">
            <div className="basis-full flex flex-col md:flex-row items-center gap-6 flex-wrap">
              <RadioButton
                onClick={() => setButtonState("credit-card")}
                value="credit-card"
              >
                Credit/Debit Card
              </RadioButton>
              <RadioButton onClick={() => setButtonState("cash")} value="cash">
                Cash on Delivery
              </RadioButton>
            </div>
            <Textfield
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
            />
          </div>
        </FormWrapper>
        <ButtonContained>
          <p className="font-bold text-[#080808]">Complete Order</p>
        </ButtonContained>
      </div>
      <div className="basis-full lg:basis-[30%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
