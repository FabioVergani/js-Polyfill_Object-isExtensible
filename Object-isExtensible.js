TypeError.isNotAnObject=function(x){throw new TypeError(x +'\tisn\'t an Object (as expected).')};
//
(function(O,n){
if(!O[n]){
 O[n]=function(x){
	if(O(x)!==x){
	 TypeError.isNotAnObject(x);
	}else{
	 var r=0,k='k',p=k,f=Object.prototype.hasOwnProperty;
	 do{p+=k}while(f.call(x,p));x[p]=true;r=f.call(x,p);delete x[p];
	 return r;
	};
 };
};
})(Object,'isExtensible');
//
