//첫째날
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


console.log('%d + %d = %d',273,52,273 + 52)
console.log('숫자: %d + %d = %d', 273, 52, 273 + 52)
console.log('문자열: %s', 'hello world ..!','특수 기호와 상관 없음')
console.log('JSON: %j', { name: 'RintlanTta'})

var map = { name: 'RintlanTta'}
console.log(map.name)

map.name = '백인길'
console.log(map.name)

map.이하민 = '010-3333-3333'
console.log(map.이하민)  
key : value 형식
*/
//둘째날
/*
//시간 측정을 시작합니다
console.time('alpha');

var output = 1;
for (var i = 1; i <= 10; i++ )
}
console.log('Result:',output);
console.timeEnd('alpha');

// 시간 측정을 종료합니다

//ANCI코드
console.log('\u001b[31m', 'Hello world .. !');
console.log('\u001b[32m', 'Hello world .. !');
console.log('\u001b[33m', 'Hello world .. !');
console.log('\u001b[34m', 'Hello world .. !');
console.log('\u001b[35m', 'Hello world .. !');
console.log('\u001b[1m' , 'Hello world .. !');
console.log('\u001b[31m', 'Hello world .. !');
console.log('\u001b[32m', 'Hello world .. !');
console.log('\u001b[33m', 'Hello world .. !');
console.log('\u001b[34m', 'Hello world .. !');
console.log('\u001b[35m', 'Hello world .. !');
console.log('\u001b[36m', 'Hello world .. !');
//초기화합니다
console.log("\u001b[0m");


	//process.argv
process.argv.forEach(function (item,index) {
	
	//출력합니다
	console.log(index + ':' + typeof(item) + ':' , item );
	
	//실행 매개변수에 --eixt 가 있을때
	if(item == '--exit'){
		//다음 실행 매개변수를 얻습니다.
		var exitTime = Number(process.argv[index = 1]);
		//일정 시간 후 프로그램을 종료합니다.
		setTimeout(function (){
			process.exit();
		});
	}
	
});
	//p.62 콘솔창에  node variable --exit 10000 을치면 10초후에 종료되야한다는데 안됨
	//console.log('-process.env:',process.env);	뭐가 많이 뜸 뭔지모름
//console.log(process.version); js 버젼인듯
//console.log(process.versions); 이런 저런 버젼이 다 나옴 node 버젼도 나옴
//console.log(process.arch); 운영체제 몇비트인지 나옴
//console.log(process.platform); linux 라고 뜸
//console.log(process.connected); undefined라고 뜸
//console.log(process.execArgv); []라고 뜸
//console.log(process.exitCode); 
//console.log(process.mainModule); 뭐가 많이 뜸
//console.log(process.release); 뭔진 모르겟는데 링크 두개 뜸 개신기함
//console.log(process.memoryUsage()); 현재 사용 메모리가 뜬다
//console.log(process.uptime()) 현재 프로그램 실행속도가 뜬다
//console.log(process.uptime())
//console.log(process.uptime())
//console.log(process.uptime())
	//export 객체와 모듈
//모듈을 추출합니다
var module = require('./exports.js')
//모듈을 사용합니다
console.log('abs(-273) = %d' , module.abs(-273))
console.log('circleArea(3) = %d', module.circleArea(3))
		//CHAPTER4기본내장 모듈
var os = require('os')

//console.log(os.hostname()) 호스트이름인듯
//console.log(os.type()) 운영체제 뭐쓰는지나옴
//console.log(os.platform()) 운영체제 뭐쓰는지나옴
//console.log(os.arch()) 운영체제 몇비트인지나옴
//console.log(os.release()) 뭔지 모름; 이까지만 하자
	//4.2url모듈
//var url = require('url')
//var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look/php?p_code=B4250257160 ) 여기서 쓴 url 주소에서 객체를 여러개 만들어냅니다
//console.log(parsedObject) 어떤객체가 있는지 확인이 가능합니다.
	//Query string 모듈
// 모듈을 추출합니다
var url = require('url')
var querystring = require('querystring')

//모듈을 사용합니다
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look/php?p_code=B4250257160') //이거랑
//console.log(querystring.parse(parsedObject.query)) 											  이거두줄을 	이것은
//console.log(parsedObject.query)																  			   이거랑 대괄호차이밖에없다     
//console.log(url.parse('http://www.hanbit.co.kr/store/books/look/php?p_code=B4250257160').query) 이거로 표현가능하다는걸 알아냈다
//console.log(querystring.parse(parsedObject.query) , '<=요것은' , typeof(querystring.parse(parsedObject.query))) 이해안된다면 이거 실행해보기
//console.log(parsedObject.query, ' <=요것은' , typeof(parsedObject.query))
	//util모듈
//모듈을 추출합니다
//var util = require('util')

//모듈을 사용합니다
//var data = util.format('%d + %d = + %d',52,273,52 + 273) 이것은
//console.log(data)											실행창으로 나가지않고 그대로활용할수 잇다는 것에 큰 의미가 있는것같다
	//crypoto 모듈
var crypto = require('crypto')
//모듈을 추출합니다
var shasum = crypto.createHash('sha256') 이게 해쉬를 사용할수 있게 만들고(해쉬란 암호다)'sha256'도명령어라 마음대로 변경할수없다
shasum.update('crypto_hash')			 이게 해시할 아이디나 문자를 등록하게 하고
console.log(shasum.digest('hex'))		 이게 출력할때 쓰는 명령어다'hex'같은것도 명령어라 마음대로 변경할수없다
//모듈을 추출합니다
var crypto = require('crypto')

//변수를 선언합니다
var key ='아무도 알지 못하는 나만의 비밀 키'
var input = 'PASSWORD'

//암호화

var cipher = crypto.createCipher('aes192', key)
cipher.update(input,'utf','base64')
var cipheredOutput = cipher.final('base64')

//암호화 해제
var decipher = crypto.createDecipher('aes192',key)
decipher.update(cipheredOutput, 'base64', 'utf8')
var decipheredOutput = decipher.final('utf8')

//출력합니다
console.log('원래 문자열:' + input)
console.log('암호화:' + cipheredOutput)
console.log('암호화 해제:' + decipheredOutput) 이건 원래 문자열로 돌릴수있는 암호화 이다 .

*/
//모듈을 추출합니다
var url = require('url')
console.log(url.parse('https://github.com/kikiruk/first-step.git'))
console.log('https://github.com/kikiruk/first-step.git')











