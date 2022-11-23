import {useSelector} from 'react-redux'
import {selectPanelAddonsInfo} from '../../features/panelAddons/panel-addons-slice'
import './addons.css'
import StaffSummary from '../../features/staff/StaffSummary'
import PanelAddons from '../../features/panelAddons/PanelAddons'
import Info from '../info/Info'
import Mi from '../mi/Mi'

const Addons = ({setAlert}) => {
    const {start, staff, mi, info} = useSelector(store => selectPanelAddonsInfo(store).data)
    const heightWrap = staff ? '223px' : mi ? '400px' : '500px'
    return(
        <div className="addons" style={{height: heightWrap}}>
            <StaffSummary setAlert={setAlert} start={start} staff={staff}/>
            <Info start={start} info={info}/>
            <Mi start={start} mi={mi}/>
            <PanelAddons />
        </div>
    )
}

export default Addons
