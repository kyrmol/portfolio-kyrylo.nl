"use client";

import { useRouter } from "next/navigation";
import { SmartLink, Text } from "@once-ui-system/core";

export function BackButton({ label = "Projects" }: { label?: string }) {
  const router = useRouter();

  return (
    <SmartLink
      href="/work"
      onClick={(e) => {
        e.preventDefault();
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/work");
        }
      }}
    >
      <Text variant="label-strong-m">{label}</Text>
    </SmartLink>
  );
}
