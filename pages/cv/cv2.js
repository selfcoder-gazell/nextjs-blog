import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import React from "react";
import styles from "./cv.module.css";
import utilStyles from '/styles/utils.module.css';
import Image from "next/image";
import MyDocument from "../_document";

// export default function CV() {
//     const [showSecondPage, setShowSecondPage] = useState(false);

//     return (
//         <Layout>
//             <Head>
//                 <title>CV - resume</title>
//             </Head>
//             <div className={styles.containerBothPages}>
//                 <div className={styles.resumeCanvasFirst}>
//                     {/* Content for the first page */}
//                 </div>
//                 {showSecondPage && (
//                     <div className={styles.resumeCanvasSecond}>
//                         {/* Content for the second page */}
//                     </div>
//                 )}
//             </div>
//             <button onClick={() => setShowSecondPage(!showSecondPage)}>
//                 {showSecondPage ? 'Show First Page' : 'Show Second Page'}
//             </button>
//         </Layout>
//     );
// }

export default function CV2() {
    return (
        <Layout>
        
        <Head>
            {/* no need to add viewport meta tag as Next.js automatically adds it into the <Head> section */}
            <title>CV - resume</title>
        </Head>
        {/* <div className={styles.containerBothPages}></div> */}


        <div className={styles.resumeCanvas}>
        <div className={styles.gridParent}>

<div className={styles.topHeading}> 
<h3 className={styles.heading}><strong>KVETA MOONEY</strong></h3>
    
        <Image
        priority
        src="/image/profile.jpg"
        className={utilStyles.borderCircle}
        height={66}
        width={66}
        alt="profileimage"
        />

<h5 className={styles.h5}>SOFTWARE DEVELOPER</h5>
    

    
</div>


<div className={styles.leftColumn}>
    <div className={styles.leftContainer}>

    <h6 className={styles.centeredText}>EXPERIENCE</h6> 
    <p><strong>Full time Bootcamper at School of Code</strong></p>
    <p>(Sep.2023-Present)</p>
    <p className={styles.text}>We were selected from over 3000 candidates to join 
    this 90-person, full-time, fully remote, 16-weeks fast-paced web 
    development boot camp. We delved straight into full-stack modern and 
    relevant technologies. I've learned how to collaborate in pair programming 
    in a team following agile methodologies, along with exciting technical 
    skills and many invaluable soft skills.</p>
    <p><strong>Final Project: Harvest Hub</strong></p>
    <p className={styles.text}>Harvest Hub is the ultimate web application 
    designed to nurture our passion for all things green. The App helps people 
    find information about how to grow vegetable and track their growth and 
    expected harves date. </p>
    <p><strong>Tech Stack & Planning Tools:</strong> React, Next.js, 
    Supabase, Figma, VSC, Chakra, Vercel. Jest, Playwright, Tyescript, GitHub</p>
    <p><strong>Team and duration</strong> - 6 developers for 4 weeks</p>
    <p><strong>Mid Project: Memory Echo</strong></p>
    <p>Meory Echo is an app that helps us all make our learning journey more effective - 
    with predefined spaced repetion.</p>
    <p><strong>Tech Stack & Planning Tools:</strong></p>
    <p>Figma, VSC, React, CSS, HTML, JavaScript</p>
    <p><strong>Team and duration</strong> - 6 developers for 4 weeks</p>
    
    </div> 
    </div>

<div className={styles.rightColumn}> 
<div className={styles.rightContainer}>
<h6 className={styles.centeredText}>TOOLS & TECHNOLOGIES</h6> 
<ul className={styles.text}>
    <li> Java Script</li>
    <li> HTML5</li>
    <li> CSS3</li>
    <li>React / Next.js </li>
    <li>Git / GitHub </li>
    <li>PostgreSQL</li>
    <li>Figma</li>
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
<p><strong>School of Code</strong></p>
<ul className={styles.text}>
    <li>Learned how to build web apps using an ample tech stack</li>
    <li>Learned soft skills such as Critical Thinking, Presentation Skills, and Development</li>
    <li>Developed an even greater desire to learn how to develop an application the correct way</li>
</ul>




</div>
</div>
<div4 className={styles.div4}>
  
    <br></br>

    <p>github.com/selfcoder-gazell</p>
    <br></br>
    <p>kvetamooney@gmail.com</p>
    <br></br>
    <p>linkedin.com/kveta-mooney/</p>
    </div4>

</div>
</div>  
<br></br>

  <div className={styles.resumeCanvas}>
<div className={styles.gridParent2}>

    <div className={styles.div1}>

    <p><strong>Field Engineer at Openreach </strong>(Apr 2019 - Jul 2020)</p>
    <p>Used my analytical skills to solve any broadband issue customers had. 
    I have learned a lot about how to deal with people from different walks of life. </p>
    <p><strong>Kitchen Assistant </strong></p>
    <p>(Oct 2017 - Apr 2019)</p>
    <p>Working in a highly team-focused environment. 
    Improved team relationships by organizing regular social events.</p>
    <p><strong>Domiciliary carer</strong></p>
    <p>(Nov 2016 - Jul 2017)</p>
    <p>Improved the lives of elderly, long-term ill, and vulnerable 
    people through emphaty and support while allowing for independence.</p>
    <p><strong>Homemaker</strong></p>
    <p>(Oct 2010 - Nov 2016)</p>
    <p>Improved my organizational, time management, and analytical skills. 
        Discovered my passion for creativity by upcycling old furniture. 
    Motivated our children to be the best they can be. </p>

    </div>

    <div className={styles.div2}>
    <h6 className={styles.centeredText}>EDUCATION cont.</h6> 
<p><strong>Vision2learn (2023)</strong></p>
<p className={styles.text}>NCFE Level2 certificate in understanding coding</p>
<p><strong>Thames Valley University (2011)</strong></p>
<p>Certificate in Professional Computer Networking - Cisco</p>

<h6 className={styles.centeredText}>LANGUAGES</h6> 
<p>English - fluent (levelC1)</p>
<p>Czech - native</p>
<p>Slovak - pasive</p>

<h6 className={styles.centeredText}>LEISURE TIME</h6> 
<p><strong>Regular Running </strong>- energizes me for another challenging 
day and clears my mimd from daily hassles/worries. New ideas and 
problem solutions come to my head while running. Each race I do is a 
competition against my past self.</p>
<p><strong>Cold water immersion </strong>gives me a sense of achievement 
by overcoming the discomfort of exposure to cold water, teaching me 
to feel comfortable being uncomfortable. 
It also helps me to recover from my aching legs after a long run.</p>
<p><strong>Mountain/hill walking </strong>helps me escape hectic/busy working/family 
life and recharge my batteries. Problems seem small and irrelevant from the 
top of a mountain giivng me a new/different perspective.</p>        

    </div>
</div>

  </div>    

  <section>
  <div>
            
            <a href="/image/cv.pdf" download>Download my CV PDF</a>
        </div>

  </section>
 
            
    </Layout>
    
    ); 
}