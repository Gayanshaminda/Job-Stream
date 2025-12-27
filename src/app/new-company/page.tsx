import { createCompany } from "@/app/actions/workosActions";
import { getUser } from "@workos-inc/authkit-nextjs";

export default async function NewCompanyPage() {
  const { user } = await getUser();
  async function handleNewCompanyFormSubmit(data: FormData) {
    "use server";
    if (user) {
      await createCompany(data.get("newCompanyName") as string, user.id);
    }
  }

  if (!user) {
    ("Login to use this page");
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        <div className="bg-gray-100 w-full h-[calc(100vh-150px)] p-10 md:p-16 rounded-b-[60px] relative z-10"></div>

        <div className="bg-blue-500 text-white w-full h-[calc(100vh-220px)] p-10 md:p-16 rounded-b-[60px] relative z-20 -mt-[600px] ">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            {/* Left Section - Text */}
            <div className="flex-1 flex flex-col justify-center ml-8">
              <h1 className="text-5xl font-bold mb-6">
                Register your company here
              </h1>
              <p className="text-gray-200 mb-6">
                To create a job listing, your first need to register a company.
                Registration establishes your company as a legitimate entity,
                enabling you to manage job postings effectively. Once
                registered, you can publish job listings to attract potential
                candidates.
              </p>

              <form action={handleNewCompanyFormSubmit as unknown as string} className="flex mt-6">
                <div className="relative w-full">
                  <input
                    name="newCompanyName"
                    className="p-3 border border-gray-400 text-black w-full pr-16 focus:outline-none focus:border-gray-400"
                    type="text"
                    placeholder="Company name"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full bg-red-500 text-white px-6 flex items-center justify-center"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>

            {/* Image Container */}
            <div className="flex-1 mt-10 md:mt-0 md:ml-10 flex justify-center relative bottom-[-65px]">
              <div className="bg-white bg-opacity-50 rounded-3xl p-4 shadow-lg relative z-10">
                {/* Image */}
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735141090/Jobstream/xceqe7zwdu5ukmhgr9kq.jpg"
                    alt="Business Man on Phone"
                    className="w-[500px] h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
