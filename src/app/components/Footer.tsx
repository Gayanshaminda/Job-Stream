import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-[#162035] text-white py-8 px-10 flex flex-col">

      <div className="w-full flex mdlg:hidden flex-row gap-10 items-center justify-center" >
          <h2 className="text-2xl font-bold ">JOB STREAM</h2>
          <div className="flex space-x-4 ">
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      <div className="w-full grid grid-cols-2 mdlg:grid-cols-5 gap-5 mt-6">
        <div className="w-full hidden mdlg:flex mdlg:flex-col  " >
          <h2 className="text-2xl font-bold mb-4">JOB STREAM</h2>
          <div className="flex space-x-4 mt-6 ml-4">
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4 ">Categories</h3>
          <ul className="space-y-2 text-gray-400  ">
            <li>iOS Developers</li>
            <li>Design & Development</li>
            <li>Beauty Care/Health</li>
            <li>Customer Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4 ">Resources</h3>
          <ul className="space-y-2 text-gray-400 ">
            <li>Browse Jobs</li>
            <li>Career Advice</li>
            <li>Company Profile</li>
            <li>Accessibility Center</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Invite a Friend</li>
            <li>Affiliates</li>
            <li>Podcast</li>
            <li>Forum</li>
          </ul>
        </div>

        {/* Contact */}
        <div className=" ">
          <h3 className="text-lg font-semibold mb-4 ">Contact</h3>

          <p className="mt-2 text-gray-400  ">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="lg" /> Galle
          </p>
          <p className="mt-2 text-gray-400  ">
            <FontAwesomeIcon icon={faPhone} className="lg" /> +94-778965485
          </p>
          <p className="mt-2 text-gray-400  ">
            <FontAwesomeIcon icon={faEnvelope} className="lg" />{" "}
            jobstream@gmail.com
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-12 text-center text-gray-400">
        <p>
          <span className="text-[#ff5a00] text-s">JOB STREAM</span> &copy; 2024
          - All rights reserved Reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-gray-200">
            FAQ
          </a>
          <a href="#" className="hover:text-gray-200">
            Terms of Use
          </a>
          <a href="#" className="hover:text-gray-200">
            Privacy Center
          </a>
          <a href="#" className="hover:text-gray-200">
            Security Center
          </a>
        </div>
      </div>
    </footer>
  );
}
