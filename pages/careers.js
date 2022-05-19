import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Data from '../data.json';

export default function Careers() {
  return (
    <div className='text-black'>
      <NextSeo
        title={`Careers: ${Data.components.header.company}`}
        description='Careers page for all our members'
        canonical='https://8bits-colab.vercel.app/careers'
        openGraph={{
          url: 'https://8bits-colab.vercel.app/careers',
        }}
      />
      <Head>
        <title>Carreiras</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
          <div className='py-24 md:py-36'>
            <h3 className='mb-5 text-6xl Avenir font-semibold text-gray-900'>
              {Data.pages.careers.title}
            </h3>
            <p className='mb-9 text-2xl font-semibold text-gray-600'>
              {Data.pages.careers.subtitle}
            </p>

            <label
              htmlFor='resume'
              className='w-64 p-1 mx-auto font-bold text-center text-black border border-gray-500 rounded-lg sm:p-4 cursor-pointer'
            >
              Selecione o arquivo
            </label>
            <input
              className='w-full px-5 py-3 text-gray-700 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:shadow-outline hidden'
              type='file'
              name='resume'
              id='resume'
            />

            {/* <a
              className='inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900'
              href='/'
            >
              <span className='justify-center'>Enviar</span>
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
