import type { NextApiRequest, NextApiResponse } from 'next'
import { User, userData } from '~/userData'
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(userData)
}