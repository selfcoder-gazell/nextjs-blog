import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from "react";
import styles from "./cv.module.css";

import Image from "next/image";


export default function CV() {
    return (
        <Layout>
        
        <Head>
            {/* no need to add viewport meta tag as Next.js automatically adds it into the <Head> section */}
            <title>CV - resume</title>
        </Head>
        <div className={styles.container}>

        <div className={styles.page}>
            <div className={styles.cvContainer}>
                <div className={styles.top}>
                
                    <div className={styles.profileText}>
                        <h3 className={styles.heading}>KVETA MOONEY</h3>
                            <div className={styles.imgBx}>
                                <div className={styles.box}>
                                    <Image
                                    priority
                                    src="/image/profile.jpg"
                                    className={styles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt="profileimage"
                                    />

            <h4>SOFTWARE DEVELOPER</h4>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

        <div className={styles.page}>
            <div className={styles.cvContainer}>
                <div className={styles.top}>
                
                    <div className={styles.profileText}>
                        <h3 className={styles.heading}>KVETA MOONEY</h3>
                            <div className={styles.imgBx}>
                                <div className={styles.box}>
                                    <Image
                                    priority
                                    src="/image/profile.jpg"
                                    className={styles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt="profileimage"
                                    />

            <h4>SOFTWARE DEVELOPER</h4>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

            </div>
    </Layout>
    
    ); 
}