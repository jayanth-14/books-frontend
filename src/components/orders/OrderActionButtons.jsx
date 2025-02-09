import React from 'react'
import { OrderCancelled, OrderDelivered, OrderFailed } from './OrderDelivered';
import OrderActions from './OrderActions';

function OrderActionButtons({status, id}) {
  let element = <h1>Loading</h1>
   switch (status) {
    case 'delivered': element = <OrderDelivered />;
      break;
    case 'cancelled': element = <OrderCancelled />;
      break;
    case 'failed': element = <OrderFailed />;
      break;
    default: element = <OrderActions id={id} />;
      break;
  }
  return element;
}

export default OrderActionButtons