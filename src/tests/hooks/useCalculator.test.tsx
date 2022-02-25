import { renderHook } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

test("show multiple examples", () => {
    const { result } = renderHook(() => useCalculator());
    const {
        substraction,
        division,
    } = result.current;



    expect(division("6","3")).toEqual("2");
    expect(substraction("12","1")).toEqual("11");

});
