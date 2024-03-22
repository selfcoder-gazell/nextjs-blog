import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from '/styles/utils.module.css';
import Image from "next/image";
import styles from './cv.module.css';

export default function CV() {
    return (
        <Layout>
        
        <Head>
            {/* no need to add viewport meta tag as Next.js automatically adds it into the <Head> section */}
            <title>CV - resume</title>
        </Head>
        <div style={{ height: '100vh'}}>
        {/* <div style={{ height: '100vh', overflow:'auto' }}> */}

        
            
            <iframe src="/image/cv.pdf" style={{ width: '100%', height: '98rem', border: 'none' }}></iframe>
            

        <div className={styles.centeredText}> 
        
        
            
            <a href="/image/cv.pdf" download>Download/Open this CV in PDF</a>
        </div>
            
        </div>

        </Layout>
        );
    }
