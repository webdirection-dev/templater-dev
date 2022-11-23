import {Provider} from 'react-redux'
import {store} from './features'

import Header from "./components/layout/header/header"
import Main from "./components/layout/main/main"

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
        </Provider>
    )
}

export default App
