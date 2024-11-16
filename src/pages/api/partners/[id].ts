import { NextApiRequest, NextApiResponse } from 'next';

let partners = [
  { _id: '1', name: 'John Doe', email: 'john@example.com', status: 'active' },
  { _id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid partner ID' });
  }

  const partner = partners.find((p) => p._id === id);

  if (!partner) {
    return res.status(404).json({ message: 'Partner not found' });
  }

  if (req.method === 'PUT') {
    const updatedData = req.body;
    Object.assign(partner, updatedData);
    return res.status(200).json(partner);
  } else if (req.method === 'DELETE') {
    partners = partners.filter((p) => p._id !== id);
    return res.status(204).end();
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
