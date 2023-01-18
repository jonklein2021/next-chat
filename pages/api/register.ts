import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/user';
import mongoose from 'mongoose';

export default async function Register(req: NextApiRequest, res: NextApiResponse) {  
  try {
    // connect
    console.log('CONNECTING TO MONGODB...');
    await mongoose.connect(process.env.MONGO_URI || "", {
      dbName: 'next-notes'
    });
    console.log('** CONNECTION MADE SUCCESSFULLY **');
    
    // create document and send to db
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
