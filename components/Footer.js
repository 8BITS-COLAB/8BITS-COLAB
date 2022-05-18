import Data from '../data.json';

export default function Footer() {
  return (
    <footer className='pb-4'>
      <div className='max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8'>
        <ul className='Footer_nav__2rFid text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10'>
          {Data.components.footer.topics.map((topic) => (
            <li className='space-y-5 row-span-2'>
              <h2 className='text-sm tracking-wide text-gray-900 uppercase font-bold'>
                {topic.title}
              </h2>
              <ul className='space-y-4 text-md'>
                {topic.items.map((item, index) => (
                  <li>
                    <a
                      className='hover:text-gray-900 transition-colors duration-200 text-2xl'
                      href={item.src}
                      key={index}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className='flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black'>
          <ul className='flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
            {Data.components.footer.policies.map((policy) => (
              <li>
                <a
                  href={policy.src}
                  className='text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold'
                >
                  {policy.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
            <a
              href='/'
              className='text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight'
            >
              {Data.components.footer.copyright}
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
