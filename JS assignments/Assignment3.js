console.log("Question:1");
for(var i=1;i<=5;i++)
{
    var pattern='';
    for(var j=1;j<=i;j++)
    {
        pattern+='*';
    }
    console.log(pattern);
}

console.log("Question:2");
var p=1;
for(var i=4;i>=1;i--)
{
    var pattern1='';
    for(var j=1;j<i;j++) 
    pattern1+=' ';
    for(var k=1;k<=p;k++) pattern1+='*';
    console.log(pattern1);
    p+=2;
}

console.log("Question:3");
var q=0;
for(var i=4;i>=1;i--)
{
    var pattern2='';
    for(var j=1;j<=q;j++) 
    pattern2+=' ';
    for(var k=1;k<2*i;k++) pattern2+='*';
    console.log(pattern2);
    q++;
}