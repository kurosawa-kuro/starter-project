import React from 'react';
import ChannelMenu from '../messages/ChannelMenu';

import UserImage01 from '../../images/user-32-01.jpg';
import UserImage02 from '../../images/user-32-02.jpg';
import UserImage04 from '../../images/user-32-04.jpg';
import UserImage05 from '../../images/user-32-05.jpg';
import UserImage06 from '../../images/user-32-06.jpg';

function InboxSidebar({
  inboxSidebarOpen,
  setInboxSidebarOpen
}) {
  return (
    <div
      id="inbox-sidebar"
      className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out ${
        inboxSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="sticky top-16 bg-white dark:bg-[#151D2C] overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 dark:border-gray-700/60 md:w-[18rem] xl:w-[20rem] h-[calc(100dvh-64px)]">
        {/* #Marketing group */}
        <div>
          {/* Group header */}
          <div className="sticky top-0 z-10">
            <div className="flex items-center bg-white dark:bg-[#151D2C] border-b border-gray-200 dark:border-gray-700/60 px-5 h-16">
              <div className="w-full flex items-center justify-between">
                {/* Channel menu */}
                <ChannelMenu />
                {/* Edit button */}
                <button className="p-1.5 shrink-0 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-xs ml-2">
                  <svg className="fill-current text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Search form */}
            <form className="relative">
              <label htmlFor="inbox-search" className="sr-only">
                Search
              </label>
              <input id="inbox-search" className="form-input w-full pl-9 bg-white dark:bg-gray-800" type="search" placeholder="Search…" />
              <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                <svg
                  className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-3 mr-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </form>
            {/* Tabs */}
            <div className="relative mt-4">
              <div className="absolute bottom-0 w-full h-px bg-gray-200 dark:bg-gray-700/60" aria-hidden="true"></div>
              <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <a className="block pb-3 text-violet-500 whitespace-nowrap border-b-2 border-violet-500" href="#0">
                    Primary
                  </a>
                </li>
                <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <a className="block pb-3 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">
                    Social
                  </a>
                </li>
                <li className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <a className="block pb-3 text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 whitespace-nowrap" href="#0">
                    Promotions
                  </a>
                </li>
              </ul>
            </div>
            {/* Inbox */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">Inbox (44)</div>
              <ul className="mb-6">
                <li className="-mx-2">
                  <button className="flex w-full p-2 rounded-lg bg-linear-to-r from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04] text-left" onClick={() => setInboxSidebarOpen(false)}>
                    <img className="w-8 h-8 rounded-full mr-2" src={UserImage01} width="32" height="32" alt="User 01" />
                    <div className="grow truncate">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="truncate">
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Dominik Lamakani</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">4 Aug</div>
                      </div>
                      <div className="text-xs font-medium text-gray-800 dark:text-gray-100 truncate mb-0.5">Chill your mind with this amazing offer 🎉</div>
                      <div className="text-xs whitespace-normal">Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button className="flex w-full p-2 rounded-sm text-left" onClick={() => setInboxSidebarOpen(false)}>
                    <img className="w-8 h-8 rounded-full mr-2" src={UserImage05} width="32" height="32" alt="User 05" />
                    <div className="grow truncate">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="truncate">
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Simona Lürwer</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">4 Aug</div>
                      </div>
                      <div className="text-xs font-medium text-gray-800 dark:text-gray-100 truncate mb-0.5">🙌 Help us improve Mosaic by giving…</div>
                      <div className="text-xs whitespace-normal">Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button className="flex w-full p-2 rounded-sm text-left" onClick={() => setInboxSidebarOpen(false)}>
                    <img className="w-8 h-8 rounded-full mr-2" src={UserImage06} width="32" height="32" alt="User 05" />
                    <div className="grow truncate">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="truncate">
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Mary Roszczewski</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">1 Aug</div>
                      </div>
                      <div className="text-xs font-medium text-gray-800 dark:text-gray-100 truncate mb-0.5">[Urgent] Changes to links for public…</div>
                      <div className="text-xs whitespace-normal">👋 Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button className="flex w-full p-2 rounded-sm text-left" onClick={() => setInboxSidebarOpen(false)}>
                    <img className="w-8 h-8 rounded-full mr-2" src={UserImage04} width="32" height="32" alt="User 05" />
                    <div className="grow truncate">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="truncate">
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Adrian Przetocki</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">1 Aug</div>
                      </div>
                      <div className="text-xs font-medium text-gray-800 dark:text-gray-100 truncate mb-0.5">🙌 Help us improve Mosaic by giving…</div>
                      <div className="text-xs whitespace-normal">Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                    </div>
                  </button>
                </li>
                <li className="-mx-2">
                  <button className="flex w-full p-2 rounded-sm text-left" onClick={() => setInboxSidebarOpen(false)}>
                    <img className="w-8 h-8 rounded-full mr-2" src={UserImage02} width="32" height="32" alt="User 05" />
                    <div className="grow truncate">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="truncate">
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">Tisha Yanchev</span>
                        </div>
                        <div className="text-xs text-gray-500 font-medium">1 Aug</div>
                      </div>
                      <div className="text-xs font-medium text-gray-800 dark:text-gray-100 truncate mb-0.5">Re: Here’s an extra 25% OFF 🎉</div>
                      <div className="text-xs whitespace-normal">Excepteur sint occaecat cupidatat non proident sunt in culpa qui deserunt…</div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboxSidebar;
