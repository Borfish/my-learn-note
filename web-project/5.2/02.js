// 使用js编写函数sum，使得小数计算符合结果
// 例如
// sum(0.1,0.2) ==== 0.3
// sum(0.01,0.2) === 0.21
function add(a,b)
{
    let str1 = a.toString().split(".");
    console.log(str1);
    let str2 = b.toString().split(".");
    let ret=0;
    if(str1.length>=2 && str2.length>=2)
    {
        let a_i=str1[0];
        let a_f=str1[1];
        //console.log(a_f);
        let b_i=str2[0];
        let b_f=str2[1];
        //console.log(b_f);
        let c_f = a_f.length-b_f.length;
        ret = parseInt(a_i)+parseInt(b_i);
        if(c_f>=0)
        {
            let lin = parseInt(b_f)*(10**c_f)+parseInt(a_f);
            //console.log(Math.max(a_f.length,b_f.length));
            ret+=lin/(10**Math.max(a_f.length,b_f.length));
            return ret;
        }else
        {
            let lin = parseInt(a_f)*(10**-c_f)+parseInt(b_f);
            ret+=lin/(10**Math.max(a_f.length,b_f.length));
            return ret;
        }
    }
}

console.log(add(0,1));