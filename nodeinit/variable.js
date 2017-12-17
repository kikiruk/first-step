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
//셋째날
/*
//file system 모듈
var fs = require('fs')

//모듈을 사용합니다.
fs.readFile('textfile.txt','utf8',function(error,data){
	console.log(data)
});
//fs.readFile()의 매개변수function()의 매개변수는 꼭 똑같이 적을 필요는 없지만 두번째오는 매개변수가 데이터를 나타내고 첫번째가 에러인것은 맞다
//모듈을 추출합니다.
var fs = require('fs')

//변수를 선언합니다.
var data = 'Hello world..!'

//모듈을 사용합니다.
fs.writeFile('TextFileOtherWrite.txt','data','utf8',function(error){
	console.log('WRITE FILE ASYNC COMPLETE')
})

fs.writeFileSync('TextFileOtherWriteSync.txt',data,'utf8')
console.log('WRITE FILE SNIC COMPLETE')
//이 코드를 진행하면 파일이 생긴다
//동기 처리를 하는 메서드의 예외 처리
var fs = require('fs')
try{
	var data = fs.readFileSync('textfile.txt','utf8');
	console.log(data)
}catch(e){
	console.log('여기서부터' + e + '여기까지')  //여기서 catch에 매개변수에 에러 매시지가 입력된다
	}
}
//파일을 씁니다
try{
	fs.writeFileSync('NOTtextfile.txt','hello world.','utf8');
	console.log('FIlE WRITE COMPLETE')
}catch(e){
	console.log('error')
}
-----------------------------------------------------------------------------------------------------------------------
//파일을 읽습니다
fs.readFile('textfile.txt','utf8',function(error,data){ //2번째 매개변수 utf8 은 바꿔서는 안된다 정해진것이다
	if (error){
		console.log('error')
	}else{
		console.log(data);
	}
});
//파일을 씁니다
fs.writeFile('textfile.txt','hello world..!',function(error,data){
	if(error){
		console.log('error');
	}else{
		console.log('FILE WRITE COMPLETE')
	}
})
-------------------------------------------------------------------------
//return 을 이용한 오류처리 node.js 프로그래맹은 들여쓰기가 많기 때문에 
//한줄이라도 줄이는 것이 굉장히 중요하다고 함
//모듈을 추출합니다
var fs = require('fs')

//파일을 읽습니다
fs.readFile('textfile.txt','utf8',function(error,data){
	//오류가 발생하면 곧바로 리턴
	if(error){return console.log('error');}
	//원하는 처리
	console.log(data);
})
//파일을 씁니다
fs.writeFile('textfile.txt','Hello World..!','utf8',function(error){
	if(error){console.log('error');}
	//원하는처리
	console.log('FILE WRITE COMPLETE');
})
		//CHAPTER 5 이벤트
	//p.93 이벤트 연결
//process 객체에 exit 이벤트를 연결합니다.
process.on('exit',function(code){
	console.log('exit program')
})
//코드 5-4 이벤트 연결
//process 객체에 uncaughtException 이벤트를 연결합니다.
process.on('exit',function(code){
	console.log('안녕히 가거라 ^_^..!')
})
//process 객체에 uncaughtException 이벤트를 연결합니다.
process.on('uncaughtException',function(error){
	console.log('예외가 발생했군 ^_^ 봐주겠다 ^_^..!')
})
//2초간격으로 3번 예외를 발생시깁니다
var count = 0;
var test = function(){
	//탈출 코드
	count = count + 1
	if(count > 3) {return}
					 //예외를 강제로 발생시킵니다
	setTimeout(test,2000);
	error.error.error();
}

setTimeout(test,2000);
// 코드 5-6 setMaxListeners()메서드
process.setMaxListeners(15);
// 이벤트를 연결합니다
process.on('exit',function(){});
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
process.on('exit',function(){})
//p.98 코드5-8 이벤트 제거
//변수를 선언합니다.
var onUncatghtException = function(error){
	//출력합니다
	console.log('예외가 발생햇군 ^_^ 이번에만 봐주겠다 ^_^..!')
	//이벤트를 제거합니다
}
var timeout = function(error){
	setTimeout(timeout,2000)
	console.log('바이바이')}
process.on('exit',timeout)
//process 객체에 uncountException 이벤트를 연결합니다
process.on('uncaughtException',onUncatghtException)
var count = 0

var test = function(){
	count = count + 1
	if(count > 1){process.removeLIstener('uncaughtException',onUncatghtException)}
	setTimeout(test,2000)
	error.error.error()
};   setTimeout(test,2000)

//예외를 2초마다 생성하고 2번까지 허용하고 그다음부터는 자비없이 종료하게끔 해놨는데 아예 예외가 안뜨는이뉴는뭔지모르겠음
// p.100 코드 5-9 once 메서드
//process 객체에 uncaughtExeption 이벤트를 연결합니다
process.once('uncaughtException', function(error){
	console.log('예외가 발생했군^_^ 이번에만 봐주겠다 ^_^..!');
})
process.on('exit',function(error){
	console.log('바이바이')
})
//2초 간격으로 예외를 발생시킵니다.
var test = function(){
	setTimeout(test,2000)
	error.error.error()
};
setTimeout(test,2000)
//p.101 이벤트 강제 발생
//exit 이벤트를 연결합니다.
process.on('exit',function(code){
	console.log('안녕히 계세요...!')
})
//이벤트를 강제로 실행시킵니다
emit('exit'),2000)
process.emit('exit')
process.emit('exit')
process.emit('exit')
console.log('프로그램 실행 중')
//p.102 exit() 메서드
//exit 이벤트를 연결합니다
process.on('exit',function(code){
	console.log('안녕히 계세요..!');
})
//프로그램을 종료합니다
process.exit()
process.emit('exit')
process.emit('exit')
process.emit('exit')
console.log('프로그램 실행 중')
//p.104 EventEmmitter 객체의 매서드
//EventEmmitter객체를 생성합니다
var costum = new process.EventEmitter

costum.on('tick',function(code){
	console.log('이벤트를 실행합니다.^_^');
});

costum.emit('tick')
//p.105 rint.js 파일 이용
var rint = require('./rint')

//이벤트를 연결합니다
rint.timer.on('tick',function(code){
	console.log('이벤트를 실행합니다..!')
})
//rint.js 파일에서 이벤트를 강제 발생시켜서 1초마다 실행된다
*/
//넷째날
/*
		//CHAPTER6 http 모듈
//p.115 웹서 버 생성과 실행
var http = require('http')
var server = http.createServer()
server.listen(52273)
--------------------------------------------------------------------------
//p.116 server 객체의 close 메서드
var server = require('http').createServer();
//서버를 실행합니다
server.listen(52272,function(){
	console.log('server Running at http://127.0.0.1:52273')
})

//10초후 함수를 실행합니다.
var test = function(){
	//서버를 종료합니다
	server.close()
} 
setTimeout(test,10000) //이 메서드가 함수를 실행및 실행시간을 실행시켜준다
-------------------------------------------------------------------------
//p.117 server 객체의 이벤트
var http = require('http')
//server 객체를 생성합니다
var server = http.createServer();

//server객체에 이벤트를 연결합니다
server.on('request',function(code){
	console.log('Request On')
})

server.on('connection',function(code){
	console.log('Connection On')
})

server.on('close',function(code){
	console.log('close On')

})

server.listen(52467)
--------------------------------------------------------------------------
//p.119  간단한 응답 메시지 작성
require('http').createServer(function(request,response){
	//응답합니다
	response.writeHead(200, { 'Content-Type': 'text/html' })
	response.end('<H1>hello web Server with Node.js</H1>')
}).listen(53373,function(){
	console.log('server Running at http://127.0.0.1:52273')
})
//왜안되지 ..........아마도 다른 컴퓨터라 그런거 같다 콘솔창에서는 값이나오는데 웹 브라우저에서 접속할수 없다고 뜬다
--------------------------------------------------------------------------------------------------------------
//p.121 HTML 파일 제공
var fs = require('fs')
var http = require('http')

http.createServer(function(request, response){
	//HTML 파일을 읽습니다.
	fs.readFile('HTMLpage.html',function(error,data){
		response.writeHead(200,{'Content-type':'text/html'})
		response.end(data)
	})
}).listen(52254,function(){
	console.log('Server Running at http://127.0.0.1:52273')
})
//goorm.io 에서 도메인을 등록하여 브라우져에 띄우는걸 성공하였다
--------------------------------------------------------------------------
//p.123,124 이미지,음악파일제공
var fs = require('fs')
var http = require('http')

//52273번 포트에 서버를 생성하고 실행합니다.
http.createServer(function (request,response){
	fs.readFile('Chrysanthemum.jpg',function(error,data){
		response.writeHead(200,{'Content-Type': 'image/png'})
	})
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273')
})
http.createServer(function (request,response){
	fs.readFile('kalimba.mp3', function (error,data){
		response.writeHead(200,{'Content-Type': 'audio/mp3'})
		response.end(data);
	})
}).listen(52274,function(){
	console.log('Server Running at http://127.0.0.1:52274')
})
//이미지 파일을  goorm.io로 가져오는법을 몰라서 출력을 못하겠다
-------------------------------------------------------------------------
//p.126 쿠키 저장 및 출력
var http = require('http')
http.createServer(function(request,response){
	//변수를 선언합니다
	var date = new Date();
	date.setDate(date.getDate() + 7)
	
	//쿠키를 입력합니다
	response.writeHead(200,{
		'Content-Type': 'text/html',
		'Set-Cookie': [
			'breakfast = toast;Expires = ' +date.toUTCString(),
			'dinner = chicken'
		]
	})
	//쿠키를 출력합니다.
	response.end('<h1>' + request.headers.cookie + '</h1>')
}).listen(52233,function(){
	console.log('서버가 http://127.0.0.1:52233에서 실행중입니다')
})
//쿠키가 안떳다가 2번쨰 실행때 뜨긴드는데 다른 이상한 글귀들도 뜬다
----------------------------------------------------------------------------
//p.128 Location 속성을 사용한 페이지 강제이동
var http = require('http')

// 웹 서버를 생성 및 실행합니다
http.createServer(function(request,response){
	response.writeHead(302,{'Location':'http://www.hanbit.co.kr'})
	response.end(0)
}).listen(52233,function(){
	console.log('서버가 http://127.0.0.1:52233에서 실행중입니다.')
})
--------------------------------------------------------------------------------
//p.130 404 웹 페이지를 찾을 수 없습니다.
var http = require('http')

http.createServer(function(request,response){
	response.writeHead(404)
	response.end()
}).listen(52233,function(){
	console.log('서버가 http://127.0.0.1:52233에서 실행중입니다')
})
//책과는 다르게 웹페이지를 찿을수 없다고 뜬다. 이게 맞을지도?
---------------------------------------------------------------------------------
//p.132 서버 생성 및 실행
var http = require('http')
var fs = require('fs')
var url = require('url')

//서버를 생성 및 실행합니다
http.createServer(function(request,response){
	//변수를 선언합니다
	var pathname = url.parse(request.url).pathname
	
	//페이지를 구분합니다
	if(pathname == '/'){
		fs.readFile('index.html',function(error,data){
			//응답합니다
			response.writeHead(200,{'Content-Type': 'text/html'})
			response.end(data)
		})
	}else if(pathname == '/OtherPage'){
		//OtherPage.html 파일을 읽습니다
		fs.readFile('OtherPage.html',function(error,data){
			response.writeHead(200,{'Content-Type': 'text/html'})
			response.end(data)
		})
	}
}).listen(52233,function(){
	console.log('Server Running at http://127.0.0.1:52233')
})
//url 모듈에 parse 메서드로 페이지에 옵션을 추출하여 그중에 pathname을 따내서 사용하였다
//또한 if 와 else if 구문을 사용하여서 구현시켰다.
--------------------------------------------------------------------------------------------
//p.135 method 속성을 이용한 페이지 구분
var http = require('http')
//모듈을 사용합니다
http.createServer(function(request,response){
	if (request.method == 'GET'){
		console.log('GET 요청입니다')
	}else if (requset.method == 'POST'){
		console.log('POST 요정입니다')
	}
}).listen(52233,function(){
	console.log('Server Running at http://127.0.0.1:52233')
})
*/
//다섯째날
/*
//p.136 GET 요청 매개변수 추출
 var http = require('http')
 var url = require('url')
 
 //모듈을 사용합니다
 http.createServer(function(request,response){
	 var query = url.parse(request.url,true).query
 	//GET 요청 매개변수 출력
	 response.writeHead(200,{'Content-Type': 'text/html'})
	 response.end('<h1>'+JSON.stringify(query)+'<h1>')
	 }).listen(52233,function(){
	 console.log('Server running at http://127.0.0.1:52233')
 })
//JSON.stringify(query)이것은 JSON 형태로 출력되게끔 한다
-------------------------------------------------------------------------
//p.137 POST 요청 데이터 추출
//모듈을 추출합니다.
var http = require('http')
//모듈을 사용합니다
http.createServer(function(request,response){
	request.on('data',function(data){
		console.log('POST Data:',data)
	})
}).listen(52233)
-------------------------------------------------------------------------------------
//p.138 request.post.js 파일
//모듈을 추출합니다.
var http = require('http')
var fs = require('fs')

//모듈을 사용합니다.
http.createServer(function(request,response){
	if(request.method == 'GET'){
		
		fs.readFile('HTMLpage.2.html',function(error,data){
		console.log('GET 방식으로 접속되었습니다.')
			response.writeHead(200,{'Content-Type':'text/html'})
			response.end(data)
		})
	
	}else if(request.method == 'POST'){
		request.on('data',function(data){
			console.log('POST 방식으로 접속되었습니다.')
				response.writeHead(200,{'Content-Type':'text/html'})
				response.end('<h1>' + data + '</h1>')
		})
		
	}
		
	
}).listen(52233,function(){
	console.log('Server Running at http://127.0.0.1:52233')
})
//GET 방식 접속은 일반적으로 하면 가능, POST 방식으로 접근했을시에는 request(data,function(){})이런식으로 이벤트로 잡아내어서한다
-------------------------------------------------------------------------------------------------------------------------
//p.140 쿠키 생성 및 추출
//모듈을 추출합니다
var http = require('http')
//모듈을 사용합니다
http.createServer(function(request,response){
	//GET COOKIE
	var cookie = request.headers.cookie
	
	//SET COOKIE
	response.writeHead(200, {
		'Content-Type':'text/html',
		'Set-Cookie': ['name = RintIanTta', 'region = Seoul']
	})
	//응답합니다
	response.end('<h1>' + JSON.stringify(cookie) + '</h1>')
}).listen(52233,function(){
	console.log('Server Running at http://127.0.0.1:52233')
})
//goorm.io 에서 자체적으로 나오는 쿠키때문에 이상한 글씨들이 같이 나온다. 

//p.141 쿠키 분해
var http = require('http')
-------------------------------------------------------------------------------------------------------------------------

http.createServer(function(request,response){
	//deleteCookie(response)
	//return
	
	//쿠키가 있는지 확인
	if (request.headers.cookie){
		//쿠키를 추출하고 분해합니다
		console.log('쿠키추출완료')
		var cookie = request.headers.cookie.split(';').map(function(element){
			var element = element.split('=')
			return{
				key: element[0],
				value: element[1]
			}
		})
	response.end('<h1>' + JSON.stringify(cookie) + '</h1>')
		}else {
			console.log('쿠키생성완료')
			//쿠키를 생성합니다.
			response.writeHead(200, {
				'Content-Type':'text/html',
				'Set-Cookie': ['name = KIRUK1234', 'region = Seoul']
			})
		//응답합니다
			response.end('<h1>쿠키를 생성했습니다</h1>')
		}
}).listen(52233,function(){
	console.log('Server running at http://127.0.0.1:52233')
})
//쿠키를 생성하고 추출하고 분해까지 해보았다 분해하는 방법을 연구하려고하는데 goorm.io 자체 쿠키때문에 영항을
//많이받아서 저 구문을 연구하지 못하였다어쩄든 .map 과  .split 을 썻다는것만 기억하자
-------------------------------------------------------------------------------------------------------
//p.148 ejs 모듈을 사용한 웹 페이지 제공
var http = require('http')
var fs = require('fs')
var ejs = require('ejs')

http.createServer(function(request,response){
	//ejsPage.ejs 파일을 읽습니다
	fs.readFile('ejsPage.ejs','utf8',function(error,data){
		response.writeHead(200,{ 'Content-Type':'text/html' })
		response.end(ejs.render(data))
	})
}).listen(52233,function(){
	console.log('Server running at http://127.0.0.1:52233')
})
//$ npm install ejs 를 이용해 ejs 외부모듈을 사용하여서 ejs.render을 이용하여서 ejs파일을 html로 컴파일하여서 사용함
//<% Code %><%= Value %>
---------------------------------------------------------------------------------------------------------------------
//p.153 jade 모듈
var http = require('http')
var fs = require('fs')
var jade = require('jade')

http.createServer(function(request,response){
	fs.readFile('JadePage.jade','utf8',function(error,data){
		//모듈을 사용합니다
		var fn = jade.compile(data);
		response.writeHead(200,{'Content-Type':'text/html'})
		response.end(fn())
	})
}).listen(52233,function(){
	console.log('Server Running at http://127.0.0.1:52233')
})
// 링크가 안뜨기는 하는데 왜그런지는 모르겠다 대충 이렇게 쓰느거다라는것만 알아두고 넘어가자 jade.compile(data) response.end(fn())
----------------------------------------------------------------------------------------------------------------------------------------
var http = require('http')
var fs = require('fs')
var jade = require('jade')
http.createServer(function(request,response){
	fs.readFile('JadePage.jade','utf8',function(error,data){
		//모듈을 사용합니다
		var fn = jade.compile(data);
		response.writeHead(200,{'Content-Type':'text/html'})
		response.end(fn())
	})
}).listen(52233,function(){
	console.log('Server Running at http://127.0.0.1:52233')
})
// 링크가 안뜨기는 하는데 왜그런지는 모르겠다 대충 이렇게 쓰느거다라는것만 알아두고 넘어가자 jade.compile(data) response.end(fn())
---------------------------------------------------------------------------------------------------------------------------
//p.161 jade 코드로 전달한 데이터
var http = require('http')
var fs = require('fs')
var jade = require('jade')

http.createServer(function(request,response){

	fs.readFile('JadePage.jade','utf8',function(error,data){
	//jade모듈을 사용합니다
		var fn = jade.compile(data)
	
		response.writeHead(200,{'Content-Type':'text/html'})
		response.end(fn({
			name: 'RintIanTta'
			discription: 'Hello jade With Node.js..!'
		}))
	})
}).listen(52233,function(){
	console.log('서버가 생성되었습니다')
})
---------------------------------------------------------------------
//p.166 supervisor 외부모듈
//모듈을 추출합니다
var http = require('http')

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'})
	response.end('<h1>Test - File - 4</h1>')
}).listen(52233,function(){
	console.log('Server running at http://127.0.0.1:52233')
})
//$ supervisor variable 을 입력하여서 실행하면 서버를 실시간으로 변경하여서 브라우져에서 결과를 확인할수있다. 
//서버에 오류가 나거나 하면 계속해서 반복된다 주의하자
-------------------------------------------------------------------
//p.169 간단한 웹 서버
require('http').createServer(function(request,response){
	if(request.url == '/') {
		response.write('<!DOCTYPE html>')
		response.write('<html>')
		response.write('<head>')
		response.write('	<title>Forever</title>')
		response.write('</head>')
		response.write('<body>')
		response.write('	<h1>Forever</h1>')
		response.write('</body>')
		response.write('</html>')
		response.end()
	} else {
		//오류을 발생시킵니다
		error.error.error
	}
}).listen(52233,function(){
		  console.log('Server running at http://127.0.0.1:52273')
})
//forever 모듈을 사용하면 오류가 나도 다시 서버를 킬수 있다
------------------------------------------------------------------------------------------
//express 모듈을 사용하여서 기본적인 서버를 구현해보았다
var express = require('express')
var app = express()

app.use(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'})
	response.end('<h1>Hello express</h1>')
})
app.listen(52243,function(){
	console.log('server running at http://127.0.0.1:52243')
})
----------------------------------------------------------------------------------------------------------------
//express  모듈을 사용하여서 send() 메서드를 사용하였고,var output = [] 이런식으로하면 집합을 하나 말들수있다는걸 알았다 
var express = require('express')
var app = express()

app.use(function(request,response){
	//데이터를 생성합니다
	var output = []
	for (var i = 0; i < 3; i++){
		output.push({
			count : i,
			name : 'name -' + i
		})
	}
	
	//응답합니다
	response.send(output)
})
app.listen(52243,function(){
	console.log('server running at http://127.0.0.1:52243')
})
----------------------------------------------------------------------------------------------------------------
//상태 코드만 전달하고 싶을 떄는 response.senDStatus(404)형태로 sendSStatus()메서드를 상
var express = require('express')
var app = express()
app.use(function(request,response){
	//응답합니다
	response.status(404).send('<h1>ERROR</h1>')
})
//서버를 실행합니다
app.listen(52243,function(){
	console.log('server running at http://127.0.0.1:52243')
})
*/












