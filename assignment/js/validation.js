/*validation for the the contact form */
function formValidation() {
  let uid = document.registration.username;
  let subject = document.registration.subject;
  let message = document.registration.message;
  let uemail = document.registration.email;

  if (useridValidation(uid, 3, 20)) {
    if (validSubject(subject)) {
      if (validMessage(message)) {
        if (validateEmail(uemail)) {
        }
      }
    }
  }
  return false;
}

function useridValidation(uid, mx, my) {
  let uid_len = uid.value.length;
  let letters = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    uid.focus();
    alert("name should be minimum 3 character and maximum 20");
    uid.focus();
    return false;
  }
  return true;
}

function validSubject(subject) {
  let letters = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
  let sub_leng = subject.value.length;

  if (subject.value.match(letters) && sub_leng > 4 && sub_leng < 80) {
    return true;
  } else {
    alert("subject should be minimum 5 character and maximum 80");
    subject.focus();
    return false;
  }
}

function validMessage(message) {
  let letters = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
  let message_leng = message.value.length;

  if (message.value.match(letters) && message_leng > 4 && message_leng < 80) {
    return true;
  } else {
    alert("message should be minimum 5 character and maximum 80");
    message.focus();
    return false;
  }
}

/* validate email */
function validateEmail(uemail) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    window.location.href = './html/thanks.html';
    return true;
  } else {
    alert("email required example:- abc@gmail.com")
    uemail.focus();
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
    .then(bookData => bookData.forEach(function (book) {
      bookContainer.innerHTML += `
    <div id=${book.id}>
      <h2>${book.username}</h2>
      <h4>Email: ${book.cemail}</h4>
      <h5>Subject: ${book.subject}</h4>
      <p>${book.message}</p>
    </div>`
    }))
  /*end of for get data*/

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    /* additional functionality goes down here!!*/
    const usernameInput = bookForm.querySelector('#username').value
    const cemailInput = bookForm.querySelector('#cemail').value
    const messageInput = bookForm.querySelector('#message').value
    const subjectInput = bookForm.querySelector('#subject').value

    fetch(`${bookURL}`, {
      method: 'POST',
      body: JSON.stringify({
        username: usernameInput,
        cemail: cemailInput,
        subject: subjectInput,
        message: messageInput,
        date: d,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(book => {
        bookContainer.innerHTML += `
            <div id=${book.id}>
              <h2>${book.username}</h2>
              <h4>Email: ${book.cemail}</h4>
              <h4>Subject: ${book.subject}</h4>
              <p>${book.message}</p>
            </div>`
      })
  })
})
