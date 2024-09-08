import React, { useEffect, useState } from 'react'
import * as MOCK_DATA from './mocks/TABLE_MOCK_DATA.json'
import { formatUnixDate } from '../../utils/functions';
import styles from './table-widget.module.css'
import { headerConfig } from './config/table.config';
import TableBodyRow from './components/table-body-row';
import TableNavigation from './components/table-navigation';

const PAGE_SIZE = 2;

const TableWidget = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();

  useEffect(() => {
    setLimit(Math.ceil(MOCK_DATA.default.length / 2));
  }, []);

  useEffect(() => {
    const mappedElements = mapData();
    setData(mappedElements);
  }, [page])

  const mapData = () => {
    const slicedData = paginate(MOCK_DATA.default, PAGE_SIZE, page);

    return slicedData.map(element => ({
      ...element,
      move_out: formatUnixDate(element.move_out),
      scan_status_with_date: `${element.scan_status} (${formatUnixDate(element.last_scan_date)})`,
    }))
  }

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  return (
    <div className='border border-gray-200 rounded'>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className={`inline-block min-w-full align-middle ${styles.wrappedTable}`}>
          <table className={styles.table}>
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
      <TableNavigation page={page} setPage={setPage} offset={1} limit={limit}></TableNavigation>

    </div>
  )
}

export default TableWidget