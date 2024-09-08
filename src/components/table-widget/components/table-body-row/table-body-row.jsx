import React, { useEffect, useState } from 'react'
import { useOpenController } from '../../hooks/useOpenController';
import DotsIcon from '../../icons/dotsIcon';
import DocsIcon from '../../icons/docsIcon';
import PlainIcon from '../../icons/plainIcon';
import PlayIcon from '../../icons/playIcon';
import AlertIcon from '../../icons/alertIcon';
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '../../../../shared/components/dropdown';
import Truncate from '../../../../shared/components/truncate';
import { colorKeysConfig, dropDownItemsConfig, metadataFieldLabelsConfig } from '../../config/table.config';
import ArrowRightIcon from '../../icons/arrowRightIcon';
import TableBodyRowTenantDetails from '../table-body-row-tenant-details';
import ActionLog from '../action-log';
import { formatUnixDate } from '../../../../utils/functions';

const TableBodyRow = ({ rowData }) => {
  const [isOpen, toggle] = useOpenController(false);
  const [metaDataKeys, setMetaDataKeys] = useState([]);
  const [actionLogs, setActionLogs] = useState([]);

  useEffect(() => {
    getMetaDataKeys();
    getActionLogDetails();
  }, []);

  const getMetaDataKeys = () => {
    const keys = Object.keys(rowData.meta_data).filter(k => k !== 'action_logs');
    setMetaDataKeys(keys);
  }

  const getActionLogDetails = () => {
    const logs = rowData.meta_data.action_logs;
    const sortedActions = logs.sort((a, b) => b.date - a.date);
    setActionLogs(sortedActions.map(action => (
      {
        title: action.title,
        date: formatUnixDate(action.date)
      }
    )))
  }

  // Handler for stopping click propagation in the last <td>
  const handleActionClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <tr key={rowData.units} className='cursor-pointer' onClick={toggle}>
        <td className={`relative p-4 text-sm font-medium border-b border-gray-100 truncate`}>
          <Truncate width={'200px'}>{rowData.property}</Truncate>
        </td>
        <td className={`p-4 text-sm border-b border-gray-100`}>{rowData.units}</td>
        <td className={`p-4 text-sm border-b border-gray-100`}>{rowData.tenant_name}</td>
        <td className={`p-4 text-sm border-b border-gray-100`}>{rowData.move_out}</td>
        <td className={`p-4 text-sm border-b border-gray-100 capitalize ${colorKeysConfig[rowData.scan_status.toLowerCase()]}`}>
          <div className='flex gap-x-1 items-center'>
            <span>{rowData.scan_status_with_date}</span>
            <AlertIcon />
          </div>
        </td>
        <td className={`p-4 text-sm border-b border-gray-100`} onClick={handleActionClick}>
          <div className='flex gap-x-4'>
            <span className='cursor-pointer'><PlayIcon /></span>
            <span className='cursor-pointer'><DocsIcon /></span>
            <span className='cursor-pointer'><PlainIcon /></span>
            <Dropdown>
              <DropdownButton aria-label="More options">
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

      {/* expanded details here */}
      {isOpen && <tr className='bg-gray-100'>
        {/* property */}
        <td></td>
        {/* units */}
        <td className='py-3 align-top'>
          <div className='mb-2'>
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500">
              Connected to PMS
            </span>
          </div>
          <div className="mb-2">
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-500">
              Occupied
            </span>
          </div>

          <h4>Reference</h4>
          <p className='text-gray-500 mb-3'>21312321</p>
          <a href='/' className="whitespace-nowrap inline-flex items-center gap-x-1 font-medium text-indigo-600 hover:text-indigo-800">
            View unit
            <ArrowRightIcon />
          </a>
        </td>
        {/* tenant name */}
        <td className='py-3 align-top'>
          {metaDataKeys.map(key => (
            <TableBodyRowTenantDetails key={key} header={metadataFieldLabelsConfig[key]} value={rowData?.meta_data[key]} />
          ))}
        </td>
        {/* move out */}
        <td></td>
        {/* scan status */}
        <td></td>
        {/* actions */}
        <td className='py-3 align-top'>
          <ActionLog actions={actionLogs} />
        </td>
      </tr>
      }
    </>
  )
}

export default TableBodyRow