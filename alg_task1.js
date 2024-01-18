/**
 * Реализовать функцию, на вход которой передаются:
 * массив целых чисел, упорядоченных по возрастанию,
 * целое число.
 * Функция должна найти 2 числа в массиве, 
 * которые в сумме дают переданное вторым параметром число и вернуть их индексы.
 * Если таких чисел нет, то функция должна вернуть пустой объект или массив.
 */

/**
 * The function finds two numbers that add up to the desired number
 * @param {number[]} array Given array sorted in ascending order of numbers 
 * @param {number} number Desired sum
 * @returns {number[]} Array of indexes
 */
function findSum(array, sum){
    let valueToIndex = {};
    //Заполняем наш объект число-его индекс
    array.forEach((item, index) => {
            valueToIndex[item] = index;
    })

    for(let i = 0; i < array.length; i++){
        //Смотрим, есть ли число, равное разности суммы и текущего числа, в объекте
        if(!!valueToIndex[sum - array[i]] && valueToIndex[sum - array[i]] !== i){
            //возвращаем индекс текущего числа и найденного в массиве
            return [i, valueToIndex[sum - array[i]] ]
        }
    }
    
    return [];
}

/**
 * Объяснение алгоритма:
 * По сути, для каждого числа в данном массиве парное к нему число 
 * это разница между желаемой суммой и текущим числом, потому что в сумме с текущим числом они будут давать желаемую сумму
 * Поэтому мы создаем объект где ключ это число из массива, а значение это его индекс в массиве
 * И при проходе по массиву и просто обращаемся к нашему созданному объекту и если в объекте присутсвует нужное нам число, то мы возвращаем массив индексов
 * Иначе, если мы прошли по всему массиву, но так и не нашли нужных нам чисел, мы возвращаем пустой массив
 */

console.log(findSum([2,7,11,15], 9));
console.log(findSum([3,2,4], 6));
console.log(findSum([3,3], 6));
console.log(findSum([2, 9], 8));
console.log(findSum([], 8));
console.log(findSum([-2, -4, -5, 19], 17));
console.log(findSum([-2, -4, -5, -19], -21));
console.log(findSum([2, 2, 2, 2, 2, 2, 2], 4));