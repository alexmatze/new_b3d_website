window.onload = function() {
// Function to create the cookie notification
function createCookieNotification() {
  //activate the page overlay
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  // Create the notification element
  var notification = document.createElement("div");
  notification.id = "cookie-notification";
  if(document.documentElement.lang=="en"){
  notification.innerHTML = "<p>By using our website, you consent to the use of cookies to enhance your online experience. For more information, please see our <a href='/en/privacy.html'>Privacy Policy</a>.</p>";
  }

  if(document.documentElement.lang=="de"){
  notification.innerHTML = "<p>Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zur Verbesserung des Online-Erlebnisses zu. Weitere Informationen erhalten Sie in unseren <a href='/de/datenschutz.html'>Datenschutzbestimmungen</a>.</p>";
  }
  // Add a "dismiss" button to the notification
  var dismissButton = document.createElement("button");
  if(document.documentElement.lang=="en"){
    dismissButton.innerHTML = "Accept";
  }

  if(document.documentElement.lang=="de"){
    dismissButton.innerHTML = "Akzeptieren";
  }

  dismissButton.onclick = function() {
    dismissCookieNotification();
  };
  notification.appendChild(dismissButton);

  // Add the notification to the website
  document.body.appendChild(notification);
}

// Function to dismiss the cookie notification
function dismissCookieNotification() {
  //deactivate the page overlay
  var overlay = document.getElementById

  var notification = document.getElementById("cookie-notification");
  notification.style.display = "none";

  // Create a cookie to remember that the user has dismissed the notification
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30); // expires in 30 days
  document.cookie = "cookie-notification-dismissed=true; expires=" + expirationDate.toUTCString() + "; domain=b3d.nrw; path=/;";
  document.cookie = "cookie-notification-dismissed-local=true; expires=" + expirationDate.toUTCString() + "; domain=.localhost.; path=/;";

  //refresh the page after dismissing the createCookieNotification
  location.reload()
}

// Check if the user has previously dismissed the notification
var dismissed = false;
if(document.cookie.indexOf("cookie-notification-dismissed=true") >= 0 || document.cookie.indexOf("cookie-notification-dismissed-local=true") >=0){
  var dismissed = true;
} ;

// If the user hasn't dismissed the notification, create it
if (!dismissed) {
  createCookieNotification();
}
}
