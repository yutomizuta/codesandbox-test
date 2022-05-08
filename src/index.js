import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * アロー関数
 */
//従来の関数
//
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2

// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ゆうと",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1)

// const { name, age } = myProfile
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2)

// const myProfile = ['ゆうと', 20];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile
// const message4 = `名前は${name}です。年齢は${age}歳です。`;

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
//  const arr1 = [1, 2];
// //  console.log(arr1)
// //  console.log(...arr1)

//  const sumFunc = (num1, num2) => console.log(num1 + num2);
//  sumFunc(arr1[0], arr1[1]);
//  sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["糸賀", "水田", "人見"];

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "水田") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr)

/**
 * 参考演算子
 */
//ある条件　? 条件がtrue時　: 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1)

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を越えています！' : '許容範囲内です';
// }
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2){
//   console.log("１か２はtrueになります");
// }
// if (flag1 && flag2){
//   console.log("１も２もtrueになります");
// }

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "なにか設定されました";
// console.log(fee2);
