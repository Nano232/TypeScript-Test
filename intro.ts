let a: number = 21;
let st: string = "Mohamed";
let any: any = "kk";
any = 21;
any = false;
let arr: number[] = [1, 2, 3];
let arra: string[] = ["Mohmed", "Momen", "Malak"];
let array: any[] = ["Mohmed", "Momen", "Malak", 1, 2, 3];
let data: [number, boolean, string, number] = [21, true, "Mohamed", 21];
let or: number | string | boolean = "mohamed";
or = 21;
or = true;
// ---------------------------
enum weeks {
  sun,
  mod,
  tusd,
  thurs,
  fri,
  sat,
}
console.log(weeks.sun);
// ---------------------------
let user: {
  name: string;
  age: number;
} = {
  name: "Mohamed",
  age: 21,
};

type person = {
  name: string;
  age: number;
};
let x: person = {
  name: "Mostafa",
  age: 20,
};
// ---------------------------
