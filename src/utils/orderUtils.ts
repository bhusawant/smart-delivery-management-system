import { Order } from '../types';

export const getPendingOrders = (orders: Order[]) => {
  return orders.filter((order) => order.status === 'pending');
};

export const getAssignedOrders = (orders: Order[]) => {
  return orders.filter((order) => order.status === 'assigned');
};

export const getTotalAmount = (orders: Order[]) => {
  return orders.reduce((total, order) => total + order.totalAmount, 0);
};
