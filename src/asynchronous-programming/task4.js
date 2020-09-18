const URL = {
  CHECK: 'http://www.json-generator.com/api/json/get/cfQCylRjuG',
  USERDATA: 'http://www.json-generator.com/api/json/get/cfVGucaXPC',
};

const json = response => response.json();

const getUserData = () => {
  const result = new Promise(resolve => {
    fetch(URL.CHECK)
      .then(json)
      .then(({ getUsersData }) => {
        if (getUsersData) {
          fetch(URL.USERDATA)
            .then(json)
            .then(data => resolve(data));
        }
      });
  });
  return result.then(data => console.log(data));
};

// eslint-disable-next-line import/prefer-default-export
export { getUserData };
