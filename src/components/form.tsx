import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as homeIcon } from '../assets/icons/buy-a-house.svg';
import { monthDiff, calculateMonthlyAmount } from '../utils';
import Input from './input';
import DataPicker, { DateObj } from './dataPicker';
import { COLUMN, BUTTON } from '../styles';

const WRAPPER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;
  padding: 32px 40px 40px;
  box-sizing: border-box;
`;
const FORM_HEADER = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
`;
const HOME_ICON = styled(homeIcon)`
  margin-right: 16px;
  width: 64px;
  height: 64px;
`;

const TITLE = styled.span`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #1e2a32;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
const SUBTITLE = styled.span`
  line-height: 150%;
  color: #708797;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const RESULT = styled.div`
  background: #ffffff;
  border-radius: 8px;

  box-sizing: border-box;
  border: 1px solid #e9eef2;
  border-radius: 8px;
  margin: 24px 0 32px;
  width: 100%;
`;
const MONTHLY_AMOUNT = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 30.5px 16px 32px;

  span {
    font-size: 20px;
    color: #1e2a32;
  }
  h3 {
    font-family: 'Rubik';
    font-size: 32px;
    line-height: 120%;
    color: #0079ff;
    margin: 0;
  }

  @media (max-width: 480px) {
    span {
      font-size: 18px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;
const RESULT_DESCRIPTION = styled.div`
  background: #f4f8fa;
  padding: 24px 32px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #1c1e1f;
`;
const ROW = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

function Form(): React.ReactElement {
  const [amount, setAmount] = useState('0');
  const [date, setDate] = useState('');
  const [monthlyAmount, setMonthlyAmount] = useState('0');
  const [monthCount, setMonthCount] = useState(0);

  const onChangeAmount = (value: string) => {
    setAmount(value);
    countMonthlyAmount();
  };

  const handleChangeDate = ({ date, currentDate }: DateObj) => {
    setDate(currentDate);
    setMonthCount(monthDiff(date));
    countMonthlyAmount();
  };

  const countMonthlyAmount = () => {
    const result = calculateMonthlyAmount(amount, monthCount);
    setMonthlyAmount(result);
  };

  return (
    <WRAPPER>
      <FORM_HEADER>
        <HOME_ICON />
        <COLUMN>
          <TITLE>Buy a house</TITLE>
          <SUBTITLE>Saving goal</SUBTITLE>
        </COLUMN>
      </FORM_HEADER>
      <ROW>
        <Input onChange={onChangeAmount} />
        <DataPicker callback={handleChangeDate} />
      </ROW>
      <RESULT>
        <MONTHLY_AMOUNT>
          <span>Monthly amount</span>
          <h3>${monthlyAmount}</h3>
        </MONTHLY_AMOUNT>
        <RESULT_DESCRIPTION>
          {`You’re planning `}
          <strong>{monthCount} monthly deposits</strong>
          {` to reach your `}
          <strong>${amount}</strong>
          {` goal by `}
          <b>{date}</b>
          {`.`}
        </RESULT_DESCRIPTION>
      </RESULT>
      <BUTTON>Confirm</BUTTON>
    </WRAPPER>
  );
}

export default Form;
