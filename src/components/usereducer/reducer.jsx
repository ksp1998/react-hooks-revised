const reducer = (count, action) => {
  switch (action.type) {
    case "INC":
      return ++count;
    case "DEC":
      return count === 0 ? 0 : count - 1;
  }

  return count;
};

export default reducer;
