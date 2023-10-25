"use client";
import { projectSchema, type tProjectSchema } from "@/utils/zodSchema";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import getId from "@/app/_components/profile/developer/helpers/getYTid";
import toast from "react-hot-toast";
import type { RouterInputs } from "@/trpc/shared";
import FormError from "../../FormError";

type Project = RouterInputs["project"]["create"];

type Props = {
  project?: Project;
  handleData: (data: Project) => Promise<void>;
};
const ProjectForm = ({ project, handleData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tProjectSchema>({
    mode: "onSubmit",
    resolver: zodResolver(projectSchema),
    defaultValues: project,
  });
  const onSubmit: SubmitHandler<tProjectSchema> = async (data) => {
    const yt = getId(data.youtube);
    if (!yt) {
      return toast.error("Incorrect youtube link");
    }
    await handleData({ ...data, youtube: yt });
  };
  const className = "h-10 rounded-md border-2 border-black/50 px-2";
  const fields = ["title", "youtube", "description", "githubLink"] as const;
  return (
    <div>
      <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        {fields.map((field) => {
          return (
            <div key={field} className="flex gap-2">
              <input
                className={className}
                placeholder={field}
                {...register(field)}
              />
              <FormError error={errors[field]} />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectForm;