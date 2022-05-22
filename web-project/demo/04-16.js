// 编写一个函数，这个函数接受一个字符串，输出这个字符串反转后的大写形式
// 例如：输入"abcd"，输出"DCBA"

function translateStr(str) {
    let str_copy=str.split("").reverse().join("");
    return str_copy.toUpperCase();
}

// 编写一个函数，这个函数接受一个字符串，这个字符串中含有若干个空格，若干个加号，输出一个字符串，其格式为： 总字符数-空格数-加号数
// 例如：输入"a b c d+ +e"，输出"11-4-2"
// 例如：输入" "，输出"1-1-0"
// 例如：输入"a+", 输出"2-0-1"
// 例如: 输入""，输出"0-0-0"

function getStrMsg(str) {
    let array_str=str.split("");
    let str_i=0,str_sp=0,str_add=0;
    for(const lin of array_str)
    {
        switch(lin)
        {
            case " ":
                str_sp++;
                break;
            case ("+"):
                str_add++;
                break;
            default:
                str_i++;
        }
    }
    console.log((str_i+str_add+str_sp) + "-" + str_sp + "-" + str_add);
}

// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个单词的长度。

// 单词是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 例如"Hello World"，最后一个单词是“World”，长度为5。
// 例如"   fly me   to   the moon  "，最后一个单词是moon，长度是4
// 例如"Today is a nice day"，最后一个单词是day，长度是3

function lengthOfLastWord(str) {
    let array = str.split(" ");
    //console.log(array[array.length-1]);
    let i=1;
    while(array[array.length-i]=="")
    {
        i++;
    }
    //console.log(array[array.length-i]);
    console.log(array[array.length-i].length);
}


// 给定两个字符串s和t ，它们只包含小写字母。

// 字符串t由字符串s随机重排，然后在随机位置添加一个字母。

// 请找出在t中被添加的字母。

// 例如：输入s = "abcd", t = "abcde"，输出"e"
// 例如：输入s = "", t = "y"，输出"y"

function findTheDifference(s, t) {
    let i=0;
    //console.log(s[2]);
    for(;i<s.length;i++)
    {
        if(s[i] != t[i])
        {
            break;
        }
    }
    //console.log(i);
    console.log(t[i])
};

let str1="hello";
console.log(translateStr(str1));

let str2="a b c d+ +e";
getStrMsg(str2);

let str3="   fly me   to   the moon  ";
lengthOfLastWord(str3);

let a="abcd", b="abcde";
findTheDifference(a,b);