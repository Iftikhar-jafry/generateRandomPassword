const randomInputPassword= document.getElementById("rando");
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="~!@#$%&*_";
const allChar=upperCase+lowerCase+lowerCase+lowerCase+numbers+symbols;
function randomPassword()
{
    const length=passwordLength();
    let password="";
    let getRandomNO=getRandomNumber();

    if(getRandomNO==1)
    {
        password+=upperCase[Math.floor(Math.random()*upperCase.length)];
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password+=numbers[Math.floor(Math.random()*numbers.length)];
        password+=symbols[Math.floor(Math.random()*symbols.length)];
    }
    else if(getRandomNO==2)
    {
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password+=numbers[Math.floor(Math.random()*numbers.length)];
        password+=symbols[Math.floor(Math.random()*symbols.length)];
        password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    }
    else if(getRandomNO==3)
    {
        password+=numbers[Math.floor(Math.random()*numbers.length)];
        password+=symbols[Math.floor(Math.random()*symbols.length)];
        password+=upperCase[Math.floor(Math.random()*upperCase.length)];
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    }
    else
    {
        password+=symbols[Math.floor(Math.random()*symbols.length)];
        password+=upperCase[Math.floor(Math.random()*upperCase.length)];
        password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password+=numbers[Math.floor(Math.random()*numbers.length)];
    }
    

    while(password.length<length)
    {
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    randomInputPassword.value=password;
}

function passwordLength()
{
    const passlength=document.getElementById("passwordLength").value;
    return passlength;
}

function getRandomNumber()
{
    return Math.floor(Math.random()*4)+1;
}

const copyPassword=document.getElementById("copy_pass");
copyPassword.addEventListener("click",()=>{

    randomInputPassword.select();
    randomInputPassword.setSelectionRange(0,9999);
    if (navigator.clipboard && navigator.clipboard.writeText) 
    {
        navigator.clipboard.writeText(randomInputPassword.value)
        .then(() => 
            {
            alert("Password copied to clipboard!");
            })
        .catch(err => 
            {
            console.error('Failed to copy text: ', err);
            // Fallback if modern API fails
            try {
                document.execCommand('copy');
                alert("Password copied to clipboard (fallback)!");
                }
            catch (err) 
                {
                alert("Failed to copy password. Please copy it manually.");
                }
            });
    }
})