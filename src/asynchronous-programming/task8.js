const fooTask8 = async url => {
  try {
    const response = await fetch(url);
    const [user] = await response.json();
    console.log(user);
  } catch (err) {
    console.log('Error!', err);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { fooTask8 };
