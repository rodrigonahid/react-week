import React from "react";
import styled from "styled-components";
import { Container, Header } from "./App.styles";
import { FinanceItems, Item } from "./data/FinanceItems";
import { Categories } from "./data/Categories";
import { getCurrentMonth, filterListByMonth } from "./components/DateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { HomeLink } from "./components/HomeLink";

const FinancesWrapper = styled.div`
  
`;

const Insert = styled.section``;

export function Finances(){
  const [list, setList] = React.useState(FinanceItems);
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);

  React.useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  },[list,currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  React.useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(Categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }
    setExpense(expenseCount)
    setIncome(incomeCount)
  }, [filteredList])

  return (
    <Container>
      <Header>
        <HomeLink />
        <h1>Finance Controller</h1>
      </Header>
      <FinancesWrapper>
        
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}  
        />
        <Insert></Insert>
        
        <TableArea list={filteredList} />

      </FinancesWrapper>
    </Container>
  )
}