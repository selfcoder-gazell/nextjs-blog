import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from "react";
import styles from "./cv.module.css";
import utilStyles from '/styles/utils.module.css';
import Image from "next/image";
import MyDocument from "../_document";

export default function CV() {
    return (
        <Layout>
        
        <Head>
            {/* no need to add viewport meta tag as Next.js automatically adds it into the <Head> section */}
            <title>CV - resume</title>
        </Head>
        
        <div className={styles.resumeCanvas}>
        <div className={styles.gridParent}>

<div className={styles.topHeading}> 
<h3 className={styles.heading}>KVETA MOONEY</h3>
    
        <Image
        priority
        src="/image/profile.jpg"
        className={utilStyles.borderCircle}
        height={99}
        width={99}
        alt="profileimage"
        />
<span>
    <h5 className={styles.h5}>SOFTWARE DEVELOPER</h5>
    </span>

    
</div>


<div className={styles.leftColumn}>
    <div className={styles.leftContainer}>

    <h6 className={styles.centeredText}>EXPERIENCE</h6> 
    <p>Full time Bootcamper at School of Code</p>
    <p>(Sep.2023-Present)</p>
    <p className={styles.text}>We were selected from over 3000 candidates to join this 90-person, full-time, fully remote, 16-weeks fast-paced web development boot camp. We delved straight into full-stack modern and relevant technologies. I've learned how to collaborate in pair programming in a team following agile methodologies, along with exciting technical skills and many invaluable soft skills.</p>
    <p>Final Project: Harvest Hub</p>
    <p className={styles.text}>Harvest Hub is the ultimate web application designed to nurture our passion for all things green. The App helps people find information about how to grow vegetable and track their growth and expected harves date. </p>
    </div> 
    </div>

<div className={styles.rightColumn}> 
<div className={styles.rightContainer}>
<h6 className={styles.centeredText}>TOOLS & TECHNOLOGIES</h6> 
<ul className={styles.text}>
    <li>Java Scrip</li>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>React</li>
    <li>Git / GitHub </li>
    <li>PostgreSQL</li>
    <li>Figrma</li>
    <li>Slack</li>
    <li>VS Code</li>
</ul>

<h6 className={styles.centeredText}>INDUSTRY KNOWLEDGE</h6> 
<ul className={styles.text}>
    <li>UI/UX Design</li>
    <li>Disney Ideation</li>
    <li>User stories and personas</li>
    <li>Wireframe Creation</li>
    <li>Pair Programming</li>
    <li>Scrum / Kanban </li>
</ul>

<h6 className={styles.centeredText}>PERSONAL SKILLS</h6> 
<ul className={styles.text}>
    <li>Self-motivated</li>
    <li>Creative thinking</li>
    <li>Team player</li>
    <li>Collaboration</li>
</ul>

<h6 className={styles.centeredText}>EDUCATION</h6> 
<p>School of Code</p>
<ul className={styles.text}>
    <li>Learned how to build web apps using an ample tech stack</li>
    <li>Learned soft skills such as Critical Thinking, Presentation Skills, and Development</li>
    <li>Developed an even greater desire to learn how to develop an application the </li>
</ul>
<p>Vision2learn</p>
</div>
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