/**
 * Реализовать функцию createGenerator в этом файле, и экспортировать ее.
 *
 * При каждом вызове метода .next() происходит возврат следующего значения из массива
 * Когда все элементы будут возвращены,
 * следующие вызовы метода .next() должны возвращать строку 'Complete!'
 *
 * В решении функции-генераторы (function*) не использовать.
 *
 * const generator = createGenerator([1, '6', 3, 2]);
 * generator.next(); -> 1
 * generator.next(); -> '6'
 * generator.next(); -> 3
 * generator.next(); -> 2
 * generator.next(); -> 'Complete!'
 * generator.next(); -> 'Complete!'
 */
class Generator {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  next() {
    const nextElement = this.array[this.index] || 'Complete!';
    this.index += 1;
    return nextElement;
  }
}

export default function createGenerator(array) {
  return new Generator(array);
}
