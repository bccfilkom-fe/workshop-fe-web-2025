import { Task } from "../actions/task";

type GenderEnum = "male" | "female";

interface IPerson<T> {
  name: string;
  age: T;
  gender: GenderEnum;
}

interface IDisabledPerson extends IPerson<number> {
  disease: string;
}

interface IApiResponse<T> {
  data: T;
  message: string;
}

// const responseUser: IApiResponse<User[]> = []
// const taskResponse:IApiResponse<Task[]> =

const person: IDisabledPerson = {
  name: "Fahri",
  age: 21,
  gender: "male",
  disease: "sehat",
};

console.log(person);
