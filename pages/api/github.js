import { NextApiRequest, NextApiResponse } from 'next';
import { githubApi } from '../../config/github-api';

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  if (req.method === 'GET') {
    const response = await githubApi.get('/orgs/8BITS-Inc/public_members');

    return res.status(200).json(response.data);
  }
};
