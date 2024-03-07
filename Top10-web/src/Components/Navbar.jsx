import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const products = [
  { name: "Insurance Companies", href: "/insurance-company" },
  { name: "IT Companies", href: "/it-company" },
  { name: "Food delivery", href: "" },
  { name: "Property and estate companies", href: "" },
];
const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-bg duration-300 shadow-lg ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex items-center p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className=" flex "></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12  ml-[35%] ">
          <Popover
            className="relative"
            onMouseEnter={() => setPopoverOpen(true)}
            onMouseLeave={() => setPopoverOpen(false)}
          >
            <a href="/expertice">
              <Popover.Button
                className={`flex items-center gap-x-1 text-[18px] text-left font-sans leading-8 font-semibold  ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                } `}
                onMouseEnter={() => setExpertisePopoverOpen(true)}
                onMouseLeave={() => setExpertisePopoverOpen(false)}
              >
                Top 20
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
            </a>

            <Transition
              as={Fragment}
              show={isPopoverOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-72 max-w-md overflow-hidden  bg-white shadow-lg ring-1 ring-gray-900/5 grid ">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50  "
                    >
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="/about"
            className={`text-[18px] text-left font-sans leading-8 font-semibold ${
              isScrolled ? "text-gray-900" : "text-gray-900"
            }`}
          >
           About Us
          </a>
          <a
            href="/contact-us"
            className={`text-[18px] text-left font-sans leading-8 font-semibold ${
              isScrolled ? "text-gray-900" : "text-gray-900"
            }`}
          >
           Contact Us
          </a>
          <a
            href="/advertise-with-us"
            className={`text-[18px] text-left font-sans leading-8 font-semibold ${
              isScrolled ? "text-gray-900" : "text-gray-900"
            }`}
          >
           Advertise With us
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img className="h-8 w-auto" src={logo} alt="" /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 mt-5">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Top 20
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                   About Us
                </a>
                <a
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                 Contact Us
                </a>
                <a
                  href="/advertise-with-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Advertise With us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
