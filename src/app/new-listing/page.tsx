"use server";
import { createCompany } from "@/app/actions/workosActions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import Link from "next/link";
import Image from "next/image";

export default async function NewListingPage() {
  const workos = new WorkOS(process.env.WORKOS_API_KEY);
  const { user } = await getUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-5 py-5 rounded relative mb-4 mt-36"
          role="alert"
        >
          <span className="block sm:inline text-xl">
            {" "}
            You need to be logged in to post a job.
          </span>
        </div>
      </div>
    );
  }

  const organizationMemberships =
    await workos.userManagement.listOrganizationMemberships({
      userId: user.id,
    });

  const activeOrganizationMemberships = organizationMemberships.data.filter(
    (om) => om.status === "active"
  );
  const organizationsNames: { [key: string]: string } = {};

  for (const activeMembership of activeOrganizationMemberships) {
    const organization = await workos.organizations.getOrganization(
      activeMembership.organizationId
    );
    organizationsNames[organization.id] = organization.name;
  }

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        {/* Left side: Company List */}
        <div className="w-full md:w-1/2 ml-28">
  <h2 className="text-3xl mt-6 font-semibold">Your Registered Companies</h2>
  <p className="text-gray-500 text-lg mb-8 mt-6">
    Select a company to create a job ad for
  </p>

  {/* Grid container for company names  */}
  <div
   className="grid grid-flow-col auto-rows-max gap-y-3 gap-x-0"
   style={{ gridTemplateRows: "repeat(5, auto)" }}
  >
    {Object.keys(organizationsNames).map((orgId) => (
      <Link
        key={orgId}
        href={"/new-listing/" + orgId}
        className="block py-3 px-5 bg-purple-100 rounded-lg shadow-md hover:bg-purple-200 transition-transform duration-300 
        text-gray-800 hover:text-purple-700 hover:scale-105"
        style={{ width: "200px" }}
      >
        {organizationsNames[orgId]}
      </Link>
    ))}
  </div>

  {organizationMemberships.data.length === 0 && (
    <div className="border border-blue-200 bg-blue-50 p-4 rounded-md mt-4">
      No companies found assigned to your user
    </div>
  )}

  <Link
    className="inline-flex gap-2 items-center bg-blue-700 text-white px-4 py-3 rounded-md mt-12 transition-transform duration-300
    hover:text-white hover:scale-105"
    href={"/new-company"}
  >
    Register new company
  </Link>
</div>




        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center -ml-20 mt-10">
          <Image
            src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735139969/Jobstream/bvtu0qetvhves4nkldu7.jpg"
            alt="Illustration related to job listings"
            width={1000}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
