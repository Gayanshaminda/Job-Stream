import Image from "next/image";

export default function ConnectPage() {
  return (
    <section className="bg-white py-20">
      <div className="w-full flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-10 px-16">
          <h1
            className=" text-[46px] sm:text-[54px] lg:text-6xl font-bold mb-6  "
            style={{ lineHeight: "1.2" }}
          >
            We Help You Connect With The{" "}
            <span className="text-blue-700">Organisation</span>
          </h1>
          <p
            className="text-gray-600 mb-6 text-lg"
            style={{ lineHeight: "1.6" }}
          >
            We help bridge the gap between job seekers and organizations,
            simplifying your job search and ensuring you find opportunities that
            match your skills and interests. Our platform connects you with the
            right companies, making the process of finding and applying for jobs
            straightforward and effective.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-full flex items-center mt-6 ml-9">
              Get Started
              <span className="ml-2">➔</span>
            </button>
          </div>
        </div>

        <div className="max-w-lg ml-32">
          <Image
            src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735138588/Jobstream/lyoepp6clyoxownbxuk6.png"
            alt="Illustration"
            width={1100}
            height={1100}
          />
        </div>
      </div>
    </section>
  );
}
