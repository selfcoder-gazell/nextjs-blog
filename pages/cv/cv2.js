import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from "react";
import utilStyles from '/styles/utils.module.css';
import Image from "next/image";

export default function CV2() {
    return (
        <Layout>
        
        <Head>
            {/* no need to add viewport meta tag as Next.js automatically adds it into the <Head> section */}
            <title>CV - resume</title>
        </Head>
        <div style={{ height: '100vh', overflow:'auto' }}>

        
            <h1>My CV</h1>
            <iframe src="/image/cv.pdf" style={{ width: '100%', height: '100%', border: 'none' }}></iframe>
            

        <div>
            
            <a href="/image/cv.pdf" download>Download my CV PDF</a>
        </div>
            
        </div>

</Layout>
        );
    }
