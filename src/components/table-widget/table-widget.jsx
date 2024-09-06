import React, { useEffect, useState } from 'react'
import * as MOCK_DATA from './mocks/TABLE_MOCK_DATA.json'
import { capitalizeStr, formatUnixDate } from '../../utils/functions';
import styles from './table-widget.module.css'
import DotsIcon from './icons/dotsIcon';
import DocsIcon from './icons/docsIcon';
import PlainIcon from './icons/plainIcon';
import PlayIcon from './icons/playIcon';
import AlertIcon from './icons/alertIcon';
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '../../shared/components/dropdown';
import { dropDownItemsConfig } from './config/table.config';

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
      scan_status_with_date: `${capitalizeStr(element.scan_status)} (${formatUnixDate(element.last_scan_date)})`,
      scan_status: element.scan_status
    }))
  }

  return (
    <div className='border border-gray-200 rounded'>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block min-w-full align-middle">
          <table className={styles.tableWrap}>
            <thead className="bg-white">
              <tr>
                <th scope="col" className="relative isolate text-left text-sm font-semibold text-gray-900 border-b border-gray-100 p-3">
                  Property
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-semibold text-gray-900 border-b border-gray-100 p-3 sm:table-cell"
                >
                  Units
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-semibold text-gray-900 border-b border-gray-100 p-3 md:table-cell"
                >
                  Tenant Name
                </th>
                <th scope="col" className="text-left text-sm font-semibold text-gray-900 border-b border-gray-100 p-3">
                  Move Out
                </th>
                <th scope="col" className="text-left text-sm font-semibold text-gray-900 border-b border-gray-100 p-3">
                  Scan Status
                </th>
                <th scope="col" className="text-left text-sm font-semibold text-gray-900 border-b border-gray-100 p-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => {
                return (
                  <tr key={data.units}>
                    <td className={`relative p-4 text-sm font-medium border-b border-gray-100`}>
                      {data.property}
                    </td>
                    <td className={`p-4 text-sm border-b border-gray-100`}>{data.units}</td>
                    <td className={`p-4 text-sm border-b border-gray-100`}>{data.tenant_name}</td>
                    <td className={`p-4 text-sm border-b border-gray-100`}>{data.move_out}</td>
                    <td className={`p-4 text-sm border-b border-gray-100 flex ${colors_key[data.scan_status.toLowerCase()]}`}>
                      <span className='pr-1'>{data.scan_status_with_date}</span>
                      <AlertIcon />
                    </td>
                    <td className={`p-4 text-sm border-b border-gray-100`}>
                      <div className='flex gap-x-4'>
                        <span className='cursor-pointer'><PlayIcon /></span>
                        <span className='cursor-pointer'><DocsIcon /></span>
                        <span className='cursor-pointer'><PlainIcon /></span>
                        <Dropdown>
                          <DropdownButton plain aria-label="More options">
                            <DotsIcon />
                          </DropdownButton>
                          <DropdownMenu>
                            {dropDownItemsConfig.map(item => (
                              <DropdownItem key={item.label} styleClass='flex items-center gap-x-1'>
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                              </DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableWidget