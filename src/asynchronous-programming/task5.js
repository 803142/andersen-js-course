const json = response => response.json();

const dataLog = data => console.log(data);

const urlToPromise = url => {
  const result = fetch(url).then(json);
  return result;
};

const arrURLtoPromise = arr => arr.map(urlToPromise);

const arrPromiseResolveConsecutively = arr => {
  const result = arr.reduce(
    (acc, url) => acc.then(getted => urlToPromise(url).then(data => [...getted, data])),
    Promise.resolve([])
  );
  return result.then(dataLog);
};

const arrPromiseResolveParallel = arr => {
  return Promise.all(arrURLtoPromise(arr)).then(dataLog);
};

// eslint-disable-next-line import/prefer-default-export
export { arrPromiseResolveParallel, arrPromiseResolveConsecutively };
