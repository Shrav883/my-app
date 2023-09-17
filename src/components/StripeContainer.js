import React from 'react'
import { Elements } from "stripe/react-stripe-js"
import { loadStripe } from "stripe/stripe-js"

const PUBLIC_KEY = "pk_test_51NrFOKBch0DezZegOcb1whDcFRbP8kctKQnq7CPPsLUiXLurFPmloovhECJ9fWlkUXMj4B0nfFF5iKAMOWGK7zg200f2hjgnPH"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return(
        <Elements stripe={StripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}