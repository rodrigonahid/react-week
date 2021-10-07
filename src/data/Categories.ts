type Category = {
  [tag: string]: {
    title: string;
    color: string;
    expense: boolean;
  }
}

export const Categories: Category = {
  food: { title: 'Alimentação', color: 'blue', expense: true },
  rent: { title: 'Aluguel', color: 'brown', expense: true},
  salary: { title: 'Salario', color: 'green', expense: false}
}