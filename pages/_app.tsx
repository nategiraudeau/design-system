import { AppProps } from 'next/app';
import Navbar from '../components/layout/navbar';
import React from 'react';

import '../scss/index.scss';
import '@material/linear-progress/dist/mdc.linear-progress.css';

function MyApp({ Component }: AppProps) {
    return (
        <div className="_wrapper">
            <Component />
        </div>
    );
}

export default MyApp