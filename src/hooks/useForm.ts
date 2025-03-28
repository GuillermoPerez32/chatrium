/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useForm as useReactHookForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodType, ZodTypeDef } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UseFormOptions<TSchema extends ZodType<any, ZodTypeDef, any>> = {
  schema: TSchema;
} & UseFormProps<z.infer<TSchema>>;

const useForm = <TSchema extends ZodType<any, ZodTypeDef, any>>(
  options: UseFormOptions<TSchema>
): UseFormReturn<z.infer<TSchema>> => {
  const { schema, ...formOptions } = options;

  return useReactHookForm<z.infer<TSchema>>({
    ...formOptions,
    resolver: zodResolver(schema),
    criteriaMode: "firstError",
  });
};

export default useForm;
