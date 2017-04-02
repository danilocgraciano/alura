console.groupCollapsed("Messages");
console.log("console.log");
console.error("console.error");
console.warn("console.warn");
var num = 12;
if (num > 10) {
    console.error("num > 10");
}
console.assert(num <= 10, "num > 10");
console.groupEnd();

console.table([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

console.table([
    { nome: 'Danilo', idade: 26 },
    { nome: 'Gabriel', idade: 56 }
]);