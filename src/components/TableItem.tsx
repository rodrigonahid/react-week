import styled from "styled-components";
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
      <td>{item.title}</td>
      <td>R$ {item.value}</td>
    </TableLine>
  );
}