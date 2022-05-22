// 实现一个sleep方法

function sleep(s, fn) {
  setTimeout(fn,1000*s);
}



// 使用
sleep(10, () => { 
  console.log('10秒过去了')
})