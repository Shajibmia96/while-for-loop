var  a= 9;
var b = 8;
var c = 8;

if(a==b){
    console.log('line a and b is equal')
}
else if(a==c){
    console.log('line a and c is equal')
}
else{
    console.log('line b and c is equal')
}

// check isosceles
if(a==b || a==c || b==c){
    console.log('Isosceles')
}
else{
    console.log('This Triangles is Isosceles')
}