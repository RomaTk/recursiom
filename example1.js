var count=0;
var fibonacci=function(n){
	count+=1;
	if (n===0){
		return 0
	}else if(n===1){
		return 1
	}else{
		return fibonacci(n-1)+fibonacci(n-2);
	}
};
document.write('example1 fibonacci: n=10; result='+fibonacci(10)+'; invokes:'+count+'<br>');


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