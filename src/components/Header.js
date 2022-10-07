import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const links = [
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Students",
    to: "/students",
  },
  {
    name: "Schools",
    to: "/schools",
  },
  {
    name: "Immigration",
    to: "/immigration",
  },
  {
    name: "Information",
    to: "/",
  },
  {
    name: "Blog",
    to: "/",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const fixedNavbar = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {links.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.to}
                        className="-m-2 block p-2 font-semibold border-b text-[#1B75BB]"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white py-3.5 shadow-sm transition-all">
        <nav
          aria-label="Top"
          className={`${
            navbar
              ? "fixed top-0 z-20 px-16 py-3.5 w-full shadow-2xl drop-shadow-2xl bg-white"
              : "mx-10 px-4 sm:px-6 lg:px-8"
          } `}
        >
          <div className="flex h-16 items-center">
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to="/">
                <span className="sr-only">Chalo Overseas</span>
                <img
                  className="h-12 w-auto"
                  src={require("../assets/logo.png")}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-8">
                {links.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    className="font-semibold text-[#1B75BB] text-lg hover:opacity-70"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <a
                href="https://booknow.chalooverseas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a69de] px-4 py-2.5 rounded-full lg:font-semibold lg:text-lg text-white flex items-center lg:ml-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-1.5"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
                Free Counselling
              </a>
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
