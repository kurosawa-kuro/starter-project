import Link from 'next/link'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'

interface SearchModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export default function SearchModal({
  isOpen,
  setIsOpen
}: SearchModalProps) {
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" onClose={() => setIsOpen(false)}>
        <TransitionChild
          as="div"
          className="fixed inset-0 bg-gray-900/30 z-50 transition-opacity"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />
        <TransitionChild
          as="div"
          className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"
          enter="transition ease-in-out duration-200"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <DialogPanel className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700/60 overflow-auto max-w-2xl w-full max-h-full rounded-lg shadow-lg">
            {/* Search form */}
            <form className="border-b border-gray-200 dark:border-gray-700/60">
              <div className="relative">
                <label htmlFor="search-modal" className="sr-only">Search</label>
                <input id="search-modal" className="w-full dark:text-gray-300 bg-white dark:bg-gray-800 border-0 focus:ring-transparent placeholder-gray-400 dark:placeholder-gray-500 appearance-none py-3 pl-10 pr-4" type="search" placeholder="Search Anything…" />
                <div className="absolute inset-0 flex items-center justify-center right-auto group">
                  <svg className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-4 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </div>
              </div>
            </form>
            <div className="py-4 px-2">
              {/* Recent searches */}
              <div className="mb-3 last:mb-0">
                <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-2">Recent searches</div>
                <ul className="text-sm">
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Form Builder - 23 hours on-demand video</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Access Mosaic on mobile and TV</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Product Update - Q4 2024</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Master Digital Marketing Strategy course</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Dedicated forms for products</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                      </svg>
                      <span>Product Update - Q4 2024</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Recent pages */}
              <div className="mb-3 last:mb-0">
                <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-2">Recent pages</div>
                <ul className="text-sm">
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                      </svg>
                      <span><span className="font-medium">Messages</span> - <span className="text-gray-600 dark:text-gray-400">Conversation / … / Mike Mills</span></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg"
                      href="#0"
                    >
                      <svg className="fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 group-focus-within:text-white group-focus-within:text-opacity-50 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                      </svg>
                      <span><span className="font-medium">Messages</span> - <span className="text-gray-600 dark:text-gray-400">Conversation / … / Eva Patrick</span></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  )
}
