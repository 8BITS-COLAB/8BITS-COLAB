import Head from 'next/head';
import Main from '../components/Main';
import { NextSeo } from 'next-seo';
import { nextApi } from '../config/next-api';

export default function Home({ members }) {
  return (
    <div className='text-black'>
      <NextSeo
        title='Home: Intelliway'
        description='Welcome to Intelliway homepage.'
        canonical='https://Intelliway-2.vercel.app/'
        openGraph={{
          url: 'https://Intelliway-2.vercel.app/',
        }}
      />
      <Head>
        <title>Intelliway</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main members={members} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await nextApi.get('/api/github');

  return {
    props: {
      members: response.data,
    },
  };
}
