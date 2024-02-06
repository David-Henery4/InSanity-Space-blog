"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";


const Tag = ({ children, isCard = false }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const isTagActive = id ? id?.includes(children) : null;
  //
  const createQueryString = useCallback(
    (name, value) => {
      //
      const params = new URLSearchParams(searchParams);
      if (!id) {
        params.set(name, value);
        return params.toString();
      }
      //
      if (id.includes(value)) {
        const valuesRay = id.split(",").filter((v) => v !== value);
        if (!valuesRay.length && name === "id") {
          params.delete(name);
          return params.toString();
        }
        params.set(name, valuesRay);
        return params.toString();
      }
      const combinedValues = `${id},${value}`;
      params.set(name, combinedValues);
      return params.toString();
    },
    [searchParams]
  );
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
