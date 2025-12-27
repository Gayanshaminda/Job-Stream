export default function Hero() {
  return (
    <section className="bg-white py-10 lg:-mt-10">
      <div className="w-full px-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text and Vertical Line */}
        <div className="lg:w-1/2 flex flex-col items-start mt-8 relative z-20">
          <h1
            className="text-[46px] md:text-7xl font-bold text-gray-800 -mt-14  "
            style={{ lineHeight: "1" }}
          >
            Find Your <span className="text-blue-600">Dream Job</span> Here Easy
            And Fast
          </h1>
          <p
            className="mt-6 text-gray-500 max-w- text-[16px] md:text-lg "
            style={{ lineHeight: "1.5" }}
          >
            Job Stream is a user-friendly job search site that helps you find
            job opportunities quickly and easily. It offers personalized
            recommendations and easy-to-use search filters to connect you with
            the right job or talent.
          </p>

          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-md">
              Learn more
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-12 md:mt-0 flex justify-center relative">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="circle">
              {/* Trust Badge */}
              <div className="hidden sm:flex flex-col justify-center mt-4 -ml-72 mr-36">
                <div className="bg-gray-50 py-4 px-5 rounded-md text-center max-w-xs mx-auto">
                  <p className="text-gray-700 text-sm">
                    Trusted by over 1000+
                    <br />
                    companies
                  </p>

                  {/* Company Logos */}
                  <div className="flex justify-center space-x-0 mt-2">
                    <img
                      src="https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
                      alt="Company 1"
                      className="w-6 h-6 rounded-full"
                    />
                    <img
                      src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
                      alt="Company 1"
                      className="w-6 h-6 rounded-full"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                      alt="Company 1"
                      className="w-6 h-6 rounded-full"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s"
                      alt="Company 1"
                      className="w-6 h-6 rounded-full"
                    />

                    <img
                      src="https://m.media-amazon.com/images/I/31t0BMIY7SL.jpg"
                      alt="Company 2"
                      className="w-6 h-6 rounded-full"
                    />
                    <img
                      src="https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png"
                      alt="Company 3"
                      className="w-6 h-6 rounded-full"
                    />

                    <img
                      src="https://c0.klipartz.com/pngpicture/817/886/gratis-png-microsoft-logo-icon-microsoft-icon.png"
                      alt="Company 2"
                      className="w-6 h-6 rounded-full"
                    />

                    <img
                      src="https://seekvectors.com/files/download/Amazon-Logo-07.png"
                      alt="Company 1"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735138237/Jobstream/crhyh0pnslkmg0t013ry.webp"
            alt="Person in pink hoodie"
            style={{ width: "700px", height: "auto" }}
            className="rounded-lg relative z-10 ml-10 -mt-4"
          />
        </div>
      </div>
    </section>
  );
}
