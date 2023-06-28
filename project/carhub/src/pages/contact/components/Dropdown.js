import { CDropdown } from '@coreui/react';
import { CDropdownMenu } from '@coreui/react';
import { CDropdownHeader } from '@coreui/react';
import { CDropdownItem } from '@coreui/react';
import { CDropdownItemPlain } from '@coreui/react';
import { CDropdownToggle } from '@coreui/react';
import { PropTypes } from 'react';

export default function Dropdown({dropdownItems, dropdownText, changeDropdownText}) {

    return (
    <CDropdown>
        <CDropdownToggle color="warning">{dropdownText}</CDropdownToggle>
        <CDropdownMenu>
            {dropdownItems.map((dropdownItem)=>
            (<CDropdownItem 
            key={dropdownItem.id} 
            onClick={()=>changeDropdownText(dropdownItem.name)}>
                {dropdownItem.name}
            </CDropdownItem>))}
        </CDropdownMenu>
    </CDropdown>  )
}
