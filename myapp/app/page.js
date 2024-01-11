import Divider from '@/components/Divider'
import Hero from '@/components/homepage/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='dark:bg-grey dark:text-white'>
      <Hero />
      <Divider />
      <div className='flex flex-col text-center w-full mb-20 mt-20'>
        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800'>
          Members Section
        </h1>
        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
        </p>
      </div>
      <div className='mb-24'>
      <div className='flex flex-wrap -m-2 max-w-screen-lg mx-auto dark:bg-grey'>
        <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div className='flex items-center border-gray-200 border p-4 rounded-lg'>
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
          <div class="flex-grow">
            <h2 class="text-gray-800 title-font font-medium">Holden Caulfield</h2>
            <p class="text-gray-500">UI Designer</p>
          </div>
          </div>
        </div>
        <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
          <div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
          <div class="flex-grow">
            <h2 class="text-gray-800 title-font font-medium">Holden Caulfield</h2>
            <p class="text-gray-500">UI Designer</p>
          </div>
          </div>
        </div>
      </div>
      </div>
    <Divider />
    </main>
  )
}
