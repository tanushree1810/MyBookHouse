import React from 'react'
import { BsFillBookFill } from 'react-icons/bs';
import { HiOutlineCursorClick, HiOutlineLightBulb } from "react-icons/hi";

const About = () => {
  return (
    <div className='mt-20'>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Welcome to Book Haven</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Better Reading Experience</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Welcome to Book Haven, your ultimate destination for an unparalleled book shopping experience. At Book Haven, we believe that books are not just a means of escape but a gateway to new worlds, ideas, and perspectives. Our mission is to make reading accessible and enjoyable for everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff9c08aed-6944-4184-8fac-02ac8457e249_1080x1277.jpeg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                <strong className="font-semibold text-gray-900">Our Story</strong><br></br>
                Book Haven was born out of a passion for literature and a vision to create a community of readers. Founded by a team of book enthusiasts, our journey began with a simple idea: to provide a platform where book lovers can discover, explore, and indulge in their love for reading. With our online bookstore, we bring the joy of books right to your doorstep.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BsFillBookFill className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Wide Selection</strong> Our collection boasts a vast array of genres, including fiction, non-fiction, mystery, romance, science fiction, fantasy, self-help, and more. Whether you’re looking for the latest bestsellers or timeless classics, we have something for every reader.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineCursorClick className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">User-Friendly Interface</strong> Our website is designed with you in mind. With an intuitive interface, seamless navigation, and advanced search options, finding your next read has never been easier.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiOutlineLightBulb className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Personalized Recommendations</strong> Discover books tailored to your preferences with our smart recommendation system. Based on your reading history and interests, we suggest titles that you’re sure to love.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                At Book Haven, we are committed to fostering a love for reading and supporting the literary community. We partner with authors, publishers, and local bookstores to bring you the best selection of books. Our dedicated team works tirelessly to ensure that every book lover can find their next great read with ease and convenience.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Commitment</h2>
              <p className="mt-6">
                Thank you for choosing Book Haven as your go-to online bookstore. We look forward to accompanying you on your reading journey and helping you discover the magic of books. Happy Reading!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
