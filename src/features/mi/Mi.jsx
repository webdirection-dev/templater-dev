import './mi.css'
import TextareaAutosize from 'react-textarea-autosize'
import {useMi} from './use-mi'

const Mi = ({setAlert, start, mi}) => {
    const {miNumber, dev, title, description, handleChange, copySummary} = useMi()
    return(
        <div
            id='mi'
            className={start ? 'card blue-grey darken-1' : !start && mi ? 'card blue-grey darken-1 card-opacity' : 'hide'}
        >
            <div className="card-content white-text summary-head">

                <div className="summary__checkbox-content">
                    <span className="card-title staff-title">MASS</span>
                </div>
            </div>

            <div className="card-action">
                <form className='mi-header'>
                    <select id='miSupport' name='miSupport' className='browser-default mi-select' onChange={handleChange}>
                        <option value="2ЛП ГИС МТ">2ЛП ГИСМТ</option>
                        <option value="2ЛП МДЛП">2ЛП МДЛП</option>
                    </select>


                    {/*<label htmlFor="miSupport" className='mi-input-label'>2ЛП:*/}
                    {/*    <select id='miSupport' name='miSupport' className='browser-default mi-select' onChange={handleChange}>*/}
                    {/*        <option value="2ЛП ГИС МТ">ГИСМТ</option>*/}
                    {/*        <option value="2ЛП МДЛП">МДЛП</option>*/}
                    {/*    </select></label>*/}

                    <div className="mi-number">
                        <label htmlFor="miNumber" className='mi-input-label'>MI:</label>
                        <input
                            type="text"
                            id="miNumber"
                            name="miNumber"
                            className='browser-default'
                            value={miNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <label className='mi-dev-label'>
                        <input
                            type="checkbox"
                            name='miDev'
                            className="filled-in"
                            checked={dev}
                            onChange={handleChange}
                        />
                        <span className='mi-dev-name'>DEV</span>
                    </label>
                </form>

                <form className='mi-body'>
                    <TextareaAutosize
                        className='summary__area mi-input'
                        value={title}
                        name="miTitle"
                        placeholder='Title'
                        onChange={handleChange}
                    />

                    <TextareaAutosize
                        className='summary__area mi-input'
                        value={description}
                        name="miDescription"
                        placeholder='Description'
                        onChange={handleChange}
                    />
                </form>
            </div>

            <div className="txt-out__card-footer">
                <button
                    className="btn-floating waves-effect waves-light main__action-btn-green"
                    onClick={() => {
                        setAlert(true)
                        copySummary()
                    }}
                >
                    <i className="material-icons">content_copy</i>
                </button>
            </div>
        </div>
    )
}

export default Mi
