"use client";

import { api } from "@/trpc/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  slug: string;
  developerId: string;
  className?: string;
  storeScroll?: () => void;
};

const LogLink = ({
  children,
  developerId,
  slug,
  className,
  storeScroll,
}: Props) => {
  const { data: session } = useSession();
  const { mutate: logClick } = api.log.logClick.useMutation();
  const handleClick = () => {
    if (storeScroll) {
      storeScroll();
    }
    if (session && session.user.role === "CLIENT") {
      logClick({ developerId });
    }
  };
  return (
    <Link
      className={className}
      onClick={handleClick}
      href={`/developer/${slug}`}
    >
      {children}
    </Link>
  );
};

export default LogLink;
