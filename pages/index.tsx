import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/NoUser.module.css'
import bg from '../public/shapes.jpg'
import Popup from '../components/Popup'
import jwt from 'jsonwebtoken'


const Login: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  // check db for user/pass pair
  // admit entry if it exists, reject otherwise
  const authenticate = async () => {
    try {
      const res = await fetch(`api/login?username=${username}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
        },
      });

      const data = await res.json();
      
      console.log(data);
      
      if (data.length === 0) {
        // user not found in db
        setError(true);
        return;
      }

      // user logs in successfully: store jwt in cookie
      document.cookie = `jwt=${data}`;
      router.push("/home");
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <Head>
        <title>Sign in</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}>
        <div className={styles.box}>

          <h1>Sign in</h1>

          <input placeholder='Username' id='username' className={styles.input} onChange={e => setUsername(e.target.value)} />

          <input placeholder='Password' id='password' className={styles.input} onChange={e => setPassword(e.target.value)} />

          <button className={styles.submit} onClick={() => authenticate()}>Log in</button>

          <p>No account? Register <Link href="/register" className={styles.link} >here</Link></p>

          {error ? <Popup text='ERROR: Username or password incorrect' color='#de2f2f' onClick={() => setError(false)} /> : null}
        
        </div>

      </main>
    </>
  )
  
}

export default Login;
