export type Item = {
  date: Date,
  category: string;
  title: string;
  value: number;
}

export const FinanceItems: Item[] = [
  {
    date: new Date(2021, 9, 15),
    category: 'food',
    title: 'McDonalds',
    value: 34.23
  },
  {
    date: new Date(2021, 9, 30),
    category: 'food',
    title: 'BurguerKing',
    value: 28.32
  },
  {
    date: new Date(2021, 9, 28),
    category: 'rent',
    title: 'Aluguel apto',
    value: 800.00
  },
  {
    date: new Date(2021, 10, 15),
    category: 'salary',
    title: 'Salario seox',
    value: 1190.00
  }
]