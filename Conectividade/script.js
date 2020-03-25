function handleStateChange() {
	var timeBadge = new Date().toTimeString().split(' ')[0];
	var newState = document.createElement('p');
	var state = navigator.onLine ? 'online' : 'offline';
	newState.innerHTML = '' + timeBadge + ' Connection state changed to ' + state + '.';
	target.appendChild(newState);
}

window.onload = function() {
	document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline';
	var target = document.getElementById('target');
	window.addEventListener('online', handleStateChange);
};