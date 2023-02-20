// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { readFile } from "node:fs";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  readFile(`blogdata/${req.query.slug}.json`,'utf8',(er,data)=> {
    // console.log(typeof(data))
     res.status(200).json(JSON.parse(data))
  })
 
}
