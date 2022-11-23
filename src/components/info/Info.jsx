import './info.css'

const Info = ({start, info}) => {
    return(
        <div
            className={start ? 'card blue-grey darken-1' : !start && info ? 'card blue-grey darken-1 card-opacity' : 'hide'}
        >
            <div className="card-content white-text summary-head">

                <div className="summary__checkbox-content">
                    <span className="card-title staff-title">Info</span>
                </div>
            </div>

            <div className="card-action">
                <div className="summary__body info-wrapper">
                    <p>Чётные дни: Виктор Давтян</p>
                    <p>Нечётные дни: Иван Супрун</p>

                    <div className="info-footer">DUTY © {new Date().getFullYear()}</div>
                </div>
            </div>
        </div>
    )
}

export default Info
