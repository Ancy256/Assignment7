const btnClick = (oper) =>{
    const num1=document.getElementById("input1")
    const num1_val=Number(num1.value)
    const num2=document.getElementById("input2")
    const num2_val=Number(num2.value)
    const result=document.getElementById("result")
    switch(oper)
    {
        case "add":
            result.textContent=addition(num1_val,num2_val)
            break;
        case "sub":
            result.textContent=subtraction(num1_val,num2_val)
            break;
        case "mul":
            result.textContent=multiply(num1_val,num2_val)
            break;
        case "div":
            result.textContent=division(num1_val,num2_val)
            break;
        case "square":
            // document.getElementById("input2").disabled=true
            num2.value=''
            result.textContent=square(num1_val)
            break;
        case "cube":
            // document.getElementById("input2").disabled=true
            num2.value=''
            result.textContent=cube(num1_val)
            break;
        case "clear":
            num1.value=''
            num2.value=''
            result.textContent=''
            break;
        }
}
const addition = (num1,num2) => {
    if(num1===''||num2==='')
        alert("Input 1 or Input 2 field should not be empty for Addition")
    else
        return num1+num2
}
const subtraction = (num1,num2) => {
    if(num1===''||num2==='')
        alert("Input 1 or Input 2 field should not be empty for Subtraction")
    else
        return num1-num2
}    
const multiply = (num1,num2) => {
    if(num1===''||num2==='')
        alert("Input 1 or Input 2 field should not be empty for Multiplication")
    else
        return num1*num2
}    
const division = (num1,num2) => {
    if(num1===''||num2==='')
        alert("Input 1 or Input 2 field should not be empty for Division")
    else if(num2==0)
        alert("Input 2 should not be 0")
    else
        return num1/num2
}    
const square = (num1) => {
    const res =num1**2
    return res
}    
const cube = (num1) => {
    const res =num1**3
    return res
}    

