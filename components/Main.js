import Data from '../data.json';

export default function Main({ members }) {
  console.log(members);

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
            className='w-80 h-80 md:ml-1 ml-24 rounded-lg shadow-md object-cover object-center'
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
            {Data.components.main.projects.items.map((project, index) => (
              <div key={index} className='flex items-center justify-center'>
                <img
                  src={project.imageSrc}
                  alt='Google Logo'
                  className='block object-contain h-16 greyC'
                ></img>
              </div>
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
        {members?.map((member, index) => (
          <div
            key={index}
            className='container flex flex-col items-center justify-center mx-auto rounded-lg'
          >
            <img
              className='object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md'
              alt='Placeholder Image'
              src='https://pbs.twimg.com/media/EFj4DNdW4AEsLts?format=jpg&name=large'
            ></img>
          </div>
        ))}
      </div>
      <section className='relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 text-center'>
          <div className='py-24 md:py-36'>
            <h1 className='mb-5 text-6xl Avenir font-semibold text-gray-900'>
              Se inscreva para receber nossas novidades
            </h1>
            <h1 className='mb-9 text-2xl font-semibold text-gray-600'>
              Digite seu email e receba novos conteúdos
            </h1>
            <input
              placeholder='john.doe@gmail.com'
              name='email'
              type='email'
              autoComplete='email'
              className='border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900'
            ></input>{' '}
            <a
              className='inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900'
              href='/'
            >
              <span className='justify-center'>Inscreva-se</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
