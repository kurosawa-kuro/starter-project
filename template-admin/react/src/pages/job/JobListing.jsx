import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import JobSidebar from '../../partials/job/JobSidebar';
import DropdownSort from '../../components/DropdownSort';
import JobListItem from '../../partials/job/JobListItem';
import PaginationNumeric from '../../components/PaginationNumeric';

import Image01 from '../../images/company-icon-05.svg';
import Image02 from '../../images/company-icon-06.svg';
import Image03 from '../../images/company-icon-03.svg';
import Image04 from '../../images/company-icon-07.svg';
import Image05 from '../../images/company-icon-08.svg';
import Image06 from '../../images/company-icon-01.svg';
import Image07 from '../../images/company-icon-02.svg';

function JobListing() {

  const items = [
    {
      id: 0,
      image: Image01,
      company: 'Company 01',
      role: 'Senior Web App Designer',
      link: '/job/job-post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 4',
      type: 'Featured',
      fav: false,
    },
    {
      id: 1,
      image: Image01,
      company: 'Company 02',
      role: 'Senior Full Stack Engineer',
      link: '/job/job-post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 7',
      type: 'New',
      fav: true,
    },
    {
      id: 2,
      image: Image02,
      company: 'Company 03',
      role: 'Ruby on Rails Engineer',
      link: '/job/job-post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 7',
      type: 'New',
      fav: false,
    },
    {
      id: 3,
      image: Image03,
      company: 'Company 04',
      role: 'Senior Software Engineer Backend',
      link: '/job/job-post',
      details: 'Full-time / Remote / Anywhere',
      date: 'Jan 7',
      type: 'New',
      fav: false,
    },
    {
      id: 4,
      image: Image04,
      company: 'Company 05',
      role: 'React.js Software Developer',
      link: '/job/job-post',
      details: 'Full-time / Remote / London, UK',
      date: 'Jan 6',
      type: 'New',
      fav: true,
    },
    {
      id: 5,
      image: Image05,
      company: 'Company 06',
      role: 'Senior Full Stack Rails Developer',
      link: '/job/job-post',
      details: 'Part-time / Remote / Milan, IT',
      date: 'Jan 6',
      type: 'New',
      fav: false,
    },
    {
      id: 6,
      image: Image06,
      company: 'Company 07',
      role: 'Principal Software Engineer',
      link: '/job/job-post',
      details: 'Freelance / Remote / London, UK',
      date: 'Jan 6',
      type: 'New',
      fav: false,
    },
    {
      id: 7,
      image: Image04,
      company: 'Company 08',
      role: 'Contract React Native Engineer',
      link: '/job/job-post',
      details: 'Contract / Remote / Miami, FL',
      date: 'Jan 6',
      type: 'New',
      fav: false,
    },
    {
      id: 8,
      image: Image05,
      company: 'Company 09',
      role: 'Senior Client Engineer (React & React Native)',
      link: '/job/job-post',
      details: 'Full-time / Remote / Lincoln, NE',
      date: 'Jan 5',
      type: 'New',
      fav: false,
    },
    {
      id: 9,
      image: Image07,
      company: 'Company 10',
      role: 'QA Automation Engineer',
      link: '/job/job-post',
      details: 'Contract / Remote / Anywhere',
      date: 'Jan 5',
      type: 'New',
      fav: false,
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Search For Jobs</h1>
              </div>

              {/* Post a job button */}
              <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Post A Job</button>

            </div>

            {/* Page content */}
            <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">

              {/* Sidebar */}
              <JobSidebar />

              {/* Content */}
              <div className='w-full'>

                {/* Search form */}
                <div className="mb-5">
                  <form className="relative">
                    <label htmlFor="job-search" className="sr-only">Search</label>
                    <input id="job-search" className="form-input w-full pl-9 bg-white dark:bg-gray-800" type="search" placeholder="Search job title or keyword…" />
                    <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                      <svg className="shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-3 mr-2" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                        <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                      </svg>
                    </button>
                  </form>
                </div>

                {/* Jobs header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400 italic">Showing 289 Jobs</div>
                  {/* Sort */}
                  <div className="text-sm">
                    <span>Sort by </span>
                    <DropdownSort align="right" />
                  </div>
                </div>

                {/* Jobs list */}
                <div className='space-y-2'>
                  {items.map((item) => {
                    return (
                      <JobListItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        role={item.role}
                        link={item.link}
                        details={item.details}
                        date={item.date}
                        type={item.type}
                        fav={item.fav}
                      />
                    );
                  })}
                </div>

                {/* Pagination */}
                <div className="mt-6">
                  <PaginationNumeric />
                </div>

              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default JobListing;