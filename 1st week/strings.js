const string1 = 'Look inside in my soul and';
const string2 = 'you can find gold and may be get rich'
const string3 = string1.concat(string2);
const string4 = '        your son dope nigga!       ';

//----------------------------------------------------------String Methods ----------------------------------------------------------------
console.log(string1.charAt(6));
console.log(string1.charCodeAt(6));
console.log(string1.concat(string2));
console.log(string1.endsWith('and'));
console.log(String.fromCharCode(110));
console.log(string2.includes('find'));
console.log(string1.indexOf('side'));
console.log(string3.lastIndexOf('and'))
console.log(string3.match(/and/g))
console.log(string3.repeat(2))
console.log(string3.replace(/gold/g, 'Gold'))
console.log(string1.search('soul'))
console.log(string1.slice(7, 11))
console.log(string1.split(' '))
console.log(string1.startsWith('Look'))
console.log(string2.substr(13, 4))
console.log(string1.toLowerCase())
console.log(string1.toUpperCase())
console.log(string4.trim())
console.log(string1.at(0))