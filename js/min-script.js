var btnFeedback=document.querySelector(".btn-feedback"),popup=document.querySelector(".modal-feedback"),overlay=document.querySelector(".overlay"),closePopupBtn=popup.querySelector(".modal-close"),form=popup.querySelector("form"),visitorName=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),letter=popup.querySelector("[name=letter-text]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("visitorName")}catch(e){isStorageSupport=!1}btnFeedback.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-feedback-show"),overlay.classList.add("overlay-show"),storage?(visitorName.value=storage,email.focus()):visitorName.focus()}),closePopupBtn.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-feedback-show"),overlay.classList.remove("overlay-show"),popup.classList.remove("modal-feedback-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-feedback-show")&&(popup.classList.remove("modal-feedback-show"),overlay.classList.remove("overlay-show"),popup.classList.remove("modal-feedback-error")))}),form.addEventListener("submit",function(e){visitorName.value&&email.value&&letter.value?isStorageSupport&&localStorage.setItem("visitorName",visitorName.value):(e.preventDefault(),popup.classList.remove("modal-feedback-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-feedback-error"))});