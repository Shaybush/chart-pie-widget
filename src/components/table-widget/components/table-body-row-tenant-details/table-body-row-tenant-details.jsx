import React from 'react'

const TableBodyRowTenantDetails = ({ header, value }) => {
  return (
    <div className='mb-2'>
      <h5 className='font-semibold'>{header}</h5>
      <p className='text-gray-500'>{value}</p>
    </div>
  )
}

export default TableBodyRowTenantDetails