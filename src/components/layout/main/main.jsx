import ControlPanel from "../../../features/control/ControlPanel"
import CardsList from "../../cardsList/cardsList"

const Main = () => (
    <>
        <ControlPanel />

        <div className='content container'>
            <CardsList />
        </div>
    </>
)

export default Main
