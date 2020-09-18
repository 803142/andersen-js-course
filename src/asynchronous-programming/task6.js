const getResolvedPromise = value =>
  Promise.resolve(value)
    .then(val => {
      if (val > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(err => console.log(err.message))
    .finally(console.log('This is Finally!'));

// eslint-disable-next-line import/prefer-default-export
export { getResolvedPromise };
