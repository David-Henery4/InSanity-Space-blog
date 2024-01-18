

const BlockComponent = ({ value: { children }, isInline }) => {
  return (
    <p className="text-sm mt-4 max-w-[280px]">
      {children[0].text.substring(0, 90) + "..."}
    </p>
  );
};

export default BlockComponent