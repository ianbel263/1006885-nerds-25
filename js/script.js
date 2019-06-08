var btnFeedback = document.querySelector('.btn-feedback');
var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.overlay');
var closePopupBtn = popup.querySelector('.modal-close');
var form = popup.querySelector('form');
var visitorName = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');
var letter = popup.querySelector('[name=letter-text]');
var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('visitorName');
} catch (err) {
	isStorageSupport = false;
}

btnFeedback.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('modal-feedback-show');
	overlay.classList.add('overlay-show');
	if (storage) {
		visitorName.value = storage;
		email.focus();
	} else {
		visitorName.focus();
	}
});

closePopupBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('modal-feedback-show');
	overlay.classList.remove('overlay-show');
	popup.classList.remove('modal-feedback-error');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains('modal-feedback-show')) {
				popup.classList.remove('modal-feedback-show');
				overlay.classList.remove('overlay-show');
				popup.classList.remove('modal-feedback-error');
			}
  }
});

form.addEventListener('submit', function(evt) {
	if (!visitorName.value || !email.value || !letter.value) {
		evt.preventDefault();
		popup.classList.remove('modal-feedback-error');
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add('modal-feedback-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('visitorName', visitorName.value);
		}
	}
});

var toggles = document.querySelectorAll('.toggle');
var slides = document.querySelectorAll('.slide');

var each = function(arr, callback, thisArg) {
  var i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    callback.call(thisArg, arr[i], i, arr);
  }
};

each(toggles, function(el, index) {
	el.addEventListener('click', function() {
		each(slides, function(el, index) {
			if (slides[index].classList.contains('slide-current')) {
				toggles[index].classList.remove('toggle-current');
				slides[index].classList.remove('slide-current');
			}
		})

		toggles[index].classList.add('toggle-current');
		slides[index].classList.add('slide-current');
	});
})