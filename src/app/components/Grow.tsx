import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faPaintBrush,
  faBullhorn,
  faLaptopCode,
  faMicrophone,
  faLock,
  faHeadphones,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function GrowSection() {
  return (
    <div className="bg-white text-white py-20 px-10">
      {/* Reason Choose Us Section */}
      <div className="container mx-auto text-center mt-20">
        <p className="text-gray-400 mb-4">• Reason to Choose Us •</p>
        <h2 className="text-3xl font-bold mb-10">
          We Will Help You Keep Growing
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={faLock}
                className="text-4xl text-yellow-500"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Keep You Safe</h3>
            <p>
              We will make sure you will never get fooled by the client who is
              looking for your amazing skill. After offering good work, you will
              receive money 💰
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={faHeadphones}
                className="text-4xl text-yellow-500"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Ready to Serve</h3>
            <p>
              We are ready to serve you anytime and anywhere. We make sure you
              will have a great experience with us and stay with us longer 🎧
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg border-t-4 border-yellow-500">
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-4xl text-yellow-500"
              />
            </div>
            <h3 className="font-bold text-lg mb-2">Easier to Find</h3>
            <p>
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
