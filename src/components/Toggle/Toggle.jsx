import { useState } from 'react'
import './Toggle.css'

export const Toggle = ({ toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label className='toggleLabel'>
            <input className='toggleInput' type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className='toggleSpan' />
        </label>
    )
}