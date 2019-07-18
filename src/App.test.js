import { add } from "./App";

test("it can add", () => {
    const result = add(1, 2)
    expect(result).toEqual(3)
})