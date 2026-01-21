interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

function sortPersons(persons: Person[]): Person[] {
  const filteredPerson = persons.filter(user => 
  user.firstName.startsWith("") || user.lastName?.startsWith("") || user.age > 100 || user.age > 0);
  const sortByAge = [...filteredPerson].sort((a, b) => b.age - a.age);
  const sortByName = [...customers].sort((a, b) => a.firstName.localeCompare(b.lastName));
  const sortedByLastname = [...customers].sort((a, b) => b.lastName - a.lastName);
  return result;
}


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];