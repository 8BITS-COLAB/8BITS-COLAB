import Head from 'next/head';
import Main from '../components/Main';
import { NextSeo } from 'next-seo';
import { githubApi } from '../config/github-api';
import Data from '../data.json';

export default function Home({ members }) {
  return (
    <div className='text-black'>
      <NextSeo
        title={`Home: ${Data.components.header.company}`}
        description='Home page for all our members'
        canonical='https://8bits-inc.vercel.app'
        openGraph={{
          url: 'https://8bits-inc.vercel.app',
        }}
      />
      <Head>
        <title>{Data.components.header.company}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main members={members} />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const response = await githubApi.get('/orgs/8BITS-Inc/public_members');

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return {
    props: {
      members: response.data,
    },
  };
}
