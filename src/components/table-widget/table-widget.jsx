import React, { useEffect, useState } from 'react'
import * as MOCK_DATA from './mocks/TABLE_MOCK_DATA.json'
import { formatUnixDate } from '../../utils/functions';
import styles from './table-widget.module.css'
import { headerConfig } from './config/table.config';
import TableBodyRow from './components/table-body-row';

const TableWidget = () => {
  const [data, setData] = useState([]);

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
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block min-w-full align-middle">
          <table className={styles.tableWrap}>
            <thead className="bg-white">
              <tr>
                {headerConfig.map(header => (
                  <th key={header.key} scope="col" className="relative isolate text-left text-sm font-semibold text-gray-900 border-b border-gray-100 p-3">
                    {header.value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((rowData) => (
                <TableBodyRow key={rowData.units} rowData={rowData} />
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default TableWidget