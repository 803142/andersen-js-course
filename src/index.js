import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';
import { delay } from './asynchronous-programming/task3';
import { getUserData } from './asynchronous-programming/task4';
import {
  arrPromiseResolveParallel,
  arrPromiseResolveConsecutively,
} from './asynchronous-programming/task5';

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

console.log('task3');
delay(1000).then(value => console.log(`Done with ${value}`)); // Done with 100

console.log('task4');
getUserData();

console.log('task5');
const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];
arrPromiseResolveParallel(urls);
arrPromiseResolveConsecutively(urls);
