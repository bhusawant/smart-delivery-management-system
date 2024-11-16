import { NextApiRequest, NextApiResponse } from 'next';

const assignmentMetrics = {
  totalAssigned: 100,
  successRate: 90, 
  averageTime: 30, 
  failureReasons: [
    { reason: 'Partner unavailable', count: 10 },
    { reason: 'Incorrect address', count: 5 },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(assignmentMetrics);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
