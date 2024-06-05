import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  const github = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
      className="w-6 h-6 fill-logo-blue"
    >
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>
  );

  const linkedin = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      className="w-6 h-6 fill-logo-blue"
    >
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
    </svg>
  );

  const email = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 fill-logo-blue"
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );

  const phone = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 fill-logo-blue"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const openPhone = () => {
    setPhoneOpen(!phoneOpen);
  };

  const openEmail = () => {
    setEmailOpen(!emailOpen);
  };

  return (
    <footer className="bg-logo-gold h-24 flex justify-around items-center z-10 ">
      <div className="flex flex-col gap-2">
        <div className="flex items-center relative">
          <p className="cursor-pointer flex items-center" onClick={openPhone}>
            <span
              className={`transition-transform duration-500 ${
                phoneOpen ? "transform translate-x-[-50px]" : ""
              }`}
            >
              {phone}
            </span>
            <span
              className={`absolute bg-logo-blue text-color-ivory px-1 border border-logo-blue rounded shadow-lg left-0 whitespace-nowrap transition-all duration-500 ease-out ${
                phoneOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-x-[25px]"
              }`}
            >
              <a href="tel:+351 915 985 739" className="text-sm">
                +351 915 985 739
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center relative">
          <p className="cursor-pointer flex items-center" onClick={openEmail}>
            <span
              className={`transition-transform duration-500 ${
                emailOpen ? "transform translate-x-[-50px]" : ""
              }`}
            >
              {email}
            </span>
            <span
              className={`absolute bg-logo-blue text-color-ivory px-1 border border-logo-blue rounded shadow-lg left-0 whitespace-nowrap transition-all duration-500 ease-out ${
                emailOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-x-[25px]"
              }`}
            >
              <a className="text-sm" href="mailto:dmoreira1999@hotmail.com">
                dmoreira1999@hotmail.com
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Link to="https://www.linkedin.com/in/diogo-moreira99/" target="_blank">
          {linkedin}
        </Link>

        <Link to="https://github.com/moreira8125" target="_blank">
          {github}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
