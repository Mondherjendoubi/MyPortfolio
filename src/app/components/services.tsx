const Services = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:p-10">
      <div className="flex flex-row justify-center">
        <div className="font-extrabold text-blue-700 text-5xl md:text-7xl">
          Skills
        </div>
        <div className="font-extrabold text-blue-700 text-5xl md:text-7xl">
          .
        </div>
      </div>

      <div className="flex justify-center">
        <p className="w-full md:w-3/5 text-center text-base md:text-lg">
          These are the services in which I have gained the most experience
          throughout my educational and professional career.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="flex flex-1 flex-col p-6 md:p-10 shadow-2xl rounded-xl gap-2">
          <div className="h-60 w-full">
            <img
              className="h-full w-full object-cover rounded-xl shadow-xl"
              src="https://i.pinimg.com/564x/44/2d/dd/442ddd7ae0fdaa7ff065e384cd84bed5.jpg"
              alt="Front end"
            />
          </div>
          <div className="font-bold mt-4 text-lg md:text-xl">Front end</div>
          <div className="w-full text-sm md:text-base">
            I have experience working with various JavaScript frameworks,
            including React, Vue, Next.js, and Nuxt.js. Additionally, I am
            proficient in TypeScript, JavaScript, HTML, CSS, SCSS, and Sass. My
            expertise spans developing dynamic and responsive web applications
            using these technologies, allowing me to build efficient, scalable,
            and high-performing solutions.
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-10 shadow-2xl rounded-xl gap-2">
          <div className="h-60 w-full">
            <img
              className="h-full w-full object-cover rounded-xl shadow-xl"
              src="https://i.pinimg.com/564x/24/5f/d6/245fd6696fcd9d8bdea4c74e0aca7e53.jpg"
              alt="Back end"
            />
          </div>
          <div className="font-bold mt-4 text-lg md:text-xl">Back end</div>
          <div className="w-full text-sm md:text-base">
            I have experience working with backend technologies such as Node.js
            and Java Spring Boot. In these roles, I developed API endpoints and
            utilized Swagger UI to document and provide these endpoints to the
            front end. This allowed for seamless integration and communication
            between the backend and frontend components, ensuring efficient and
            reliable application performance. Additionally, my work involved
            optimizing backend processes and enhancing the overall scalability
            and maintainability of the applications.
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-10 shadow-2xl rounded-xl gap-2">
          <div className="h-60 w-full">
            <img
              className="h-full w-full object-cover rounded-xl shadow-xl"
              src="https://i.pinimg.com/236x/d6/7a/91/d67a91bfe9061f7698b5133bdec193ca.jpg"
              alt="AI and Machine Learning"
            />
          </div>
          <div className="font-bold mt-4 text-lg md:text-xl">
            AI and Machine Learning
          </div>
          <div className="w-full text-sm md:text-base">
            I have experience working with AI and machine learning, particularly
            in natural language processing (NLP). I completed my thesis on NLP,
            focusing on specific tasks like information extraction.
            Additionally, I have implemented various models in real web
            applications, such as using Whisper for transcription.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
