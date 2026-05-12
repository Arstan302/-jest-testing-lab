// src/stringUtils.js
function capitalize(str) {
 if (!str) return '';
 return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function reverse(str) {
 return str.split('').reverse().join('');
}
function isPalindrome(str) {
 // Удаляем все не-буквенно-цифровые символы и приводим к нижнему регистру
 const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
 return cleaned === cleaned.split('').reverse().join('');
}
module.exports = { capitalize, reverse, isPalindrome };