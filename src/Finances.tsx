import React from "react";
import styled from "styled-components";
import { Container, Header } from "./App.styles";
import { FinanceItems, Item } from "./data/FinanceItems";
import { Categories } from "./data/Categories";
import { getCurrentMonth, filterListByMonth } from "./components/DateFilter";
import { TableArea } from "./components/TableArea";

const FinancesWrapper = styled.div`
  
`;

const Info = styled.section``;
const Insert = styled.section``;

export function Finances(){
  const [list, setList] = React.useState(FinanceItems);
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());

  React.useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  },[list,currentMonth])

  return (
    <Container>
      <Header>
        <h1>Finance Controller</h1>
      </Header>
      <FinancesWrapper>
        
        <Info></Info>
        <Insert></Insert>
        
        <TableArea list={filteredList} />

      </FinancesWrapper>
    </Container>
  )
}