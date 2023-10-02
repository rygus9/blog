import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const SectionTitle = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => (
  <h2 className="text-lg text-txt-700 font-arita font-bold">
    <Link href={href} className="flex items-center justify-start">
      {children} <ChevronRightIcon className="w-5 h-5 ml-1 stroke-2" />
    </Link>
  </h2>
);
