import type { NextApiRequest, NextApiResponse } from 'next';

const sampleAssignments = [
  {
    _id: '1',
    orderId: 'ORD123',
    partnerId: 'partner1',
    timestamp: new Date().toISOString(),
    status: 'success',
  },
  {
    _id: '2',
    orderId: 'ORD124',
    partnerId: 'partner2',
    timestamp: new Date().toISOString(),
    status: 'failed',
    reason: 'Customer unavailable',
  },
  {
    _id: '3',
    orderId: 'ORD125',
    partnerId: 'partner3',
    timestamp: new Date().toISOString(),
    status: 'success',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(sampleAssignments);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
