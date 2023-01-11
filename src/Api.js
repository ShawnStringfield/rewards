import { faker } from "@faker-js/faker";
import _, { times } from 'lodash';

export const createTransactions = () => {
  return times(3, () => {
    return {
      name: faker.name.fullName(),
        transactions: {
          'Jan': times(5, () => {
            return {
              date: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
              amount: parseInt(faker.finance.amount(20, 120, 0))
            }
          }),
          'Feb': times(5, () => {
            return {
              date: faker.date.between('2023-02-01T00:00:00.000Z', '2023-02-31T00:00:00.000Z'),
              amount: parseInt(faker.finance.amount(1, 120, 0))
            }
          }),
          'Mar': times(5, () => {
            return {
              date: faker.date.between('2023-03-01T00:00:00.000Z', '2023-03-31T00:00:00.000Z'),
              amount: parseInt(faker.finance.amount(1, 120, 0))
            }
          })
        }
    }
  })
}