import { NextApiRequest, NextApiResponse } from 'next';
import { githubApi } from '../../config/github-api';

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const response = await githubApi.get('/orgs/8BITS-Inc/public_members');

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
      );

      return res.status(200).json(response.data);
    }
  } catch ({ message }) {
    return res.status(500).json({ message });
  }
};
