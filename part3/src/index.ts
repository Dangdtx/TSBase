import { h1 } from "./m1";
import "./ex/base";
function sum(a: number, b: number): number {
	return a + b;
}
const obj = { name: "dang", age: 15 };
obj.name = "bo";
console.log(obj);
console.log("object", h1);
console.log(sum(1, 2));
