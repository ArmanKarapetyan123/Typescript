"use strict";
const text = "THIS IS A TEXT";
const num = 9;
const isRight = true;
function toLowercase(str) {
    console.log(str.toLowerCase());
}
function multiplying(number) {
    console.log(number * 2);
}
function checking(variant) {
    if (variant) {
        console.log("Checked");
    }
    else {
        console.log("Not checked");
    }
}
toLowercase(text);
multiplying(num);
checking(isRight);
