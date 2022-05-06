// ESM : ECMA SCRIPT MODULE (import, export 방식)
// NodeJS에서는 ESM을 지원하지 않고, 기본적으로 CommonJS라는 방식을 제공
// 고로 NodeJS 환경에서는 import나 export 키워드를 사용하지 않고, 
// import 대신에 require()라는 함수를 사용한다.
// export 대신에 module.exports를 사용

// import autoprefixer form 'autoprefixer' 동일
// const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

// 간소화 표현 방법
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}