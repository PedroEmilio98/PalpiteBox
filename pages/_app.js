import React from 'react';
import Layout from '../Components/Layout/Layout';
import "../css/styles.css";


const MyApp = ({ Component, pageProps }) => {
    return (
        <div >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>


    )

}
export default MyApp;