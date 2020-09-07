import styled from 'styled-components';
import spinnerGif from './spinner.gif';

export const Spinner = styled.div`
  position: absolute;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.6);
  background-image: url(${spinnerGif});
  background-repeat: no-repeat;
  background-position: center;
`;
