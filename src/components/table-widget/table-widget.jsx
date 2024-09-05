import React, { useEffect, useState } from 'react'
import * as MOCK_DATA from './mocks/TABLE_MOCK_DATA.json'
import { formatUnixDate, truncateString } from '../../utils/functions';
import styles from './table-widget.module.css'

const TableWidget = () => {
  const [data, setData] = useState([]);

  const colors_key = {
    'done': 'text-green-500',
    'missing': 'text-red-500',
    'failed': styles.textOrange
  }

  useEffect(() => {
    setData(mapData());
  }, [])

  const mapData = () => {
    return MOCK_DATA.default.map(element => ({
      property: element.property,
      units: element.units,
      tenant_name: element.tenant_name,
      move_out: formatUnixDate(element.move_out),
      scan_status_with_date: `${element.scan_status} (${formatUnixDate(element.last_scan_date)})`,
      scan_status: element.scan_status
    }))
  }

  return (
    <div className='border border-gray-200 rounded'>
      <div className="flow-root overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left overflow-x-auto">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                  Property
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Units
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
                >
                  Tenant Name
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Move Out
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Scan Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr key={data.units}>
                  <td className={`relative py-4 pr-3 text-sm font-medium ${styles.tableCell} ${styles.truncate}`}>
                    {data.property}
                    <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                  </td>
                  <td className={`px-3 py-4 text-sm sm:table-cell ${styles.tableCell}`}>{data.units}</td>
                  <td className={`px-3 py-4 text-sm md:table-cell ${styles.tableCell}`}>{data.tenant_name}</td>
                  <td className={`px-3 py-4 text-sm md:table-cell ${styles.tableCell}`}>{data.move_out}</td>
                  <td className={`px-3 py-4 text-sm md:table-cell ${colors_key[data.scan_status.toLowerCase()]}`}>{data.scan_status_with_date}</td>
                  <td className={`px-3 py-4 text-sm md:table-cell ${styles.tableCell}`}>
                    {/* TODO - add icons here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableWidget