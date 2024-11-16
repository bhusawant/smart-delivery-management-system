import { NextApiRequest, NextApiResponse } from 'next';

let partners = [
  { _id: '1', name: 'John Doe', email: 'john@example.com', status: 'active' },
  { _id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(partners);
  } else if (req.method === 'POST') {
    const newPartner = req.body;
    partners.push(newPartner);
    return res.status(201).json(newPartner);
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
