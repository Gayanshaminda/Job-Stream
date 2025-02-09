import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import Jobs from "@/app/components/Jobs";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  return (
    <header className="-mt-4">
      <div className="container flex items-center justify-between mx-auto my-4">
        <Link href={"/"}>
          <img
            src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735138351/Jobstream/eh0tanmfzuyry2ckuax1.png"
            alt="Logo"
            className="h-24 w-auto px-24"
          />
        </Link>
        <nav className="flex items-center gap-14 text-lg -ml-24">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-600  hover:underline"
          >
            Home
          </Link>
          <Link
            href="/jobs"
            className="text-gray-800 hover:text-blue-600 hover:underline"
          >
            Find Jobs
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-blue-600 hover:underline"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-gray-800 hover:text-blue-600 hover:underline"
          >
            About
          </Link>
        </nav>
        
        <nav className="flex items-center gap-6 mr-28">
        {!user && (
          <Link
            className="rounded-md bg-blue-600 py-1 px-2 sm:py-2 sm:px-4  text-white  transform transition-transform duration-300 hover:scale-105"
            href={signInUrl}
          >
            Login
          </Link>
        )}
        {user && (
          <form
          onSubmit={async (e) => {
            e.preventDefault(); // Prevent page reload
            "use server";
            await signOut();
          }}
        >
        
            <button
              type="submit"
              className="rounded-md bg-blue-600 py-1 px-2 sm:py-2 sm:px-4  text-white  transform transition-transform duration-300 hover:scale-105"
            >
              Logout
            </button>
          </form>
        )}
        <Link
          className="flex items-center  rounded-md bg-blue-600 py-2 px-4 sm:py-2 sm:px-4 text-white transform transition-transform duration-300 hover:scale-105"
          href={"/new-listing"}
        >
          <FontAwesomeIcon className="h-4 mr-2" icon={faBriefcase} />
          Post a job
        </Link>
        </nav>
      </div>
    </header>
  );
}
