import React, { FC } from 'react';
import { PageMetaResponse } from '@backendTypes';

interface Props {
  meta: PageMetaResponse;
  setPage: (page: number) => void;
}
export const Page: FC<Props> = ({ meta, setPage }) => {
  const goToPrevPage = () => {
    if (meta.page !== 1) {
      setPage(meta.page - 1);
    }
  };

  const goToNextPage = () => {
    if (meta.page !== meta.pageCount) {
      setPage(meta.page + 1);
    }
  };

  return (
    <div className="flex justify-end items-center w-1/12 h-4 my-4 mr-3">
      <button
        type="button"
        className={
          meta.hasPreviousPage
            ? 'px-2 py-2 mr-2 text-sm cursor-pointer' +
              ' bg-available-students-details-font-color transition duration-250 hover:bg-dropdown-svg-and-search-placeholder-color'
            : 'px-2 py-2 mr-2 bg-available-students-details-font-color  disable bg-right-arrow-svg-color disable-opacity-0.5' +
              ' cursor-auto'
        }
        onClick={goToPrevPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        className={
          meta.hasNextPage
            ? 'px-2 py-2 mr-2 text-sm cursor-pointer' +
              ' bg-available-students-details-font-color transition duration-250 hover:bg-dropdown-svg-and-search-placeholder-color'
            : 'px-2 py-2 mr-2 bg-available-students-details-font-color disable bg-right-arrow-svg-color disable' +
              ' opacity-0.2 cursor-auto'
        }
        onClick={goToNextPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};
