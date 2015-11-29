window.onload=function(){
	var sc=document.getElementById('screen');
	var nums=document.getElementsByClassName('num');
	var ops=document.getElementsByClassName('oprator');
	var equl=document.getElementById('dengyuhao');
	var ac=document.getElementById('qingling');
	var firstNumber='';
	var secondNumber='';
	var jiahao='';
	for(var i=0;i<nums.length;i++){
	 nums[i].onclick=function(){
	 	if(jiahao==''){
	 	if(this.innerHTML=='.'&&firstNumber.indexOf('.')!=-1){return; }
	 	firstNumber=firstNumber+this.innerHTML;
	 	sc.innerHTML=firstNumber;
	 }else{
	 	if(this.innerHTML=='.'&&secondNumber.indexOf('.')!=-1){return; }
	 	secondNumber=secondNumber+this.innerHTML;
	 	sc.innerHTML=secondNumber;
	    }	 	 
     };	
 }
   for(var i=0;i<ops.length;i++){
	 ops[i].onclick=function(){
       jiahao=this.innerHTML.trim(); 
       sc.innerHTML=jiahao;
	  }
	}
 equl.onclick=function(){
	 	if(jiahao=='+'){
	 	     sc.innerHTML=Number(firstNumber)+Number(secondNumber);
	      }else if(jiahao=='-'){
	     	 sc.innerHTML=Number(firstNumber)-Number(secondNumber);
	     }else if(jiahao=='/'){
	     	 sc.innerHTML=Number(firstNumber)/Number(secondNumber);
	     }else if(jiahao=='*'){
	         sc.innerHTML=Number(firstNumber)*Number(secondNumber);
	     }
	     jiahao='';firstNumber=''; secondNumber='';
	 };
	 ac.onclick=function(){
	     sc.innerHTML=0;

	 }

































































































};