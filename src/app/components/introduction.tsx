const Introduction = () => {
  return (
    <div className="flex  flex-row justify-center ">
      <div className="flex  w-2/4   items-start my-auto  flex-col gap-2">
        <div className="text-3xl font-bold">Hello Im</div>
        <div className="text-lg ml-2 font-bold text-blue-600">
          Mondher Jandoubi
        </div>
        <div className="flex flex-col">
          <div className="text-6xl font-bold">Fullstack </div>
          <div className="flex flex-row">
            <div className="text-6xl font-bold ml-2">developer</div>
            <div className="text-6xl font-bold text-blue-600 ">.</div>
          </div>
        </div>

        <div className="flex text-xl w-3/4 ">
          I&apos;m a full-fledged code-loving, bug-squashing, feature-building
          nerd, and I wouldn&apos;t have it any other way. While others might
          find joy in sports or binge-watching TV shows, I get my kicks from
          clean code, efficient algorithms, and the sweet, sweet sound of a
          build passing on the first try.
        </div>
        <div className="flex flex-col pa-1 gap-3">
          <div className="flex flex-row">
            <a
              href="https://www.linkedin.com/in/mondher-jandoubi-736928239/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-black rounded-3xl bg-gray-300  hover:bg-gray-400  focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">Linkedin Icon</span>
              </button>
            </a>

            <a
              href="https://github.com/Mondherjendoubi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-black rounded-3xl bg-gray-300  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </a>

            <a
              href="https://www.facebook.com/mondher.jendoubi.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-black rounded-3xl bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </a>
          </div>

          <a
            href="/MondherJandoubiCv.pdf"
            download
            className="px-5 py-2 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none "
          >
            CV Here
          </a>
        </div>
      </div>

      <img
        height="600"
        width="600"
        src="/Untitled design (5).png"
        alt="image description"
      />
    </div>
  );
};

export default Introduction;
