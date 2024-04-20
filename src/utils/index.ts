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
  export const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    callback: Dispatch<SetStateAction<string>>
  ): void => {
    callback(e.target.value);
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
