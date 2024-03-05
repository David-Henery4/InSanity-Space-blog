import Link from "next/link";

const NotFound = () => {
  return (
    <div className="col-start-2 col-end-12 h-[85dvh] grid place-items-center">
      <div className="text-center">
        <p className="text-4xl font-bold">404</p>
        <p className="mt-4">{`Sorry! We couldn't find what you were looking for`}</p>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
