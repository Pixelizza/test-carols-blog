import { createGlobalStyle } from 'styled-components';

import Avalanche from './avalanche.otf';
import DosisRegular from './Dosis-Regular.ttf';
import DosisSemiBold from './Dosis-SemiBold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Avalanche';
        src: local('Avalanche'),
        url(${Avalanche}) format('opentype');
        font-display: fallback;
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Dosis';
        src: local('Dosis'),
        url(${DosisRegular}) format('truetype');
        font-display: fallback;
        font-weight: 400;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Dosis';
        src: local('Dosis'),
        url(${DosisSemiBold}) format('truetype');
        font-display: fallback;
        font-weight: 700;
        font-style: normal;
    }
`;
