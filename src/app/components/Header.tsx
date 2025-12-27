import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSignInUrl, getUser } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import Jobs from "@/app/components/Jobs";
import { handleSignOut } from "@/app/actions/authActions";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  
  return (
    <header className="lg:-mt-4 overflow-visible relative z-50">
      {/* Mobile/Tablet layout */}
      <div className="w-full py-2 lg:hidden overflow-visible bg-white">
        {/* First row: Logo and buttons */}
        <div className="flex items-center justify-between mb-0 px-5">
          <Link href={"/"}>
            <img
              src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735138351/Jobstream/eh0tanmfzuyry2ckuax1.png"
              alt="Logo"
              className="h-16 sm:h-20 w-auto"
            />
          </Link>
          
          <nav className="flex items-center gap-2 sm:gap-4">
            {!user && (
              <Link
                className="rounded-md bg-blue-600 py-1 px-2 sm:py-2 sm:px-4 text-white text-sm sm:text-base transform transition-transform duration-300 hover:scale-105"
                href={signInUrl}
              >
                Login
              </Link>
            )}
            {user && (
              <form action={handleSignOut as unknown as string}>
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 py-1 px-2 sm:py-2 sm:px-4 text-white text-sm sm:text-base transform transition-transform duration-300 hover:scale-105"
                >
                  Logout
                </button>
              </form>
            )}
            <Link
              className="flex items-center rounded-md bg-blue-600 py-1 px-2 sm:py-2 sm:px-4 text-white text-sm sm:text-base transform transition-transform duration-300 hover:scale-105"
              href={"/new-listing"}
            >
              <FontAwesomeIcon className="h-3 sm:h-4 mr-1 sm:mr-2" icon={faBriefcase} />
              <span className="hidden xs:inline">Post a job</span>
              <span className="xs:hidden">Post</span>
            </Link>
          </nav>
        </div>

        {/* Second row: Navigation links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[16px] sm:text-[16px] px-4">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-600 hover:underline"
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
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex items-center justify-between w-full my-5 xl:my-0 xl:mt-3 px-[20px]">
        <Link href={"/"}>
          <img
            src="https://res.cloudinary.com/dfxvo7zy3/image/upload/v1735138351/Jobstream/eh0tanmfzuyry2ckuax1.png"
            alt="Logo"
            className="h-24 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-14 text-lg">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-600 hover:underline"
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
        
        <nav className="flex items-center gap-6">
          {!user && (
            <Link
              className="rounded-md bg-blue-600 py-1 px-2 sm:py-2 sm:px-4 text-white transform transition-transform duration-300 hover:scale-105"
              href={signInUrl}
            >
              Login
            </Link>
          )}
          {user && (
            <form action={handleSignOut as unknown as string}>
              <button
                type="submit"
                className="rounded-md bg-blue-600 py-1 px-2 sm:py-2 sm:px-4 text-white transform transition-transform duration-300 hover:scale-105"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            className="flex items-center rounded-md bg-blue-600 py-2 px-4 sm:py-2 sm:px-4 text-white transform transition-transform duration-300 hover:scale-105"
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
