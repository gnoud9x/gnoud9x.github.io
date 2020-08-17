//Bài 1
function checkStringExist(str, checkStr) {
    if (str.includes(checkStr)) {
        return true
    }
    else {
        return false
    }
}
console.log(checkStringExist("A new world", "wo"))

//Bài 2
function shortenString(str) {
    return str.slice(0, 8) + "...";
}
console.log(shortenString("Xin chào các bạn"))

//Bài 3
function capitalizeString(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    return splitStr.join(' ')
}
console.log(capitalizeString("một hai ba bốn"))

//Bài 4
function repeatString(str) {
    let newStr = str;
    for (i = 0; i < 9; i++) {
        newStr += str
    }
    return newStr
}
console.log(repeatString('a'))

//Bài 5
function repeatStringWithDash(str) {
    let newStr = str;
    for (i = 0; i < 9; i++) {
        newStr += `-${str}`
    }
    return newStr
}
console.log(repeatStringWithDash('a'))

//Bài 6
function repeatStringNTimes(str, n) {
    let newStr = str;
    for (i = 0; i < (n - 1); i++) {
        newStr += `-${str}`
    }
    return newStr
}
console.log(repeatStringNTimes('a', 5))

//Bài 7
function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString("Hello"))

//Bài 8
function palindromeCheck(str) {
    let removedSpacesText = str.split(" ").join("").toLowerCase()
    return removedSpacesText === removedSpacesText.split("").reverse().join("")
}
console.log(palindromeCheck("Race car"))

//Bài 9
function minNumbers(arr) {
    minNum = Math.min(...arr);
    return minNum
}
console.log(minNumbers([1, 2, 3, 4, 5]))

//Bài 10
function secondMax(arr) {
    maxNum = Math.max(...arr);
    maxi = arr.indexOf(maxNum);
    arr[maxi] = -Infinity;
    secondMaxNum = Math.max(...arr);
    return secondMaxNum
}
console.log(secondMax([1, 2, 3, 4, 5]))

//Bài 11
function sortStudents(arr) {
    arr.sort();
    arr.reverse();
    return arr
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']))

//Bài 12
function sum() {
    let result = 0;
    for (i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            result += i
        }
    }
    return result
}
console.log(sum())

//Bài 13
function bai13(arr) {
    let n = [];
    for (let i = 0; i < arr.length; i++) {
        let modulo = arr[i] % 2;
        n.push(modulo)
    }
    return n
}
console.log(bai13([1, 2, 3, 5, 6]))

//Bài 14
function bai14(arr) {
    let arrLength = arr.map(ele => ele.length);
    let maxArrLength = Math.max(...arrLength);
    return arr.filter(ele => ele.length == maxArrLength)
}
console.log(bai14(["abc", "abcd", "abcde", "abcdef", "abcdef"]))