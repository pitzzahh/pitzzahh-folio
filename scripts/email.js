let fromName = document.getElementById("from-name");
let fromEmail = document.getElementById("from-email");
let fromMessage = document.getElementById("message-content");

function sendEmail() {
  var params = {
    name: document.getElementById("from-name").value,
    email: document.getElementById("from-email").value,
    message: document.getElementById("message-content").value,
  };

  const serviceId = "service_w89ne5x";
  const templateId = "template_xcwmkf8";
  const publicKey = "C1NaPEP0WSql9qQwI";

  console.log(
    "Sending email to " + fromEmail.value + " with message " + fromMessage.value
  );

  if (fromName.value == "") {
    alert("Please enter your name");
    return;
  }

  if (fromEmail.value == "") {
    alert("Please enter your email address");
    return;
  }

  if (fromMessage.value == "") {
    alert("Please enter your message");
    return;
  }

  if(isInvalidEmail(fromEmail.value)) {
    alert("Please enter a valid email address");
    return;
  }

  emailjs
    .send(serviceId, templateId, params, publicKey)
    .then((res) => {
      fromName.value = "";
      fromEmail.value = "";
      fromMessage.value = "";
      alert("Email sent successfully");
      console.log(res);
    })
    .catch((err) => alert(err));
}

function isInvalidEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return !re.test(email);
}