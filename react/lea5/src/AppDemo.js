function helloworldgenerator(){
    yield "hello";
    yield "world";
    yield "dddd"
}

var hw = helloworldgenerator();
console.log(hw.next());
console.log(hw.next());