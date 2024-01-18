/*
    Изменится ли ваше решение, если нужно проверять только такой набор скобок: <,[,{ ?
    Нужно будет убрать из close и openAndClose соответсвуюие значения для корректной работы функции
    (чтобы игнорировались ( и ) скобки)
*/
/**
 * The function checks the correct placement of parentheses
 * @param {string} string 
 * @returns {number} 1 - incorrect placement, 0 - correct placement
 */
function checkSyntax(string){
    const close = [">", "]", "}", ")"];
    const openAndClose = {"<": ">", "[":"]", "{":"}", "(":")",}
    const stack = [];
    for(let i = 0; i < string.length; i++){
        //Если встретили открывающую скобку, добавляем ее в стек
        if(openAndClose.hasOwnProperty(string[i])) {
            stack.push(string[i]);
        }
        //Если встретили закрывающую скобку, снимаем со стека последнюю открывающую
        //и проверяем по соответвующему объекту, правильная ли скобка стоит, иначе возвращаем 1
        if(close.includes(string[i])) {
            if(openAndClose[stack.pop()] !== string[i]){
                return 1;
            }
        }
    }
    //Если стек пуст, возвращаем 0, иначе 1
    return stack.length === 0 ? 0 : 1;
}

/**
 * Объяснение метода:
 * Так как нам нужно смотреть на корректную рассановку скобок, то будем использовать стэк,
 * ведь если скобка была открыта, то она же и должна быть закрыта (последний зашел, первый вышел),
 * иначе будет ошибка
 */
console.log(checkSyntax("---(++++)----") );
console.log(checkSyntax("") );
console.log(checkSyntax("before ( middle []) after ") );
console.log(checkSyntax(") (") );
console.log(checkSyntax("} {") );
console.log(checkSyntax("<(   >)") );
console.log(checkSyntax("(  [  <>  ()  ]  <>  )") );
console.log(checkSyntax("   (      [)") );