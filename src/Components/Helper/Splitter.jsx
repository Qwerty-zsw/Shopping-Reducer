const shorten = (title) => {
  const SplittedTitle = title.split(" ");
  const newTitle = `${SplittedTitle[0]} ${SplittedTitle[1]} ${SplittedTitle[2]}`;
  return newTitle;
};

const isInCard = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export { shorten, isInCard, quantityCount };
