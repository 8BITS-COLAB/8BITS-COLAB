import { useState } from 'react';
import Data from '../data.json';
import Toast from './Toast';

export default function Main({ members, repos }) {
  const [gitHubUsername, setGitHubUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  const removeToast = (toast) => {
    setToasts(toasts.filter((t) => t.id !== toast.id));
  };

  const beAMember = async () => {
    const toastId = Date.now();

    try {
      setIsLoading(true);
      await fetch(`https://8-bits-colab.vercel.app/api/be-a-member`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gitHubUsername }),
      });

      setToasts(
        toasts.concat([
          {
            id: toastId,
            message: `${gitHubUsername} you requested to be a member!`,
            type: 'success',
          },
        ])
      );
    } catch (error) {
      setToasts(
        toasts.concat([
          {
            id: toastId,
            message: 'Something went wrong',
            type: 'error',
          },
        ])
      );
    } finally {
      setGitHubUsername('');
      setIsLoading(false);

      setTimeout(() => {
        setToasts(toasts.filter((toast) => toast.id !== toastId));
      }, 10000);
    }
  };

  return (
    <section className='text-gray-600 body-font'>
      <div className='max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center'>
          <h1 className='mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900'>
            {Data.components.main.presentation.title}
          </h1>
          <p className='mb-4 xl:w-3/4 text-gray-600 text-lg'>
            {Data.components.main.presentation.subtitle}
          </p>
          <div className='flex justify-center'>
            <a
              className='inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900'
              href='/'
            >
              <span className='justify-center'>
                {Data.components.main.presentation.button}
              </span>
            </a>
          </div>
        </div>
        <div className='xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10'>
          <img
            className='w-80 md:ml-1 ml-24 rounded-lg'
            alt='iPhone-12'
            src={Data.components.main.presentation.imageSrc}
          ></img>
        </div>
      </div>
      <section className='mx-auto'>
        <div className='container px-5 mx-auto lg:px-24 '>
          <div className='flex flex-col w-full mb-4 text-left lg:text-center'>
            <h1 className='mb-8 text-2xl Avenir font-semibold text-black'>
              {Data.components.main.projects.title}
            </h1>
          </div>
          <div className='grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4'>
            {repos?.map((repo, index) => (
              <a
                key={index}
                href={repo.html_url}
                target='_blank'
                className='border border-gray-200 rounded-lg p-4 flex flex-col justify-center items-center hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-105'
              >
                <h3 className='text-center text-gray-600 text-lg'>
                  {repo.name}
                </h3>
                <p className='text-center font-bold text-gray-900 text-md'>
                  {repo.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className='grr max-w-7xl pt-20 mx-auto text-center'>
        <h3 className='mb-8 text-6xl Avenir font-semibold text-gray-900'>
          {Data.components.main.collaborators.title}
        </h3>
        <p className='mb-8 text-1xl Avenir font-semibold text-gray-600 text-center'>
          {Data.components.main.collaborators.subtitle}
        </p>
        <div className='flex flex-row items-center justify-center mx-auto'>
          {members?.map((member, index) => (
            <div
              key={index}
              className='container flex flex-col items-center justify-center mx-auto rounded-lg'
            >
              <img
                className='clip-circle w-32 h-32 rounded-full mb-4'
                alt='Placeholder Image'
                src={member.avatar_url}
              ></img>
              <p className='text-center text-gray-600 text-lg'>
                {member.login}
              </p>
              <a
                href={
                  member.login === 'ElioenaiFerrari'
                    ? 'https://elioenai-ferrari.vercel.app'
                    : member.html_url
                }
                target='_blank'
                className='text-center font-bold text-gray-900 text-md transition duration-500 ease-in-out hover:text-gray-700 hover:underline'
              >
                {member.login === 'ElioenaiFerrari'
                  ? 'Founder'
                  : 'Collaborator'}
              </a>
            </div>
          ))}
        </div>
      </div>
      <section className='relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
          <div className='py-24 md:py-36'>
            <h3 className='mb-5 text-6xl Avenir font-semibold text-gray-900'>
              {Data.components.main.beAMember.title}
            </h3>
            <p className='mb-9 text-2xl font-semibold text-gray-600'>
              {Data.components.main.beAMember.subtitle}
            </p>
            <input
              placeholder='Your github username'
              name='github'
              value={gitHubUsername}
              onChange={({ target }) => setGitHubUsername(target.value)}
              className='border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900'
            ></input>{' '}
            <button
              className={
                gitHubUsername
                  ? 'inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900'
                  : 'inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-gray-600 transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-100 cursor-not-allowed'
              }
              disabled={!gitHubUsername || isLoading}
              onClick={beAMember}
            >
              <span className='justify-center'>
                {isLoading
                  ? 'Loading...'
                  : Data.components.main.beAMember.button}
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className='fixed bottom-5 left-5'>
        {toasts?.map((toast, index) => (
          <Toast
            key={index}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast)}
          />
        ))}
      </section>
    </section>
  );
}
