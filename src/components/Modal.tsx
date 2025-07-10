"use client";

import useQueryParams from "@/libs/useQueryParams";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export type TModalRegistered = "tier" | "filter-category";

export type TModalPostRegistered = "center" | "bottom";

export function RouterBack({
  className,
  children,
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  const router = useRouter();
  return (
    <span
      className={[
        "cursor-pointer",
        className ? className : "absolute inset-0 z-10",
      ].join(" ")}
      onClick={() => {
        if (onClick) onClick();
        router.back();
      }}
    >
      {children}
    </span>
  );
}

export function PreventScrolling() {
  useLayoutEffect(() => {
    document.querySelector("body")!.classList.add("overflow-hidden");

    return () => {
      document.querySelector("body")!.classList.remove("overflow-hidden");
    };
  }, []);
  return null;
}

export function OpenModal({
  className,
  children,
  queries,
  modal,
  modalPosition,
}: {
  modal: TModalRegistered;
  modalPosition: TModalPostRegistered;
  queries: {
    [key: string]: string;
  };
  className?: string;
  children?: React.ReactNode;
}) {
  const queryParams = useQueryParams();

  return (
    <Link
      href={{
        query: {
          ...queryParams,
          ...queries,
          modal,
          "modal-pos": modalPosition,
        },
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
