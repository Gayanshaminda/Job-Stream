import {
  faHeadphones,
  faLock,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Choose() {
  return (
    <div className="bg-darkBlue text-white py-20 px-10">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mb-4">• Reason to Choose Us •</p>
        <h2 className="text-3xl font-bold mb-10">
          We Will Help You Keep Growing
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 max-w-xs mx-auto rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faLock} className=" text-yellow-500 text-6xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Keep You Safe</h3>
            <p className="text-center">
              We will make sure you will never get fooled by the client who is
              looking for your amazing skill. After offering good work, you will
              receive money 💰
            </p>
          </div>

          <div className="bg-white text-black p-6 max-w-xs mx-auto rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={faHeadphones}
                className=" text-yellow-500 text-6xl"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Ready to Serve</h3>
            <p className="text-center">
              We are ready to serve you anytime and anywhere. We make sure you
              will have a great experience with us and stay with us longer 🎧
            </p>
          </div>

          <div className="bg-white text-black p-6 max-w-xs mx-auto rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon icon={faSearch} className=" text-yellow-500 text-6xl" />
            </div>
            <h3 className="font-bold text-lg mb-2">Easier to Find</h3>
            <p className="text-center">
              Your name and amazing skill you have will be appeared on Google
              Search more easily, it will make you have more chance to get a job
              👨‍💼
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
