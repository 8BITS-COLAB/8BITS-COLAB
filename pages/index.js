import Head from 'next/head';
import Main from '../components/Main';
import { NextSeo } from 'next-seo';
import { githubApi } from '../config/github-api';
import Data from '../data.json';

export default function Home({ members, repos }) {
  return (
    <div className='text-black'>
      <NextSeo
        title={`Home: ${Data.components.header.company}`}
        description='Home page for all our members'
        canonical='https://8bits-colab.vercel.app'
        openGraph={{
          url: 'https://8bits-colab.vercel.app',
        }}
      />
      <Head>
        <title>{Data.components.header.company}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main members={members} repos={repos} />
    </div>
  );
}

export async function getServerSideProps({ res }) {
  const props = {};

  try {
    const { data: members } = await githubApi.get(
      '/orgs/8BITS-COLAB/public_members?per_page=10'
    );

    const { data: repos } = await githubApi.get(
      '/orgs/8BITS-COLAB/repos?per_page=10'
    );

    props.members = members;
    props.repos = repos;
  } catch ({ message }) {
    console.error({ message });
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return { props };
}
