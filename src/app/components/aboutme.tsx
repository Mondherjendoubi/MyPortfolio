const Services = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center p-4 md:mx-20 my-10">
      <div className="flex flex-col w-full md:w-1/2 items-center gap-4 mb-10 md:mb-0">
        <div className="flex flex-row justify-center md:justify-start">
          <div className="font-extrabold text-5xl md:text-7xl">About me</div>
          <div className="font-extrabold text-blue-700 text-5xl md:text-7xl">
            .
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-sm md:text-base leading-snug tracking-wide text-gray-900 text-opacity-100">
            I&apos;m Mondher Jandoubi, a 25-year-old with a budding career in
            Computer Science. I graduated with a Bachelor&apos;s degree in
            Computer Science from the Technical University of Braunschweig. My
            enthusiasm for learning and coding knows no bounds, and I treat it
            as both a profession and a hobby. In addition to my tech interests,
            I love staying active, exploring Berlin, and meeting new people. I
            relocated to Berlin six months ago to embark on my first
            professional role.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/3 p-4 gap-4">
        {[
          { skill: "Javascript", level: "80%" },
          { skill: "Typescript", level: "70%" },
          { skill: "Vue", level: "90%" },
          { skill: "React", level: "70%" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex font-black text-base md:text-xl justify-between flex-row">
              <div>{item.skill}</div>
              <div>{item.level}</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5"
                style={{ width: item.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
