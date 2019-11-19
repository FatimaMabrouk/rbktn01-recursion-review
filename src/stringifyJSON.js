// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if(typeof obj === 'number' || typeof obj === 'boolean' ) {
  	return "" + obj+ "";
  } else if(typeof obj === 'string'){
  	 return '"'+ obj +'"';
  } else if(obj === null) {
  	return 'null';
  } else if(Array.isArray(obj)){
  	if(obj.length === 0){
     return   '[]' ;
  	}
  	var arr = [];
   for(var i =0; i< obj.length ; i++){
   	 obj[i] = stringifyJSON(obj[i]);
   	 arr.push(obj[i]);
     }
   return "["+ arr +"]";
   } else {
   	 var count = 0;
   	 for(var key in obj){
   	 	count++;
   	 }
   	 if(count === 0 ){
       return '{}';
   	 }
   	 var result = '';

   	 for(var keys in obj) {
   	 	if(typeof obj[keys] !== 'function' && obj[keys] !== undefined ) {
   	 	var k = stringifyJSON(keys);
   	 	// check for type .
   	 	result += k + ':'+ stringifyJSON(obj[keys]) + ',' ;

   	 }
   }  
   return '{'+  result.slice(0,result.length -1) + '}';
}


  //  else  if(typeof obj === 'boolen'){
  // 	return ''+obj + '';
  // } else if(typeof obj === 'object') {
  // 	return ""+ obj + "" ;
  // }
  
}
