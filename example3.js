var count=0;
var fibonacci=function(n){
	count+=1;
	if (n===0){
		result=0;
	}else if(n===1){
		result=1;
	}else{
		result=fibonacci(n-1)+fibonacci(n-2);
	}
	return result
};
var result=0;
fibonacci(2,result);
setTimeout(document.write('example3 fibonacci: n=10; result='+result+'; invokes:'+count+'<br>'),100);


var count=0;
var factorial=function(n){
	count+=1;
	if (n===1){
		return 1
	}else{
		return factorial(n-1)*n;
	}
};
document.write('example1 factorial: n=10; result='+factorial(10)+'; invokes:'+count+'<br>');