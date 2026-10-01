const form=document.getElementById('signin');
const username =document.getElementById('username');
const password=document.getElementById('password');
const email=document.getElementById('email');
const gender=document.getElementById('gender');
const city=document.getElementById('city');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(username);

    const data={
        username : username.value,

        password: password.value,
        email:email.value,
        gender:gender.value,
        city:city.value

    }
    fetch("http//localhost:8080/api/form",{
        method:'post',
        Headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    })
    
})