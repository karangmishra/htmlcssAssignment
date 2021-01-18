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
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    uid.focus();
    return false;
  }
  return true;
}

function validSubject(subject) {
  let letters = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
  if (subject.value.match(letters)) {
    return true;
  }  else {
      subject.focus();
      return false;
    }
}

function validMessage(message) {
  let letters = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/
  if (message.value.match(letters)) {
    return true;
  }  else {
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
  }  else {
      uemail.focus();
      return false;
    }
}