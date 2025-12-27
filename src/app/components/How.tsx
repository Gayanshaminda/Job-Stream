import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faFileAlt,
  faBriefcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-24">How it works ?</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 relative">
          <div className="flex flex-col items-center mt-7">
            <div className="bg-green-500 rounded-full p-9 mb-4 relative">
              <FontAwesomeIcon
                icon={faUser}
                className="text-white text-5xl relative z-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Create Account</h3>
            <p className="text-gray-500 max-w-xs">
              It’s very easy to open an account and start your journey.
            </p>
          </div>

          <svg
            className="absolute hidden md:block -mt-9"
            width="250"
            height="50"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: "50%", left: "25%", transform: "translateY(-50%)" }}
          >
            <path
              d="M1 10 Q 50 0 99 10"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5, 5"
              fill="none"
            />
            <polygon points="99,10 95,5 95,15" fill="black" />
          </svg>

          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full p-10 mb-4 relative">
              <FontAwesomeIcon
                icon={faFileAlt}
                className="text-white text-5xl relative z-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Login to your account</h3>
            <p className="text-gray-500 max-w-xs">Login with your details</p>
          </div>

          <svg
            className="absolute hidden md:block -mt-9"
            width="250"
            height="50"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ top: "50%", right: "25%", transform: "translateY(-50%)" }}
          >
            <path
              d="M1 10 Q 50 0 99 10"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="5, 5"
              fill="none"
            />
            <polygon points="99,10 95,5 95,15" fill="black" />
          </svg>

          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full p-10 mb-4 relative">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-white text-5xl relative z-10"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Apply job or hire</h3>
            <p className="text-gray-500 max-w-xs">
              Apply & get your preferable jobs with all the requirements and get
              it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
