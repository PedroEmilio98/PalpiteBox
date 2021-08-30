import React from 'react';
import "../css/styles.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <div className="bg-red-700 p-4 grid justify-items-center">
                <h1 >MyApp</h1>
            </div>
            <Component {...pageProps} />
        </div>


    )

}
export default MyApp;