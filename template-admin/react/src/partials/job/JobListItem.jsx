import React from 'react';
import { Link } from 'react-router-dom';

function JobListItem(props) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-xs rounded-xl px-5 py-4`}
    >
      <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2">
        {/* Left side */}
        <div className="flex items-start space-x-3 md:space-x-4">
          <div className="w-9 h-9 shrink-0 mt-1">
            <img className="w-9 h-9 rounded-full" src={props.image} width="36" height="36" alt={props.company} />
          </div>
          <div>
            <Link className="inline-flex font-semibold text-gray-800 dark:text-gray-100" to={props.link}>
              {props.role}
            </Link>
            <div className="text-sm">{props.details}</div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center space-x-4 pl-10 md:pl-0">
          <div className="text-sm text-gray-500 dark:text-gray-400 italic whitespace-nowrap">{props.date}</div>
          {props.type && (
            <div
              className={`text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${
                props.type === 'Featured'
                  ? 'bg-yellow-500/20 text-yellow-700'
                  : 'bg-green-500/20 text-green-700'
              }`}
            >
              {props.type}
            </div>
          )}
          <button className={`${props.fav ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-500'}`}>
            <span className="sr-only">Bookmark</span>
            <svg className="w-3 h-4 fill-current" width="12" height="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 0C.9 0 0 .9 0 2v14l6-3 6 3V2c0-1.1-.9-2-2-2H2Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobListItem;