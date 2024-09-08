import BuildingIcon from '../icons/buildingIcon';
import UploadIcon from '../icons/uploadIcon';
import EyeIcon from '../icons/eyeIcon';
import styles from '../table-widget.module.css'

export const dropDownItemsConfig = [
  {
    label: 'View baseline',
    icon: <EyeIcon />
  },
  {
    label: 'upload move-out scan',
    icon: <UploadIcon />
  },
  {
    label: 'View unit',
    icon: <BuildingIcon />
  }
]

export const headerConfig = [
  {
    key: crypto.randomUUID(),
    value: 'Property'
  },
  {
    key: crypto.randomUUID(),
    value: 'Units'
  },
  {
    key: crypto.randomUUID(),
    value: 'Tenant Name'
  },
  {
    key: crypto.randomUUID(),
    value: 'Move Out'
  },
  {
    key: crypto.randomUUID(),
    value: 'Scan Status'
  },
  {
    key: crypto.randomUUID(),
    value: 'Actions'
  }
]

export const colorKeysConfig = {
  'done': 'text-green-500',
  'missing': 'text-red-500',
  'failed': styles.textOrange
}

export const metadataFieldLabelsConfig = {
  'name': 'Name',
  'email': 'Email',
  'mobile': 'Mobile',
  'move_in_date': 'Move-In Date',
  'move_out_date': 'Move-Out Date',
  'security_reposit': 'Security Deposit',
  'notice': 'Notice',
}