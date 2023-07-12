import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51NSz7VLJbduBGdSqyZX7nCfrYT1tSvOr27vzjnMFIDMyEckfsV3mvDbECV0Vwa9r5Ka0ZJIK7s6EZQh057siu9As004e50Lxav');

function ShopPage() {
  return (
    <div>
      <h1>Shop Page</h1>
      {/* List your products here */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default ShopPage;
