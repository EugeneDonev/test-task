import { KeyboardEvent, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BORDER, LABEL, WRAPPER, COLUMN } from '../styles';
import { CALENDAR_MONTHS } from '../utils';
import { ReactComponent as leftIcon } from '../assets/icons/left-arrow.svg';

export interface DateObj {
  date: Date;
  currentDate: string;
}
interface Props {
  labelText?: string;
  callback: (dateObj: DateObj) => void;
}

const CONTAINER = styled(WRAPPER)`
  @media (max-width: 560px) {
    margin-top: 16px;
  }
`;
const LEFT = styled(leftIcon)`
  cursor: pointer;
`;
const RIGHT = styled(LEFT)`
  transform: rotate(180deg);
`;
const YEAR = styled.span`
  color: #708797;
`;
const PICKER = styled(BORDER)`
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px;
`;
const CURRENT_DATE = styled(COLUMN)`
  font-family: 'Work Sans';
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #1e2a32;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

function DataPicker({
  labelText = 'Reach goal by',
  callback,
}: Props): React.ReactElement {
  const currentDate = new Date();
  const [date, setDate] = useState<Date>(currentDate);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    callback({
      date,
      currentDate: `${CALENDAR_MONTHS[month]} ${year}`,
    });
  }, [callback, date, month, year]);

  const handleChange = (increase?: boolean) => {
    const newDate = new Date(date);
    const currentDate = new Date();

    currentDate.setDate(currentDate.getDate() - 1);
    newDate.setMonth(date.getMonth() + (increase ? 1 : -1));

    if (currentDate.getTime() > newDate.getTime()) {
      return;
    }
    setDate(newDate);
    setMonth(newDate.getMonth());
    setYear(newDate.getFullYear());
  };

  const handleKeyUp = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (!focus) return;

    switch (key) {
      case 'ArrowLeft':
        handleChange();
        break;
      case 'ArrowRight':
        handleChange(true);
        break;
    }
  };

  return (
    <CONTAINER width="192px">
      <LABEL>{labelText}</LABEL>
      <PICKER
        tabIndex={0}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyUp={(e) => handleKeyUp(e)}
      >
        <LEFT onClick={() => handleChange()} />
        <CURRENT_DATE>
          <b>{CALENDAR_MONTHS[month]}</b>
          <YEAR>{year}</YEAR>
        </CURRENT_DATE>
        <RIGHT onClick={() => handleChange(true)} />
      </PICKER>
    </CONTAINER>
  );
}

export default memo(DataPicker);
