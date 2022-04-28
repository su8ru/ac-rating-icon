import { isBoolean, isNumber, isObject, isString } from "types/typeGuard";

type VueWithUserInfo = {
  u: {
    Rating: number;
    IsTeam: boolean;
    UserScreenName: string;
  };
};

export const isVueWithUserInfo = (
  vue: Record<string, unknown>
): vue is VueWithUserInfo =>
  isObject(vue.u) &&
  isNumber(vue.u.Rating) &&
  isBoolean(vue.u.IsTeam) &&
  isString(vue.u.UserScreenName);

export default VueWithUserInfo;
