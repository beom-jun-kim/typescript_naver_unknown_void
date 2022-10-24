// unknown : 변수의 타입을 미리 정하지 못할때

// let a: unknown;

// if (typeof a === 'number') {
//     let b = a + 1;
// }

// if (typeof a === 'string') {
//     let b = a.toUpperCase();
// }


// void : 아무것도 return하지 않는 함수를 대상으로 사용
// function hello(){
//     console.log('x');
// }

// never : 함수가 절대 return 하지 않을 때 발생
// function hello(name: string | number) {
//     // return "x"
//     // throw new Error("xxx");
//     if (typeof name === "string") {

//     } else if (typeof name === "number") {

//     } else {
//         name
//     }
// }

