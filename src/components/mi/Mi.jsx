import './mi.css'

const Mi = ({start, mi}) => {
    return(
        <div
            className={start ? 'card blue-grey darken-1' : !start && mi ? 'card blue-grey darken-1 card-opacity' : 'hide'}
        >
            <div className="card-content white-text summary-head">

                <div className="summary__checkbox-content">
                    <span className="card-title staff-title">Mass</span>
                </div>
            </div>

            <div className="card-action">
                <div className="summary__body">
                    <p>Test</p>
                </div>
            </div>
        </div>
    )
}

export default Mi
