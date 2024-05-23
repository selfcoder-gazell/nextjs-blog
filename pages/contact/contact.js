import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
    return (
        <Layout>
        
        <Head>
            <title>Contact</title>
        </Head>
        <h2>
              Get in touch
            </h2> 
            <ContactForm>
                
            </ContactForm>
        
        
    </Layout>
    
    ); 
}