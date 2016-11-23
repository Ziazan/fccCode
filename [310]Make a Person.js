/*
用下面给定的方法构造一个对象.

方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

所有有参数的方法只接受一个字符串参数.

所有的方法只与实体对象交互.
*/
var Person = function(firstAndLast) {
   var fullName = firstAndLast.split(" ");
    this.getFirstName = function(){
       return fullName[0];
     };
  this.getLastName = function(){
    return fullName[1];
  };
  
  this.getFullName = function(){
    return fullName.join(" ");
  };
  
  this.setFirstName = function(first){
    fullName[0] = first;
  };
  this.setLastName = function(last){
    fullName[1] = last;
  };
  this.setFullName = function(firstAndLast2){
    fullName = firstAndLast2.split(" ");
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
