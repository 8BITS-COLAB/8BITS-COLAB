export default function Toast({ type, message, onClose }) {
  return (
    <div
      className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-100 bg-gray-900 mt-4 ${
        type === 'error'
          ? 'border-2 border-red-500 dark:border-red-300'
          : 'border-2 border-green-500 dark:border-green-300'
      }`}
      role='alert'
    >
      <div className='mx-3 text-sm font-normal text-gray-100'>{message}</div>
      <button
        type='button'
        className='ml-auto bg-transparent border border-gray-500 hover:border-gray-500 text-gray-500 hover:text-gray-500 p-1 rounded-full'
        data-dismiss-target='#toast-default'
        aria-label='Close'
        onClick={onClose}
      >
        <span className='sr-only'>Close</span>
        <svg
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clip-rule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  );
}
