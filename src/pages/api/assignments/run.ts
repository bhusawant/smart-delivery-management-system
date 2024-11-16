import { NextApiRequest, NextApiResponse } from 'next';

const assignOrder = (orderId: string, partnerId: string) => {
  const isSuccessful = Math.random() > 0.1;
  return isSuccessful ? 'success' : 'failed';
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { orderId, partnerId } = req.body;

    if (!orderId || !partnerId) {
      return res.status(400).json({ message: 'Order ID and Partner ID are required' });
    }

    const status = assignOrder(orderId, partnerId);

    return res.status(200).json({ status });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
