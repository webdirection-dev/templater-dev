import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectControlInfo} from '../control/control-slice'
import {setSupport, setDev, setNumber, setTitle, setDescription, selectMiInfo} from './mi-slice'
import {setAnimation} from '../panelAddons/panel-addons-slice'
import {useCopyMi} from './use-copy-mi'
import {miDesc, miDescDev, txtConfirm} from '../../static/data/dataMi'

export const useMi = () => {
    const dispatch = useDispatch()
    const {stand, tg, priority} = useSelector(store => selectControlInfo(store).controls)
    const {support, dev, miNumber, title, description} = useSelector(store => selectMiInfo(store).data)
    const {copySummary} = useCopyMi({stand, tg, priority, support, dev, miNumber, title, description})

    const handleChange = (e) => {
        dispatch(setAnimation(false))
        const {name, value} = e.target

        if (name === 'miSupport') dispatch(setSupport(value))
        if (name === 'miNumber' && value.length <= 8) dispatch(setNumber(value))
        if (name === 'miTitle') dispatch(setTitle(value))
        if (name === 'miDescription') dispatch(setDescription(value))

        if (name === 'miDev') {
            if (description.trim() !== miDesc && description.trim() !== miDescDev) {
                if (window.confirm(txtConfirm)) {
                    if (window.confirm('Точно продолжить?!')) dispatch(setDev())
                }
            }
            else dispatch(setDev())
        }
    }

    useEffect(() => {
        if (dev) dispatch(setDescription(miDescDev))
        else dispatch(setDescription(miDesc))
    }, [dev])

    return {support, dev, miNumber, title, description, handleChange, copySummary}
}
