var ul = document.querySelector('ul');

var dispatcher = new Dispatcher();

ul.addEventListener('click', function (event) {
	if (event.target.localName !== 'li') return;
	var text = event.target.innerHTML;
	dispatcher.trigger('changeText', text);
});

dispatcher.on('changeText', function (newText) {
	var h1 = document.querySelector('h1');
	h1.innerHTML = newText;
});
