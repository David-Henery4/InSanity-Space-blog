"use client";
import { useSearchParams } from "next/navigation";
import useCreateQueryString from "@/hooks/useCreateQueryString";


const Tag = ({ children, isCard = false }) => {
  const {createQueryString, router} = useCreateQueryString()
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const isTagActive = id ? id?.includes(children) : null;
  //
  return (
    <div
      className={`p-3 py-[6px] font-bold rounded-3xl hover:cursor-pointer ${
        isTagActive ? "bg-orange text-white" : "bg-lightGreen text-green"
      } ${isCard ? "text-[10px]" : "text-xs"}`}
      onClick={() => {
        router.push(`/?${createQueryString("id", children)}#stories`);
      }}
    >
      <p>{children}</p>
    </div>
  );
};

export default Tag;
