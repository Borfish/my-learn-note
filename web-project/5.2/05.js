// 实现convert()函数，将数组list转为如下的树型结构，要求list值不能被改动

// 入参
const list = [
  { id: 3, text: '杭州市', parentId: 1 },
  { id: 5, text: '嘉兴市', parentId: 1 },
  { id: 10, text: '绍兴市', parentId: 1 },
  { id: 11, text: '宁波市', parentId: 1 },
  { id: 9, text: '南京市', parentId: 4 },
  { id: 7, text: '苏州市', parentId: 4 },
  { id: 2, text: '滨江市', parentId: 3 },
  { id: 13, text: '玄武市', parentId: 9 },
  { id: 12, text: '姑苏市', parentId: 7 },
  { id: 6, text: '西湖市', parentId: 3 },
  { id: 8, text: '拱墅市', parentId: 3 },
  { id: 4, text: '江苏省' },
  { id: 1, text: '浙江省' },
]

// 输出
const result = [
  {
    "id": 4, "text": "江苏省",
    "children": [
      {
        "id": 9, "text": "南京市", "parentId": 4,
        "children": [{ "id": 13, "text": "玄武市", "parentId": 9 }]
      },
      {
        "id": 7, "text": "苏州市", "parentId": 4,
        "children": [{ "id": 12, "text": "姑苏市", "parentId": 7 }
        ]
      }
    ]
  },
  {
    "id": 1, "text": "浙江省",
    "children": [
      {
        "id": 3, "text": "杭州市", "parentId": 1, "children": [
          { "id": 2, "text": "滨江市", "parentId": 3 },
          { "id": 6, "text": "西湖市", "parentId": 3 },
          { "id": 8, "text": "拱墅市", "parentId": 3 }
        ]
      },
      { "id": 5, "text": "嘉兴市", "parentId": 1 },
      { "id": 10, "text": "绍兴市", "parentId": 1 },
      { "id": 11, "text": "宁波市", "parentId": 1 }
    ]
  }
]
let arr = new Array(list.length);
function tr(arr,i,j) //i代表自己，j代表儿子，头父为-1
{
  if(arr[i].parentId==undefined)
  {
    console.log(`"id":${arr[i].id},"text":${arr[i].text}`);
    console.log(`"children":[`);
    for(let j=0;j<arr.length;j++)
    {
      if(arr[j].parentId==i)
      {
        
      }
    }
  }

  // if(arr[i].parentId!=undefined)这里写错了，思路是从叶子出发
  // {
  //   tr(arr,arr[i].parentId,i);
  //   console.log(`"id":${arr[i].id},"text":${arr[i].text},"parentId":arr[i].parentId`);
  //   arr[i]=1;
  // }

  // if(j)
  // {
  //   console.log(`"id":${arr[i].id},"text":${arr[i].text}`);
  //   console.log(`"children":[`);
  // }
}

function convert(arr) {
  //这里找头
}