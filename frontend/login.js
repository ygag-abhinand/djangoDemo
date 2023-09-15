let form = document.getElementById('login-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = {
    'username': form.username.value,
    'password':form.password.value
    }

    fetch('http://127.0.0.1:8000/api/users/token/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('DATA:',data.access)
        if(data.access){
            localStorage.setItem('token',data.access)
            window.location = 'http://localhost:63342/frontend/projects-list.html?_ijt=oqh41ibr4b59uq6n9kioh96svp&_ij_reload=RELOAD_ON_SAVE'
        }else{
            alert('Username or Password did not work')
        }
    })
})