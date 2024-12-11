import { sum } from "../components/sum";

test("Sum function should calcuylate the sum of two numbers", () => {
  const result = sum(3, 5);

  //Assertion
  expect(result).toBe(8);
});
