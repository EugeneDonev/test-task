import styled from 'styled-components';

export const COLUMN = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WRAPPER = styled.div<{ width?: string }>`
  width: ${({ width }) => width || '100%'};

  @media (max-width: 560px) {
    width: 100%;
  }
`;
export const LABEL = styled.label`
  font-size: 14px;
  line-height: 150%;
  color: #1e2a32;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const BORDER = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #e9eef2;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

interface ButtonProps {
  borderRadius?: number;
  background?: string;
  width?: string;
  height?: string;
  margin?: string;
  fontSize?: number;
}
export const BUTTON = styled.button<ButtonProps>`
  background-color: ${({ background = '#1b31a8' }) => background};
  border-radius: ${({ borderRadius = 32 }) => borderRadius}px;
  width: ${({ width = '320px' }) => width};
  height: ${({ height = '56px' }) => height};
  margin: ${({ margin = 'auto' }) => margin};

  font-family: inherit;
  font-weight: 600;
  font-size: ${({ fontSize = 16 }) => fontSize}px;
  color: #ffffff;

  cursor: pointer;
  border: none;
  outline: none;

  @media (max-width: 560px) {
    width: 100%;
  }
`;
