/* eslint-disable react/no-unescaped-entities */
import CarouselTech from "../components/CarouselTech";
function About() {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl lg:text-center lg:mt-8 tracking-tighter text-logo-blue text-left my-4  mx-2 font-semibold animate-slideinright delay-1s hidden-before-animation">
        About Me
      </h1>

      <div className="flex flex-row gap-2 mx-2 animate-slideinright delay-1s hidden-before-animation lg:w-2/4 lg:mx-auto">
        <div className="text-left lg:text-center lg:text-lg">
          <p className="mb-2">
            My name is Diogo Moreira, I'm Portuguese and I was born in Porto. I
            have worked the past 4 years in sales. I fell in love with coding,
            so I enrolled in the Ironhack Web Development Bootcamp after
            self-learning for a year.
          </p>
          <p className="mb-2">
            As a junior full-stack developer with sales background, I blend
            strong communication and teamwork skills with a passion for
            fast-paced learning in tech.{" "}
          </p>
          <p className="">
            Eager to apply my unique perspective on user experience to develop
            impactful web solutions. My goal is to continue growing as a
            professional and help my future company hit their targets.
          </p>
        </div>
      </div>

      <div className="mt-14 mb-16 animate-slideinup delay-2s hidden-before-animation">
        <h2 className="text-center text-2xl font-bold  text-logo-blue tracking-tighter mb-1 lg:text-4xl">
          Technologies
        </h2>
        <CarouselTech></CarouselTech>
      </div>
    </div>
  );
}

export default About;
