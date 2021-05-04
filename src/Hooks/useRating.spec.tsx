import { useRating } from "./useRating";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useRating", () => {
  it("should get stored movie rating", () => {
    const { result } = renderHook(() => useRating({ movieId: "1" }));
    expect(result.current[0]).toBe(0);
    act(() => {
      result.current[1](1);
    });
    expect(result.current[0]).toBe(1);
  });
});
