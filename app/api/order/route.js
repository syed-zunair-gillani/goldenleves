import api from "@/config/api";

export async function POST(req) {
     const { formValue, cartProduct } = await req.json()
     var products = cartProduct?.map((item)=>{
          return {
               product_id: item.id,
               quantity: item.quantity
          }
     })
     const orderData = {
          payment_method: "bacs",
          payment_method_title: "Cash On Delivery",
          set_paid: true,
          billing: {
               first_name: formValue?.name,
               address_1: formValue?.address,
               city: formValue.town,
               state: formValue?.state,
               postcode: formValue?.zipcode,
               country: formValue?.country,
               email: formValue?.email,
               phone: formValue?.phone_number
          },
          shipping: {
               first_name: formValue?.name,
               address_1: formValue?.address,
               city: formValue.town,
               state: formValue?.state,
               postcode: formValue?.zipcode,
               country: formValue?.country,
          },
          line_items: products,
          shipping_lines: [
               {
                    method_id: "flat_rate",
                    method_title: "Flat Rate",
                    total: "0"
               }
          ]
     };
     try {
          const res = api.post("orders", orderData)
          return Response.json({ status: 'ok', formValue, cartProduct})
     } catch (error) {
          return Response.json(error)
     }
}