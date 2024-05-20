const Qualification = () => {
  return (
    <div className="container flex flex-col mx-auto w-full h-full p-4 md:p-10">
      {/* Header section - only shown on medium and larger screens */}

      <div className="mx-auto my-10 text-4xl md:text-2xl font-bold">
        Qualifikation
      </div>
      <div className="hidden md:flex flex-row gap-8 md:gap-20 justify-around md:mb-4">
        <div className="flex flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 md:w-12 md:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>

          <div className="font-bold text-xl md:text-3xl">Work</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 md:w-12 md:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <div className="text-black text-xl md:text-3xl">Education</div>
        </div>
      </div>

      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        {/* Timeline line - only shown on medium and larger screens */}
        <div className="left-1/2 border-2 absolute border-opacity-20 border-gray-700 h-full hidden md:block"></div>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
          <div className="order-1 w-full md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-white rounded-lg shadow-2xl w-full md:w-5/12 px-6 py-4">
            <h3 className="font-bold text-gray-800 text-lg md:text-xl">
              Bachelor computer science degree
            </h3>
            <h3 className="font-bold text-gray-600 text-md md:text-lg">
              Technische Universität Braunschweig
            </h3>
            <h3 className="font-bold text-gray-600 text-md md:text-lg">
              October 2019 - Sept 2023
            </h3>
            <p className="text-sm md:text-base leading-snug tracking-wide text-gray-900 text-opacity-100">
              I earned my Bachelor&apos;s in Computer Science from the
              University of Braunschweig in 2023, focusing on backend projects
              and developing strong skills in programming, algorithms, and
              software development. My thesis on natural language processing
              deepened my Python and TensorFlow expertise, enhancing my data
              analysis and machine learning abilities. I am highly motivated to
              continuously improve my skills and stay updated with the latest
              industry trends and technologies.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-full md:w-5/12"></div>
          <div className="z-20 flex items-center mb-3 order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-blue-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
            <h3 className="font-bold text-white text-lg md:text-xl">
              Working Student
            </h3>
            <h3 className="font-bold text-white text-md md:text-lg">
              Bundesdruckerei-Gruppe
            </h3>
            <h3 className="font-bold text-white text-md md:text-lg">
              Dec 2022 - Sept 2023
            </h3>
            <p className="text-sm md:text-base font-medium leading-snug tracking-wide text-white text-opacity-100">
              I worked as a UI Front-End Developer at Bundesdruckerei for nine
              months, developing web components and designing user-friendly,
              visually appealing interfaces. Collaborating with
              interdisciplinary teams, I ensured smooth integration and enhanced
              user experience. During my time there, I advanced my skills in
              HTML, CSS, JavaScript, and modern front-end frameworks like Vue
              and React.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between md:flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-full md:w-5/12"></div>
          <div className="z-20 flex items-center order-1 mb-3 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">3</h1>
          </div>
          <div className="order-1 bg-blue-400 rounded-lg shadow-2xl w-full md:w-5/12 px-6 py-4">
            <h3 className="font-bold text-white text-lg md:text-xl">
              Full Stack Developer
            </h3>
            <h3 className="font-bold text-white text-md md:text-lg">
              Wunschlachen
            </h3>
            <h3 className="font-bold text-white text-md md:text-lg">
              November 2023 - Present
            </h3>
            <p className="text-sm md:text-base font-medium leading-snug tracking-wide text-white text-opacity-100">
              As a full-stack developer at Wunschlachen GmbH Dental Practice, I
              specialize in front-end development and UI design. I convert
              designs into dynamic web applications, integrating advanced
              technologies like machine learning and AI for document processing.
              I lead the development of web apps that streamline patient data
              management and support dental procedures. My expertise includes
              Vue.js, Nuxt, Directus, and GraphQL for efficient data management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
