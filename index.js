var ul = document.querySelector('ul');
var body = document.querySelector('body');

setInterval(function () {
	console.log(body.offsetWidth);
	if (body.offsetWidth < 600) {
		dispatcher.trigger('minWidth');
	}
}, 1000);

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

dispatcher.on('minWidth', function () {
	console.log('Min. width < 600');
});
