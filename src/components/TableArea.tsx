import styled from "styled-components";
import { Item } from "../data/FinanceItems";
import { TableItem } from "./TableItem";

const Table = styled.table`
  width: 100%;
  background-color: #FFF;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 8px;
  margin-top: 12px;
  th{
    padding: 0 10px;
    text-align: left;
  }
`;

type Props = {
  list: Item[]
}

export const TableArea = ({list}: Props) => {
  return(
    <Table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Categoria</th>
          <th>Título</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index)=>{
          return(
            <TableItem key={index} item={item} />
          )

        })}
      </tbody>
    </Table>
  )
}