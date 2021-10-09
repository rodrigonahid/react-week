import styled from "styled-components";
import { formatCurrencyMonth } from "./DateFilter";
import { ResumeItem } from "./ResumeItem";

const InfoWrapper = styled.div`
  background: #FFF;
  box-shadow: 0 0 5px #ccc;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;
const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;
const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month), 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
  }  
  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month), 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
  }
  return(
    <InfoWrapper>
      <MonthArea>
        <MonthArrow onClick={handlePrevMonth}>⬅️</MonthArrow>
        <MonthTitle>{formatCurrencyMonth(currentMonth)}</MonthTitle>
        <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despezas" value={expense} />
        <ResumeItem title="Balanço"  value={income-expense}/>
      </ResumeArea>

    </InfoWrapper>
  )
}