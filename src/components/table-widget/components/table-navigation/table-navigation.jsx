import React from 'react'
import './table-navigation.module.css'
import NavigationRightIcon from '../../icons/navigationRightIcon'
import NavigationLeftIcon from '../../icons/navigationLeftIcon'
const TableNavigation = ({ page, setPage, offset, limit }) => {
  return (
    <nav className="flex p-2 justify-between items-center" aria-label="Pagination">
      <button onClick={() => setPage(prev => prev - 1 < offset ? prev : prev - 1)} disabled={page === offset} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" aria-label="Previous">
        <NavigationLeftIcon />
        <span aria-hidden="true" className="hidden sm:block">Previous</span>
      </button>
      <div className="flex items-center gap-x-1">
        <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:focus:bg-white/10">{page}</span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">of</span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">{limit}</span>
      </div>
      <button onClick={() => setPage(prev => prev + 1 > limit ? prev : prev + 1)} disabled={page === limit} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <span aria-hidden="true" className="hidden sm:block">Next</span>
        <NavigationRightIcon />
      </button>
    </nav>
  )
}

export default TableNavigation