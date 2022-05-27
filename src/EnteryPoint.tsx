import React from "react";
import App from "./App";
import { Provider } from 'react-redux'
import { store } from './redux/store/store'



const EnteryPoint = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default EnteryPoint