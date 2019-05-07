var tlhForm = document.querySelector("#tlh-form");
var desktopFormParent = tlhForm.parentNode;
var mobileFormParent = document.querySelector("#requestInfo");

function removeForm(formEl) {
  formEl.parentNode.removeChild(formEl);
}
function insertForm(formEl, targetEl) {
  //   targetEl.parentNode.insertBefore(formEl, targetEl);
  targetEl.parentNode.insertBefore(formEl, targetEl.nextSibling);
}

/* JavaScript Media Queries */
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (!mq.matches) {
    // console.log("move form to MOBILE location");
    removeForm(tlhForm);
    insertForm(tlhForm, mobileFormParent);
  } else {
    // console.log("move form to DESKTOP location");
    removeForm(tlhForm);
    insertForm(tlhForm, desktopFormParent);
  }
  //   const msg = (mq.matches ? "more" : "less") + " than 500 pixels";
  //   document.getElementById("current").firstChild.nodeValue = msg;
}
