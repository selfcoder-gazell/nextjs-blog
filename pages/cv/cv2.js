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
        <div>
            <h1>My CV</h1>
            <object type="image/svg+xml" data="/cv1.svg" width="100%" height="100%">
                Your browser does not support SVG
            </object>
            <img src="/cv1.svg" alt="CV" />
            <img src="/cv2.svg" alt="CV" />
        </div>

</Layout>
        );
    }
