import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';
import { getUserData } from './asynchronous-programming/task4';
import {
  arrPromiseResolveParallel,
  arrPromiseResolveConsecutively,
} from './asynchronous-programming/task5';
import { getResolvedPromise } from './asynchronous-programming/task6';
import { fooTask7 } from './asynchronous-programming/task7';
import { fooTask8 } from './asynchronous-programming/task8';
import { fooTask9 } from './asynchronous-programming/task9';
import { Musican } from './asynchronous-programming/task10';

console.log('task1');
foo(5, createCb('cb'));
foo(20, createCb('cb'));

console.log('task2');
parseJSON('{"х": 10}', successCb, failureCb);
// 'Success parse!'
// { x: 10 }
parseJSON('{x}', successCb, failureCb);
// 'Failure parse!'
// SyntaxError: Unexpected token x in JSON at position 1

(async () => {
  console.log('task3');
  await delay(1000).then(value => console.log(`Done with ${value}`)); // Done with 100

  console.log('task4');
  await getUserData();

  console.log('task5');
  const urls = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK',
  ];
  await arrPromiseResolveParallel(urls);
  await arrPromiseResolveConsecutively(urls);

  console.log('task6');
  await getResolvedPromise(500);

  console.log('task7');
  await fooTask7();

  console.log('task8');
  await fooTask8('https://jsonplaceholder.typicode.com/users');
  await fooTask8('ht://jsonplaceholder.typicode.com/users');

  console.log('task9');
  await fooTask9();

  console.log('task10');
  const musican = new Musican('http://jsonplaceholder.typicode.com/albums');
  console.log(await musican.getAlbums());
})();
