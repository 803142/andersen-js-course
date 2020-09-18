const delay = ms => {
  const result = new Promise(resolve => {
    setTimeout(() => resolve(100), ms);
  });
  return result;
};

// eslint-disable-next-line import/prefer-default-export
export { delay };
