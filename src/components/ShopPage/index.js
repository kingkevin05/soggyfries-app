import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckOutForm';
import Product from "./Product";

const stripePromise = loadStripe('pk_test_51NSz7VLJbduBGdSqyZX7nCfrYT1tSvOr27vzjnMFIDMyEckfsV3mvDbECV0Vwa9r5Ka0ZJIK7s6EZQh057siu9As004e50Lxav');

const mockProducts = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for product 1',
    price: '$100',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for product 2',
    price: '$200',
    imageUrl: 'https://via.placeholder.com/150'
  },
  // Add as many products as you like...
];


function ShopPage() {
  return (
    <div>
      <h1>Shop Page</h1>
      <div className="shop-page">
      {mockProducts.map(product => <Product key={product.id} product={product} />)}
    </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default ShopPage;
