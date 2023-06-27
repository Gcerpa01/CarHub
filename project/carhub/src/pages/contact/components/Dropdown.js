import { CDropdown } from '@coreui/react';
import { CDropdownMenu } from '@coreui/react';
import { CDropdownHeader } from '@coreui/react';
import { CDropdownItem } from '@coreui/react';
import { CDropdownItemPlain } from '@coreui/react';
import { CDropdownToggle } from '@coreui/react';

export default function Dropdown({dropdownText}) {
    
  function changeText({inputText}){
    dropdownText = inputText
  }
    return (
    <CDropdown>
        <CDropdownToggle color="warning">{dropdownText}</CDropdownToggle>
        <CDropdownMenu>
            <CDropdownItem onClick={changeText("Anthony")}>Anthony</CDropdownItem>
            <CDropdownItem onClick={changeText("Gerardo")}>Gerardo</CDropdownItem>
            <CDropdownItem onClick={changeText("Jacob")}>Jacob</CDropdownItem>
            <CDropdownItem onClick={changeText("Jarrod")}>Jarrod</CDropdownItem>
            <CDropdownItem onClick={changeText("Leo")}>Leo</CDropdownItem>
        </CDropdownMenu>
    </CDropdown>  )
}

Dropdown.defaultProps = {
    dropdownText: "Who would you like to contact?",
}