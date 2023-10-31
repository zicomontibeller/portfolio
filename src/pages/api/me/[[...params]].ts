import type { NextApiRequest, NextApiResponse } from 'next'
import { ITEMS_PER_PAGE } from '~/components/Pagination';
import { User, userData } from '~/userData'
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const { params } = req.query

  if(params) {
    let page = parseInt(params[0] || "1") || 1;

    res.status(200).json({
      ...userData,
      skills: userData.skills.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    });
  } else {
    res.status(200).json(userData);
  }
}