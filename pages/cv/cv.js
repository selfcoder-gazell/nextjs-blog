import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from "react";
import styles from "./cv.module.css";
import utilStyles from '/styles/utils.module.css';
import Image from "next/image";


export default function CV() {
    return (
        <Layout>
        
        <Head>
            {/* no need to add viewport meta tag as Next.js automatically adds it into the <Head> section */}
            <title>CV - resume</title>
        </Head>
        <div className={styles.resumeCanvas}>
        <div className={styles.gridParent}>

<div className={styles.div1}> 
<h3 className={styles.heading}>KVETA MOONEY</h3>
    
        <Image
        priority
        src="/image/profile.jpg"
        className={utilStyles.borderCircle}
        height={99}
        width={99}
        alt="profileimage"
        />

<h5 className={styles.h5}>SOFTWARE DEVELOPER</h5>
    
</div>


<div className={styles.div2}> </div> 
<div className={styles.div3}> 

</div>


</div>

  </div>   
{/*      

        <div className={styles.cvContainer}>

            <div className={styles.page}>
            
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

       <div className={styles.cvContainer}>
        <div className={styles.page}>
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
            </div> */}
            
    </Layout>
    
    ); 
}