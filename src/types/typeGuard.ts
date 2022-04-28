type WouldBe<T> = { [P in keyof T]?: unknown };

type Condition<T> = (value: unknown) => value is T;

export const isString: Condition<string> = (value: unknown): value is string =>
  typeof value === "string";

export const isNumber: Condition<number> = (value: unknown): value is number =>
  typeof value === "number";

export const isBoolean: Condition<boolean> = (
  value: unknown
): value is boolean => typeof value === "boolean";

export const isObject = <T extends Record<string, unknown>>(
  value: unknown
): value is WouldBe<T> => typeof value === "object" && value !== null;
