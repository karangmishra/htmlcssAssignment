/*validation for the the contact form */
function formValidation() {
  let uid = document.registration.username;
  let subject = document.registration.subject;
  let cmessage = document.registration.message;
  let email = document.registration.email;
  var text = "";

  if (useridValidation(uid)) {
    if (validSubject(subject)) {
      if (validMessage(cmessage)) {
        if (validateEmail(email)) {
        }
      }
    }
  }
  return false;
}

function useridValidation(uid) {
  var message = document.getElementsByClassName("error-message");
  let uid_len = uid.value.length;
  let letters = /^[A-Za-z]+[ A-Za-z]*$/;
  if (uid_len == !0 || uid_len >= 3 && uid_len < 20 && uid.value.match(letters)) {
    text = "";
    message[0].innerHTML = text;
    return true;
  }
  uid.focus();
 /* alert("name should be minimum 3 character and maximum 20");*/
  text = "name should contain minimum 3 letters and maximum 20";
  message[0].innerHTML = text;
  uid.focus();
  return false;
}

function validSubject(subject) {
  var message = document.getElementsByClassName("error-message");
  let letters = /^[A-Za-z0-9-]+[ 0-9A-Za-z#$%=@!{},`~&*()'<>?.:;_|^/+\t\r\n\[\]"-]*$/;
  let sub_leng = subject.value.length;

  if (subject.value.match(letters) && sub_leng > 4 && sub_leng < 80) {
    text = "";
    message[2].innerHTML = text;
    return true;
  } else {
   /* alert("subject should be minimum 5 character and maximum 80");*/
    text = "subject should be minimum 5 character and maximum 80";
    message[2].innerHTML = text;
    subject.focus();
    return false;
  }
}

function validMessage(cmessage) {
  var message = document.getElementsByClassName("error-message");
  let letters =/^[A-Za-z0-9-]+[ 0-9A-Za-z#$%=@!{},`~&*()'<>?.:;_|^/+\t\r\n\[\]"-]*$/;
  let message_leng = cmessage.value.length;

  if (cmessage.value.match(letters) && message_leng > 4 && message_leng < 80) {
    text = "";
    message[3].innerHTML = text;
    return true;
  } else {
   /* alert("message should be minimum 5 character and maximum 80");*/
    text = "message should be minimum 5 character and maximum 80";
    message[3].innerHTML = text;
    cmessage.focus();
    return false;
  }
}

/* validate email */
function validateEmail(email) {
  var message = document.getElementsByClassName("error-message");
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    text = "";
    message[1].innerHTML = text;
    window.location.href = './html/thanks.html';
    return true;
  } else {
  /* alert("email required example:- abc@gmail.com")*/
    text = "email required example:- abc@gmail.com";
    message[1].innerHTML = text;
    email.focus();
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  /* everything else we type will go inside this!! */

  const bookContainer = document.querySelector('#book-container')
  const bookURL = `http://localhost:3000/users`
  const bookForm = document.querySelector('#book-form')
  var d = new Date();

  fetch(`${bookURL}`)
    .then(response => response.json())
    
   
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    /* additional functionality goes down here!!*/
    const usernameInput = bookForm.querySelector('#username').value
    const emailInput = bookForm.querySelector('#email').value
    const messageInput = bookForm.querySelector('#message').value
    const subjectInput = bookForm.querySelector('#subject').value

    fetch(`${bookURL}`, {
      method: 'POST',
      body: JSON.stringify({
        username: usernameInput,
        email: emailInput,
        subject: subjectInput,
        message: messageInput,
        date: d,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  
  })
})
