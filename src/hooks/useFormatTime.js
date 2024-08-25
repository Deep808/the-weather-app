const useFormatTime = (datetime) => {
  const date = new Date(datetime);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  return formattedDate;
};

export default useFormatTime;
