"use client";
import Button from "../Button";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchDevSchema, type tSearchDevSchema } from "@/utils/zodSchema";
import FormError from "../FormError";

type Props = { onSearch: (search: string) => void };
const SearchForm = ({ onSearch }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<tSearchDevSchema>({ resolver: zodResolver(searchDevSchema) });

  const onSubmit: SubmitHandler<tSearchDevSchema> = ({ search }) => {
    console.log(search);
    onSearch(search);
  };
  return (
    <form
      className="flex gap-2 pt-4 md:w-1/3"
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <input
        className="min-w-0 grow rounded-md border-2 border-black/50 px-2"
        {...register("search")}
        placeholder="Search..."
      />
      <FormError error={errors.search} />
      <Button className="px-5 py-5" inverted>
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
