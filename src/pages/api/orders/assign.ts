import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { orderId, partnerId } = req.body;

    if (!orderId || !partnerId) {
      return res.status(400).json({ message: 'Order ID and Partner ID are required' });
    }

    const assignmentStatus = Math.random() > 0.1 ? 'success' : 'failed';

    return res.status(200).json({ status: assignmentStatus });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
