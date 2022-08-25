import { createGlobalStyle } from 'styled-components';
import WorkSansRegular from '../assets/fonts/worksans/WorkSans-Regular.ttf';
import WorkSansSemiBold from '../assets/fonts/worksans/WorkSans-SemiBold.ttf';
import RubikRegular from '../assets/fonts/rubik/Rubik-Regular.ttf';
import RubikMedium from '../assets/fonts/rubik/Rubik-Medium.ttf';

export const GLOBAL_STYLE = createGlobalStyle`
  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansSemiBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Rubik';
    src: url(${RubikRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Rubik';
    src: url(${RubikMedium}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    background: #E5E5E5;
    min-width: 360px;
  }
`;
