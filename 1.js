document.write('hello world' + '<br>');
var a = 4;
if(a > 3){
    while(a<10)
document.write('苹果'+ (a++) +'<br>')
}

else {
    a++
    document.write('橙子'+ a + '<br>');
}

// var score =window.prompt('请输入：');
// score && document.write('你打的数字是'+score);

var num = 123;
if(typeof(num) == 'number'){
    console.log('ok')
}else{
    console.log('not ok')
}

console.log(isNaN(undefined))

function change1(num1){
    switch(num1){
        case '1':
            return document.write('壹');
        case '2':
            return document.write('贰');
        case '3':
            return document.write('叁');
        case '4':
            return document.write('肆');
        case '5':
            return document.write('伍');
        case '6':
            return document.write('陆');
        case '7':
            return document.write('柒');
        case '8':
            return document.write('捌');
        case '9':
            return document.write('玖');
        case '0':
            return document.write('零');
    }
}

function change2(num){
    switch(num){
        case 1:
            return document.write('元');
        case 2:
            return document.write('拾');
        case 3:
            return document.write('佰');
        case 4:
            return document.write('仟');
        case 5:
            return document.write('万');
        case 6:
            return document.write('拾');
        case 7:
            return document.write('佰');
        case 8:
            return document.write('仟');
        case 9:
            return document.write('亿');
        case 10:
            return document.write('拾');
        default:
            return; 
    }
}

function change3(num){
    j = String(num);        //123
    l = String(num).length; //3
    for(var i=0;i<=String(num).length;i++){
        if((j[2]=='0' && j[1]!='0') || 
            (j[1]=='0' && j[2]!='0') ||
            (j[1]=='0' && j[2]=='0') ){
            return;       
        }
        else{
            change1(j[i]);
            change2(l);
        }
        l--;
    }
    document.write('<br>');
}

var i = 10;
console.log(i.toString());
var j = i.toString();
console.log(j.length);






