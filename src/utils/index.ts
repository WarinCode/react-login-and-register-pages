import { FormEvent, ChangeEvent, Dispatch, SetStateAction } from "react";
import ShortUniqueId from "short-unique-id";

namespace UtilityFuncs {
  export const resetForm = (...refs: InputRefs): void => {
    let ref: InputRef;
    for (ref of refs) {
      ref.current.value = "";
    }
  };
  export const generateId = (options?: Partial<ShortUniqueId>): string => {
    const uniqueId: ShortUniqueId = new ShortUniqueId(options);
    return uniqueId.randomUUID(options?.uuidLength);
  };
  export const handleChange = <T extends object>(
    e: ChangeEvent<HTMLInputElement>,
    callback: Dispatch<SetStateAction<T>>,
    key: string,
    obj: T
  ): void => {
    if (Object.keys(obj).includes(key)) {
      callback({ ...obj, [key]: e.target.value });
    } else {
      callback(obj);
    }
  };
  export const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    callback?: () => void
  ): void => {
    e.preventDefault();
    typeof callback === "function" && callback !== undefined && callback();
  };
}
export default UtilityFuncs;
