import { RiMovie2Line, RiInstagramLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <ul className="flex gap-2 items-center justify-between mb-0">
            <li>
              <a  href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
                <RiMovie2Line className="text-3xl text-white" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Cinema
                </span>
              </a>
            </li>
            <li className="flex justify-end space-x-2">
              <a href="#" className="">
                <RiInstagramLine className="text-3xl" />
              </a>
              <a href="#" className="">
                <RiGithubFill className="text-3xl" />
              </a>
              <a href="#" className="">
                <RiLinkedinBoxFill className="text-3xl" />
              </a>
            </li>
          </ul>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              JV749™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
