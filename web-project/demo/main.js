

let nums = [-1,0,3,5,9,12], target = 9;

var search = function(nums, target) {
    let l = 0,r = nums.length - 1;
    let mid;
    while(l<=r)
    {
        mid = parseInt((l+r)/2);
        if(nums[mid] == target)
        {
            return mid;
        }else if(nums[mid]>target)
        {
            r = mid-1;
        }else
        {
            l = mid+1;
        }
    }
    return -1;
};

search(nums,target);
function Obj() {
    this.name = 'ViavaCos';
}

Obj.prototype.fullName = '尼古拉斯·赵四';

var obj = new Obj();

console.log( obj.__proto__.fullName );  //  尼古拉斯·赵四

console.log(obj.prototype === obj.__proto__);

console.log(Object.getPrototypeOf( obj) === obj.__proto__ ); // true  说明地址一致