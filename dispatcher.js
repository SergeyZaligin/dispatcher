function Dispatcher () {
	this.listeners = {};
}

Dispatcher.prototype = {
	on: function (eventName, func) {
		if (typeof this.listeners[eventName] === 'undefined') {
			this.listeners[eventName] = [];
		}
		this.listeners[eventName].push(func);
	},
	trigger: function (eventName, data) {
		if (typeof this.listeners[eventName] === 'undefined') {
			return;
		}
		this.listeners[eventName].forEach(function(handler) {
			handler(data);
		})
	}
};