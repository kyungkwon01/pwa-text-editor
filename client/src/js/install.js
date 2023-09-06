const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
	console.log('beforeinstallprompt');
	window.deferredPrompt = event;
	butInstall.classList.toggle('hidden', false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
	console.log('clicked');
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();
	window.deferredPrompt = null;
	butInstall.classList('hidden', true);
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
	console.log('appinstalled');
	window.deferredPrompt = null;
});
