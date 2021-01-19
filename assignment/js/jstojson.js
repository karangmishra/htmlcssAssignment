
let users = [];
const addUser = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let user = {
        username: document.getElementById('cname').value,
        email: document.getElementById('cemail').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        date: Date.now(),
    }
    users.push(user); 
    /*to clear the form for the next entries*/
    document.forms[0].reset(); 
    /*document.querySelector('form').reset(); */

    /* for display purposes only */
    console.log('added' , {users} );
     
    //saving to localStorage
    localStorage.setItem('MyUserList', JSON.stringify(users) ); 
}

//document.write(localStorage.getItem('MyUserList',JSON.stringify(users)));
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('contact-submit').addEventListener('click', addUser);
});
