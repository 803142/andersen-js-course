import './styles/main.css';
import { foo, createCb } from './asynchronous-programming/task1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task2';

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
