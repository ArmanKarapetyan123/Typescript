const text : string = "THIS IS A TEXT";
const num : number = 9;
const isRight : boolean = true;

function toLowercase(str : string): void{
    console.log(str.toLowerCase());
}
function multiplying(number: number) : void{
   console.log(number*2);
}
function checking(variant : boolean) : void {
    if(variant){
        console.log("Checked")
    }else{
        console.log("Not checked")
    }
}

toLowercase(text);
multiplying(num);
checking(isRight);