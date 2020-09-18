const asyncBar = async () => 'Some string!';

const fooTask9 = async () => {
  console.log(await asyncBar());
};
// eslint-disable-next-line import/prefer-default-export
export { fooTask9 };
