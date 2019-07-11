var count=0;
var fibonacci=function(n){
	let startArray=[0,1];
	let fib=function(){
		count+=1;
		startArray=[startArray[1],startArray[0]+startArray[1]];
	}
	for( let i=0; i<n-1; i+=1){
		fib();
	}
	return startArray[1];
};
document.write('example2 fibonacci: n=10; result='+fibonacci(10)+'; invokes:'+count+'<br>');

var count=0;
var factorial=function(n){
	let number=1;
	let calc=function(n){
		count+=1;
		number=number*n;
	}
	for( let i=2; i<=n; i+=1){
		calc(i);
	}
	return number
};
document.write('example2 factorial: n=10; result='+factorial(10)+'; invokes:'+count+'<br>');