import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import ModalBasic from "../../components/ModalBasic";
import ModalCookies from "../../components/ModalCookies";
import ModalBlank from "../../components/ModalBlank";
import ModalAction from "../../components/ModalAction";
import ModalSearch from "../../components/ModalSearch";

import AnnouncementIcon from "../../images/announcement-icon.svg";
import ModalImage from "../../images/modal-image.jpg";

function ModalPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [scrollbarModalOpen, setScrollbarModalOpen] = useState(false);
  const [cookiesModalOpen, setCookiesModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [dangerModalOpen, setDangerModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [announcementModalOpen, setAnnouncementModalOpen] = useState(false);
  const [integrationModalOpen, setIntegrationModalOpen] = useState(false);
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} variant="v2" />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-900">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} variant="v3" />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Modal</h1>
            </div>

            <div>
              {/* Components */}
              <div className="space-y-8 mt-8">
                {/* Basic */}
                <div>
                  <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Basic</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    {/* Basic Modal */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="basic-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setBasicModalOpen(true);
                        }}
                      >
                        Basic Modal
                      </button>
                      <ModalBasic id="basic-modal" modalOpen={basicModalOpen} setModalOpen={setBasicModalOpen} title="Basic Modal">
                        {/* Modal content */}
                        <div className="px-5 pt-4 pb-1">
                          <div className="text-sm">
                            <div className="font-medium text-gray-800 dark:text-gray-100 mb-2">Let’s Talk Paragraph</div>
                            <div className="space-y-2">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                              </p>
                              <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button
                              className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBasicModalOpen(false);
                              }}
                            >
                              Close
                            </button>
                            <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">I Understand</button>
                          </div>
                        </div>
                      </ModalBasic>
                      {/* End */}
                    </div>

                    {/* Modal w/ Scroll Bar */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="scrollbar-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setScrollbarModalOpen(true);
                        }}
                      >
                        Modal w/ Scroll Bar
                      </button>
                      <ModalBasic
                        id="scrollbar-modal"
                        modalOpen={scrollbarModalOpen}
                        setModalOpen={setScrollbarModalOpen}
                        title="Modal w/ Scroll Bar"
                      >
                        {/* Modal content */}
                        <div className="px-5 py-4">
                          <div className="text-sm">
                            <div className="font-medium text-gray-800 dark:text-gray-100 mb-2">Let’s Talk Paragraph</div>
                            <div className="space-y-2">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                              </p>
                              <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                              <p>
                                Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu
                                vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu
                                turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo
                                integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                              </p>
                              <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                              <p>
                                Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu
                                vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu
                                turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo
                                integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="sticky bottom-0 px-5 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700/60">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button
                              className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setScrollbarModalOpen(false);
                              }}
                            >
                              Close
                            </button>
                            <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">I Understand</button>
                          </div>
                        </div>
                      </ModalBasic>
                      {/* End */}
                    </div>

                    {/* Cookies */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="cookies-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCookiesModalOpen(true);
                        }}
                      >
                        Cookies
                      </button>
                      <ModalCookies id="cookies-modal" modalOpen={cookiesModalOpen} setModalOpen={setCookiesModalOpen} title="We use cookies 🍪">
                        {/* Modal content */}
                        <div className="text-sm mb-5">
                          <div className="space-y-2">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.
                            </p>
                            <p>
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="flex flex-wrap justify-end space-x-2">
                          <button
                            className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCookiesModalOpen(false);
                            }}
                          >
                            Decline
                          </button>
                          <button
                            className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCookiesModalOpen(false);
                            }}
                          >
                            I Accept
                          </button>
                        </div>
                      </ModalCookies>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Feedback */}
                <div>
                  <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Feedback</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    {/* Success Modal */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="success-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSuccessModalOpen(true);
                        }}
                      >
                        Success Modal
                      </button>
                      <ModalBlank id="success-modal" modalOpen={successModalOpen} setModalOpen={setSuccessModalOpen}>
                        <div className="p-5 flex space-x-4">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-100 dark:bg-gray-700">
                            <svg className="shrink-0 fill-current text-green-500" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z" />
                            </svg>
                          </div>
                          {/* Content */}
                          <div>
                            {/* Modal header */}
                            <div className="mb-2">
                              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Upgrade your Subscription?</div>
                            </div>
                            {/* Modal content */}
                            <div className="text-sm mb-10">
                              <div className="space-y-2">
                                <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                              </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSuccessModalOpen(false);
                                }}
                              >
                                Cancel
                              </button>
                              <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Yes, Upgrade it</button>
                            </div>
                          </div>
                        </div>
                      </ModalBlank>
                      {/* End */}
                    </div>

                    {/* Danger Modal */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="danger-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDangerModalOpen(true);
                        }}
                      >
                        Danger Modal
                      </button>
                      <ModalBlank id="danger-modal" modalOpen={dangerModalOpen} setModalOpen={setDangerModalOpen}>
                        <div className="p-5 flex space-x-4">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-100 dark:bg-gray-700">
                            <svg className="shrink-0 fill-current text-red-500" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                            </svg>
                          </div>
                          {/* Content */}
                          <div>
                            {/* Modal header */}
                            <div className="mb-2">
                              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Delete 1 customer?</div>
                            </div>
                            {/* Modal content */}
                            <div className="text-sm mb-10">
                              <div className="space-y-2">
                                <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                              </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setDangerModalOpen(false);
                                }}
                              >
                                Cancel
                              </button>
                              <button className="btn-sm bg-red-500 hover:bg-red-600 text-white">Yes, Delete it</button>
                            </div>
                          </div>
                        </div>
                      </ModalBlank>
                      {/* End */}
                    </div>

                    {/* Info Modal */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="info-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setInfoModalOpen(true);
                        }}
                      >
                        Info Modal
                      </button>
                      <ModalBlank id="info-modal" modalOpen={infoModalOpen} setModalOpen={setInfoModalOpen}>
                        <div className="p-5 flex space-x-4">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-100 dark:bg-gray-700">
                            <svg className="shrink-0 fill-current text-violet-500" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                            </svg>
                          </div>
                          {/* Content */}
                          <div>
                            {/* Modal header */}
                            <div className="mb-2">
                              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Create new Event?</div>
                            </div>
                            {/* Modal content */}
                            <div className="text-sm mb-10">
                              <div className="space-y-2">
                                <p>Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.</p>
                              </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex flex-wrap justify-end space-x-2">
                              <button
                                className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setInfoModalOpen(false);
                                }}
                              >
                                Cancel
                              </button>
                              <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Yes, Create it</button>
                            </div>
                          </div>
                        </div>
                      </ModalBlank>
                      {/* End */}
                    </div>
                  </div>
                </div>

                {/* Product */}
                <div>
                  <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Product</h2>
                  <div className="flex flex-wrap items-center -m-1.5">
                    {/* Send Feedback */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="feedback-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFeedbackModalOpen(true);
                        }}
                      >
                        Send Feedback
                      </button>
                      <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Send Feedback">
                        {/* Modal content */}
                        <div className="px-5 py-4">
                          <div className="text-sm">
                            <div className="font-medium text-gray-800 dark:text-gray-100 mb-3">Let us know what you think 🙌</div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="name">
                                Name <span className="text-red-500">*</span>
                              </label>
                              <input id="name" className="form-input w-full px-2 py-1" type="text" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="email">
                                Email <span className="text-red-500">*</span>
                              </label>
                              <input id="email" className="form-input w-full px-2 py-1" type="email" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-1" htmlFor="feedback">
                                Message <span className="text-red-500">*</span>
                              </label>
                              <textarea id="feedback" className="form-textarea w-full px-2 py-1" rows="4" required></textarea>
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4 border-t border-gray-200 dark:border-gray-700/60">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button
                              className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFeedbackModalOpen(false);
                              }}
                            >
                              Cancel
                            </button>
                            <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Send</button>
                          </div>
                        </div>
                      </ModalBasic>
                      {/* End */}
                    </div>

                    {/* Newsletter */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="newsletter-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setNewsletterModalOpen(true);
                        }}
                      >
                        Newsletter
                      </button>
                      <ModalAction id="newsletter-modal" modalOpen={newsletterModalOpen} setModalOpen={setNewsletterModalOpen}>
                        {/* Modal header */}
                        <div className="mb-2 text-center">
                          {/* Icon */}
                          <div className="mb-3">
                            <svg className="inline-flex w-12 h-12 rounded-full shrink-0 fill-current" viewBox="0 0 48 48">
                              <rect className="text-gray-100 dark:text-gray-700" width="48" height="48" rx="24" />
                              <path className="text-violet-300" d="M19 16h7a8 8 0 110 16h-7V16z" />
                              <path className="text-violet-500" d="M26 24l-7-6v5h-8v2h8v5z" />
                            </svg>
                          </div>
                          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Subscribe to the Newsletter!</div>
                        </div>
                        {/* Modal content */}
                        <div className="text-center">
                          <div className="text-sm mb-6">
                            Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.
                          </div>
                          {/* Submit form */}
                          <form className="flex max-w-sm m-auto">
                            <div className="grow mr-2">
                              <label htmlFor="subscribe-form" className="sr-only">
                                Leave your Email
                              </label>
                              <input id="subscribe-form" className="form-input w-full px-2 py-1" type="email" />
                            </div>
                            <button type="submit" className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white whitespace-nowrap">
                              Subscribe
                            </button>
                          </form>
                          <div className="text-xs text-gray-500 italic mt-3">I respect your privacy. No spam. Unsubscribe at any time!</div>
                        </div>
                      </ModalAction>
                      {/* End */}
                    </div>

                    {/* Announcement */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="announcement-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAnnouncementModalOpen(true);
                        }}
                      >
                        Announcement
                      </button>
                      <ModalAction id="announcement-modal" modalOpen={announcementModalOpen} setModalOpen={setAnnouncementModalOpen}>
                        {/* Modal header */}
                        <div className="mb-2 text-center">
                          {/* Icon */}
                          <div className="inline-flex rounded-full bg-linear-to-b from-gray-100 to-gray-200 dark:from-gray-700/30 dark:to-gray-700 mb-2">
                            <img src={AnnouncementIcon} width="80" height="80" alt="Announcement" />
                          </div>
                          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">You Unlocked Level 2!</div>
                        </div>
                        {/* Modal content */}
                        <div className="text-center">
                          <div className="text-sm mb-5">
                            Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.
                          </div>
                          {/* CTAs */}
                          <div className="space-y-3">
                            <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Claim your Reward -&gt;</button>
                            <div>
                              <a
                                className="font-medium text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                                href="#0"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setAnnouncementModalOpen(true);
                                }}
                              >
                                Not Now!
                              </a>
                            </div>
                          </div>
                        </div>
                      </ModalAction>
                      {/* End */}
                    </div>

                    {/* Integration */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="integration-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIntegrationModalOpen(true);
                        }}
                      >
                        Integration
                      </button>
                      <ModalAction id="integration-modal" modalOpen={integrationModalOpen} setModalOpen={setIntegrationModalOpen}>
                        {/* Modal header */}
                        <div className="mb-5 text-center">
                          {/* Icons */}
                          <div className="inline-flex items-center justify-center space-x-3 mb-4">
                            {/* Mosaic logo */}
                            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700">
                              <svg className="fill-violet-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z" />
                              </svg>
                            </div>
                            {/* Arrows */}
                            <svg className="fill-current text-gray-400" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M5 3V0L0 4l5 4V5h8a1 1 0 000-2H5zM11 11H3a1 1 0 000 2h8v3l5-4-5-4v3z" />
                            </svg>
                            {/* Cruip logo */}
                            <svg width="48" height="48" viewBox="0 0 48 48">
                              <rect className="fill-gray-100 dark:fill-violet-500/30" width="48" height="48" rx="24" />
                              <path
                                d="M34 24c0-1.38-1.126-2.5-2.515-2.5A2.507 2.507 0 0028.97 24c0 1.38 1.126 2.5 2.515 2.5A2.507 2.507 0 0034 24"
                                fill="#4BD37D"
                              />
                              <path
                                d="M31.112 31.07a10.024 10.024 0 01-4.582 2.615c-.8.205-1.64.315-2.506.315a10.007 10.007 0 01-7.553-3.426A9.943 9.943 0 0114 24c0-2.517.932-4.816 2.471-6.574A10.007 10.007 0 0124.024 14a10.024 10.024 0 017.088 2.93l-3.544 3.535A5.003 5.003 0 0024.024 19a5.006 5.006 0 00-5.012 5l.001.13A5.007 5.007 0 0024.024 29c1.384 0 2.637-.56 3.544-1.465l3.544 3.536z"
                                fill="#8470FF"
                              />
                            </svg>
                          </div>
                          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Connect Mosaic with your Cruip account</div>
                        </div>
                        {/* Modal content */}
                        <div className="text-sm mb-5">
                          <div className="font-medium text-gray-800 dark:text-gray-100 mb-3">Mosaic would like to:</div>
                          <ul className="space-y-2 mb-5">
                            <li className="flex items-center">
                              <svg className="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                              </svg>
                              <div>Lorem ipsum dolor sit amet</div>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                              </svg>
                              <div>Semper eget duis at tellus at urna</div>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                              </svg>
                              <div>Lorem ipsum dolor sit amet</div>
                            </li>
                            <li className="flex items-center">
                              <svg className="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                              </svg>
                              <div>Suspendisse faucibus interdum</div>
                            </li>
                          </ul>
                          <div className="text-xs text-gray-500">
                            By clicking on Allow access, you authorize Mosaic to use your information in accordance with its{" "}
                            <a className="text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" href="#0">
                              Privacy Policy
                            </a>
                            . You can stop it at any time on the integrations page of your Mosaic account.
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="flex flex-wrap justify-end space-x-2">
                          <button
                            className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIntegrationModalOpen(false);
                            }}
                          >
                            Cancel
                          </button>
                          <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Allow Access</button>
                        </div>
                      </ModalAction>
                      {/* End */}
                    </div>

                    {/* What's New */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="news-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setNewsModalOpen(true);
                        }}
                      >
                        What's New
                      </button>
                      <ModalBlank id="news-modal" modalOpen={newsModalOpen} setModalOpen={setNewsModalOpen}>
                        <div className="relative">
                          <img className="w-full" src={ModalImage} width="460" height="200" alt="New on Mosaic" />
                          {/* Close button */}
                          <button
                            className="absolute top-0 right-0 mt-5 mr-5 text-gray-50 hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              setNewsModalOpen(false);
                            }}
                          >
                            <div className="sr-only">Close</div>
                            <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16">
                              <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                            </svg>
                          </button>
                        </div>
                        <div className="p-5">
                          {/* Modal header */}
                          <div className="mb-2">
                            <div className="mb-3">
                              <div className="btn-xs text-xs border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 px-2.5 py-1 rounded-full shadow-none">
                                New on Mosaic
                              </div>
                            </div>
                            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Help your team work faster with X 🏃‍♂️</div>
                          </div>
                          {/* Modal content */}
                          <div className="text-sm mb-5">
                            <div className="space-y-2">
                              <p>
                                You might not be aware of this fact, but every frame, digital video, canvas, responsive design, and image often has a
                                rectangular shape that is exceptionally precise in proportion (or ratio).
                              </p>
                              <p>
                                The ratio has to be well-defined to make shapes fit into different and distinct mediums, such as computer, movies,
                                television and camera screens.
                              </p>
                            </div>
                          </div>
                          {/* Modal footer */}
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button
                              className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                setNewsModalOpen(false);
                              }}
                            >
                              Cool, I Got it
                            </button>
                          </div>
                        </div>
                      </ModalBlank>
                      {/* End */}
                    </div>

                    {/* Change your Plan */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="feedback-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlanModalOpen(true);
                        }}
                      >
                        Change your Plan
                      </button>
                      <ModalBasic id="feedback-modal" modalOpen={planModalOpen} setModalOpen={setPlanModalOpen} title="Change your Plan">
                        {/* Modal content */}
                        <div className="px-5 pt-4 pb-1">
                          <div className="text-sm">
                            <div className="mb-4">Upgrade or downgrade your plan:</div>
                            {/* Options */}
                            <ul className="space-y-2 mb-4">
                              <li>
                                <button className="w-full h-full text-left py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border-2 border-violet-400 dark:border-violet-500 shadow-xs transition">
                                  <div className="flex items-center">
                                    <div className="w-4 h-4 border-4 bg-white border-violet-500 rounded-full mr-3"></div>
                                    <div className="grow">
                                      <div className="flex flex-wrap items-center justify-between mb-0.5">
                                        <span className="font-medium text-gray-800 dark:text-gray-100">
                                          Mosaic Light <span className="text-xs italic text-gray-500 align-top">Current Plan</span>
                                        </span>
                                        <span className="text-gray-600">
                                          <span className="font-medium text-green-600">$39.00</span>/mo
                                        </span>
                                      </div>
                                      <div className="text-sm">2 MB · 1 member · 500 block limits</div>
                                    </div>
                                  </div>
                                </button>
                              </li>
                              <li>
                                <button className="w-full h-full text-left py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-xs transition">
                                  <div className="flex items-center">
                                    <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-full mr-3"></div>
                                    <div className="grow">
                                      <div className="flex flex-wrap items-center justify-between mb-0.5">
                                        <span className="font-semibold text-gray-800 dark:text-gray-100">
                                          Mosaic Basic <span className="text-xs italic text-violet-500 align-top">Best Value</span>
                                        </span>
                                        <span className="text-gray-600">
                                          <span className="font-medium text-green-600">$59.00</span>/mo
                                        </span>
                                      </div>
                                      <div className="text-sm">5 MB · 2 members · 1000 block limits</div>
                                    </div>
                                  </div>
                                </button>
                              </li>
                              <li>
                                <button className="w-full h-full text-left py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-xs transition">
                                  <div className="flex items-center">
                                    <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-full mr-3"></div>
                                    <div className="grow">
                                      <div className="flex flex-wrap items-center justify-between mb-0.5">
                                        <span className="font-semibold text-gray-800 dark:text-gray-100">Mosaic Plus</span>
                                        <span className="text-gray-600">
                                          <span className="font-medium text-green-600">$79.00</span>/mo
                                        </span>
                                      </div>
                                      <div className="text-sm">10 MB · 5 members · Unlimited block limits</div>
                                    </div>
                                  </div>
                                </button>
                              </li>
                            </ul>
                            <div className="text-xs text-gray-500">
                              Your workspace’s Mosaic Light Plan is set to $39 per month and will renew on August 9, 2024.
                            </div>
                          </div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button
                              className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlanModalOpen(false);
                              }}
                            >
                              Cancel
                            </button>
                            <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Change Plan</button>
                          </div>
                        </div>
                      </ModalBasic>
                      {/* End */}
                    </div>

                    {/* Quick Find */}
                    <div className="m-1.5">
                      {/* Start */}
                      <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        aria-controls="quick-find-modal"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchModalOpen(true);
                        }}
                      >
                        Quick Find
                      </button>
                      <ModalSearch id="quick-find-modal" searchId="quick-find" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
                      {/* End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ModalPage;
