
const formatDate = (publishedDate) => {
  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
  }).format(new Date(publishedDate));
  const date = +new Date(publishedDate).getDate();
  const year = +new Date(publishedDate).getFullYear();
  return `${month} ${date}, ${year}`;
};

export default formatDate