import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/user';
import mongoose from 'mongoose';

export default async function append(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect
    console.log('CONNECTING TO MONGODB...');
    await mongoose.connect("mongodb://localhost/next-chat");
    console.log('** CONNECTION MADE SUCCESSFULLY **');
    
    // query & wait for response
    console.log('** CREATING MONGO DOCUMENT... **');
    const data = await User.create(req.body);
    console.log('** DOCUMENT CREATED SUCCESSFULLY **');

    // return response
    res.json({ data });
  } catch (error) {
    res.json({ error });
    console.log(error);
  }
  
}
