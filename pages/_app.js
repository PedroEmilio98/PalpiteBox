import React from 'react';
import "../css/styles.css";
import Header from '../Components/Header';

const MyApp = ({ Component, pageProps }) => {
    return (
        <div >
            <Header />
            <Component {...pageProps} />
        </div>


    )

}
export default MyApp;