import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

type LayoutProps = {
  children: React.ReactNode
}


export const MainLayout = (props: LayoutProps) => {
    return (
        <div className={styles.container}>
          
          <Head>
            <title>Home</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        
          <Navbar />
    
          <main className={styles.main}>
    
            { props.children }
    
          </main>     
        </div>
      )
};