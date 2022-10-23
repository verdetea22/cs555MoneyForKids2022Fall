import emailjs from "emailjs-com";

const sendNotification = (email, body, name) => {

    const templateID = "";

    let templateParams = {
        name,
        body,
        email  
    };

    emailjs.send("", templateID, templateParams, '')
      .then((result) => {
      }, (error) => {
          console.log(error.text);
      })
}

export {sendNotification};