let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
let records=[];
let string = ''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
         try{string = String(eval(string))
            inputBox.value = string;
            records.push(string)
        }
            catch(error){
                inputBox.value='Syntax error';
            }
        }
        else if (b.target.innerText == 'AC'){
            string = '0'
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.innerText=='HIST'){
            let result=history();
            inputBox.value=result;
            string=result;
            
        }
        else{
            string += b.target.innerText
            inputBox.value = string
        }
    })
})
function history(){

    try{
        if(records==''){
            return 'EMPTY';
        }
        else{
            return records.pop();
        }

    }catch(error){
        return 'ERROR';
    }
}