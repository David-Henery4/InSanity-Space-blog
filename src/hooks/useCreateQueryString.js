import { useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"

const useCreateQueryString = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  //
  const handleTextSearch = (name, value, params) => {
    if (value === "") {
      params.delete(name);
      return params.toString();
    }
    params.set(name, value);
    return params.toString();
  }
  //
  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchParams)
    const previousValues = params.get(name)
    const combinedValues = `${previousValues},${value}`
    //
    if (name === "search"){
      return handleTextSearch(name, value, params)
    }
    //
    if (!previousValues){
      params.set(name, value);
      return params.toString();
    }
    //
    if (previousValues.includes(value)){
      const combinedValuesRay = combinedValues.split(",").filter(item => item !== value)
      if (!combinedValuesRay.length){
        params.delete(name)
        return params.toString()
      }
      params.set(name, combinedValuesRay);
      return params.toString();
    }
    //
    params.set(name,combinedValues)
    return params.toString()
  }, [searchParams])
  //
  return (
    {createQueryString, router}
  )
}

export default useCreateQueryString