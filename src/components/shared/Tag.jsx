
const Tag = ({ children, isCard = false }) => {
  return (
    <div
      className={`p-3 py-[6px] bg-lightGreen text-green font-bold rounded-3xl ${
        isCard ? "text-[10px]" : "text-xs"
      }`}
    >
      <p>{children}</p>
    </div>
  );
};

export default Tag;
