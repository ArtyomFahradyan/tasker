import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from './@redux/configureStore';
import App from './App';
import './index.less';
import theme from './theme';
const { store } = configureStore();

function Main() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default Main;
