import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as dollarIcon } from '../assets/icons/dollar-sign.svg';
import { currencyFormat, inputRegex } from '../utils';
import { WRAPPER, LABEL, BORDER } from '../styles';

interface Props {
  labelText?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  width?: string;
}

const DOLLAR_ICON = styled(dollarIcon)`
  width: 24px;
  height: 24px;
  margin: 16px 8px 16px 12px;
`;
const INPUT = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 4px;

  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #4d6475;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

function Input({
  onChange,
  labelText = 'Total amount',
  placeholder = '0',
  defaultValue = '0',
  width = '272px',
}: Props): React.ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue);

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!value) {
      setValue('0');
      return;
    }

    if (inputRegex.test(value)) {
      const currencyValue =
        value.slice(-1) === '.' ? value : currencyFormat(value);
      setValue(currencyValue);
      onChange(currencyValue);
    }
  };

  return (
    <WRAPPER width={width}>
      <LABEL htmlFor="input_id">{labelText}</LABEL>
      <BORDER onClick={handleFocusInput}>
        <DOLLAR_ICON />
        <INPUT
          ref={inputRef}
          placeholder={placeholder}
          id="input_id"
          onChange={handleChange}
          value={value}
        />
      </BORDER>
    </WRAPPER>
  );
}

export default Input;
