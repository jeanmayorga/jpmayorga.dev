export function Jumbo() {
  return (
    <div className='bg-purple-600 py-24 h-full sm:h-3/4 w-full sm:flex sm:justify-center sm:items-center z-10 relative'>
      <div className='avatarWrapper m-auto sm:m-0 bg-white rounded-full p-8 pb-10'>
        <img src='avatar.svg' />
      </div>
      <div className='mx-10 sm:mr-0'>
        <p className='text-sm text-white font-medium text-opacity-60'>Hey there!</p>
        <h1 className='text-4xl text-white font-medium text-opacity-70'>I'm Jean Mayorga</h1>
        <h2 className='text-5xl text-white font-medium text-opacity-90 mb-5'>
          Full Stack Developer
        </h2>
        <p className='text-sm text-white font-medium text-opacity-60 max-w-xl'>
          I'm a Quito-based software developer who specializes in building web apps with exceptional
          experiences. Currently, I'm a full stack developer at Sweatworks. I love Typescript and
          GraphQL.
        </p>
        {/* <button className='bg-transparent text-white font-medium text-opacity-60 hover:text-white py-2 px-4 border border-grey hover:border-transparent rounded mr-2'>
          Get in touch
        </button> */}
      </div>
      <div className='absolute bottom-1 w-full flex justify-center'>
        <svg
          className='animate-bounce w-6 h-6 text-white-900'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='#f2ecfd'
        >
          <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
        </svg>
      </div>
    </div>
  );
}
