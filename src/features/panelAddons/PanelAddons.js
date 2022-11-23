import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {setStaffAddons, setMiAddons, setInfoAddons} from './panel-addons-slice'
import './panelAddons.css'

const PanelAddons = () => {
    const dispatch = useDispatch()
    const [hover, setHover] = useState(false)

    return(
        <div className='addon-panel'
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
        >
            <div className='addon-btn staff-btn' onClick={() => {dispatch(setStaffAddons())}} >{hover && '!'}</div>
            <div className='addon-btn mi-btn' onClick={() => {dispatch(setMiAddons())}} >{hover && <div className='mi'/>}</div>
            <div className='addon-btn info-btn' onClick={() => {dispatch(setInfoAddons())}} >{hover && 'i'}</div>
        </div>
    )
}

export default PanelAddons
