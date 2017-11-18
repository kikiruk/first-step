
/*
console.log('내 이름은 백인길')
console.log('내 이름은' + ' 백인길')
console.log('내 이름은', '백인길')

console.log('filename:', __filename)
console.log('filename: ' + __filename +'dirname:'+__dirname)
console.log('filename: ' + __filename + '\r\n' +'dirname: '+__dirname)

console.log('output: %d',273)
		CHAPTER3Node.js의 전역 객체
 	console객체

*/
//console.log('%d + %d = %d',273,52,273 + 52)
console.log('숫자: %d + %d = %d', 273, 52, 273 + 52)
console.log('문자열: %s', 'hello world ..!','특수 기호와 상관 없음')
console.log('JSON: %j', { name: 'RintlanTta'})

var map = { name: 'RintlanTta'}
console.log(map.name)

map.name = '백인길'
console.log(map.name)

map.이하민 = '010-3333-3333'
console.log(map.이하민)

// key : value 형식