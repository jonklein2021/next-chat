import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/user';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'

 const Login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.query;

  // connect
  console.log('CONNECTING TO MONGODB...');
  await mongoose.connect(process.env.MONGO_URI || "", {
    dbName: 'next-notes'
  });
  console.log('** CONNECTION MADE SUCCESSFULLY **');
  
  // query & wait for response
  console.log('** QUERYING DATABASE... **');
  const data = await User.find(req.query);
  console.log('** RESPONSE RECEIVED **');

  let user = {} as {[key: string]: string};
  for (const [k, v] of Object.entries(data)) {
    if (v) {
      user[k] = v;
    }
  }
  
  // return jwt if user found
  res.json(data.length > 0 ? jwt.sign(user, process.env.JWT_KEY || "") : "");
}

export default Login;