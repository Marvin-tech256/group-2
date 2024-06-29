//add event listeners to login and signup links
document.getElementById("login-link").addEventListener("click",showLoginSection);
document.getElementById("signup-link").addEventListener("click",showSignupSection);
document.getElementById("about-link").addEventListener("click",showAboutSection);
document.getElementById("contact-link").addEventListener("click",scollToContactPage);


//Functions to show login and signup sections 
function showLoginSection(){
    document.getElementById("login-container").style.display="block";
    document.getElementById("signup-container").style.display="none";
}

function showSignupSection(){
        document.getElementById("login-container").style.display="none";
        document.getElementById("signup-container").style.display="block";
}

function scrollToContactPage(){
    document.getElementById("contact-page").scrollIntoView();
}
  

//function to show about section
function showAboutSection(){
    document.getElementById("about-section").style.display="block";
}

