import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
import Data from '../data.json';

export default function Contact() {
  return (
    <div className='text-black'>
      <NextSeo
        title={`404: ${Data.components.header.company}`}
        description='404 page for all our missing pages'
        canonical='https://8bits-colab.vercel.app/404'
        openGraph={{
          url: 'https://8bits-colab.vercel.app/404',
        }}
      />
      <Head>
        <title>{Data.components.header.company}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='flex flex-col justify-center mx-auto mt-52 text-center max-w-2x1'>
        <h1 className='text-3xl font-bold tracking-tight text-black md:text-5xl'>
          404 – Unavailable
        </h1>
        <br />

        <div className='w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4'>
          <Link href='/'>Return Home</Link>
        </div>
      </div>
      <div className='mt-64'></div>
      <Footer />
    </div>
  );
}
