import React from 'react'

const TableBodyRowTenantDetails = ({ header, value }) => {
  return (
    <div className='mb-2'>
      <h4 className='font-semibold'>{header}</h4>
      <h6 className='text-gray-500'>{value}</h6>
    </div>
  )
}

export default TableBodyRowTenantDetails