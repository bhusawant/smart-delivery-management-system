import type { NextApiRequest, NextApiResponse } from 'next';
import { Order } from '../../../types';

let orders: Order[] = []; 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    const newOrder: Order = req.body;
    newOrder._id = String(orders.length + 1); 
    orders.push(newOrder);
    res.status(201).json(newOrder);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

