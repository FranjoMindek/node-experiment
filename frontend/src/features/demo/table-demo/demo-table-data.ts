import { faker } from "@faker-js/faker";

export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  subRows?: Person[];
};

export function createPersonData(numberOfPeople: number): Person[] {
  return range(numberOfPeople).map((index): Person => {
    return {
      ...newPerson(index),
    };
  });
}

const range = (length_: number) => {
  const array: number[] = [];
  for (let index = 0; index < length_; index++) {
    array.push(index);
  }
  return array;
};

const newPerson = (number_: number): Person => {
  return {
    id: number_,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    // biome-ignore lint/style/noNonNullAssertion: <It always exists>
    status: faker.helpers.shuffle<Person["status"]>([
      "relationship",
      "complicated",
      "single",
    ])[0]!,
  };
};
