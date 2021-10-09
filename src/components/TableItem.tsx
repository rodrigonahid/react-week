import styled from "styled-components";
import { Categories } from "../data/Categories";
import { Item } from "../data/FinanceItems";
import { formatDate } from "./DateFilter";

const TableLine = styled.tr`

`;

type Props = {
  item: Item;
}

export const TableItem = ({item}: Props) => {
  return(
    <TableLine>
      <td>{formatDate(item.date)}</td>
      <td>{item.category}</td>
      <td>{Categories[item.category].title}</td>
      <td>R$ {item.value}</td>
    </TableLine>
  );
}