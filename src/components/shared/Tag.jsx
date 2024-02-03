"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import Link from "next/link";

const Tag = ({ children, isCard = false }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  //
  const removedDuplicateValues = (values) => {
    
  }
  //
  const createQueryString = useCallback(
    (name, value) => {
      console.log("testing query: ", searchParams);
      console.log("testing ID Query: ", id);
      const params = new URLSearchParams(searchParams);
      if (!id) {
        params.set(name, value);
        return params.toString();
      }
      //
      // if (id){
      //   const combinedValues = `${id},${value}`
      //   console.log("without null: ",combinedValues)
      //   params.set(name, combinedValues);
      // }
      //
      // console.log("with null",combinedValues)
      // const params = new URLSearchParams([["id", "Space Exploration"], ["id", "Astronomy"]]);
      //
      // params.set(name, value);
      // params.set("include", "")
      //
      console.log("id: ",id)
      const checkForValue = id.includes(value)
      if (id.includes(value)){
        const valuesRay = id.split(",").filter((v) => v !== value)
        console.log("valuesRay length",valuesRay.length)
        console.log("valuesRay: ", valuesRay.join(","))
        if (!valuesRay.length && name === "id"){
          params.delete(name)
          return params.toString();
        }
        params.set(name, valuesRay);
        return params.toString();
      }
      const combinedValues = `${id},${value}`;
      console.log("value check: ", checkForValue)
      console.log("without null: ", combinedValues);
      params.set(name, combinedValues);
      return params.toString();
    },
    [searchParams]
  );
  //
  return (
    <div
      className={`p-3 py-[6px] bg-lightGreen text-green font-bold rounded-3xl hover:cursor-pointer ${
        isCard ? "text-[10px]" : "text-xs"
      }`}
      onClick={() => {
        router.push(`/?${createQueryString("id", children)}#stories`);
      }}
    >
      <p>{children}</p>
    </div>
  );
};

export default Tag;
