import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter 테스트", () => {
  test("useCounter 훅의 파라미터 값이 초기값으로 세팅되는지 확인", () => {
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toBe(5);
  });

  test("increment 함수가 count 값을 1 증가시키는지 확인", () => {
    const { result } = renderHook(() => useCounter(0));

    // 처음 counter 값은 0
    expect(result.current.count).toBe(0);

    // 증가 실행
    act(() => {
      result.current.increment();
    });

    // 1로 counter 값 변경
    expect(result.current.count).toBe(1);
  });

  test("decrement 함수가 count 값을 1 감소시키는지 확인", () => {
    const { result } = renderHook(() => useCounter(5));

    // 처음 counter 값은 5
    expect(result.current.count).toBe(5);

    // 감소 실행
    act(() => {
      result.current.decrement();
    });

    // 4로 counter 값 변경
    expect(result.current.count).toBe(4);
  });

  test("reset 함수가 count 값을 초기값으로 되돌리는지 확인", () => {
    const { result } = renderHook(() => useCounter(0));

    // 처음 counter 값은 0
    expect(result.current.count).toBe(0);

    // 증가 실행
    act(() => {
      result.current.increment();
    });

    // 증가 후 counter 값은 1
    expect(result.current.count).toBe(1);

    // reset 실행
    act(() => {
      result.current.reset();
    });

    // reset으로 counter 초기값으로 변경
    expect(result.current.count).toBe(0);
  });
});
