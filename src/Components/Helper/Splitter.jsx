const shorten = (title) => {
  const SplittedTitle = title.split(" ");
  const newTitle = `${SplittedTitle[0]} ${SplittedTitle[1]} ${SplittedTitle[2]}`;
  return newTitle;
};

export { shorten };
