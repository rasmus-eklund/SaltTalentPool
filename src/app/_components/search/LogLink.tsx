"use client";

import { api } from "@/trpc/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = { children: ReactNode; developerId: string };

const LogLink = ({ children, developerId }: Props) => {
  const { data: session } = useSession();
  const { mutate: logClick } = api.log.logClick.useMutation();
  const handleClick = () => {
    if (session && session.user.role === "CLIENT") {
      logClick({ developerId });
    }
  };
  return (
    <Link onClick={handleClick} href={`/developer/${developerId}`}>
      {children}
    </Link>
  );
};

export default LogLink;