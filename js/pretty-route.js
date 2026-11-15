const modal = document.documentElement.dataset.modal;
const destination = new URL('/', window.location.href);
const params = new URLSearchParams(window.location.search);
params.set('modal', modal);
destination.search = params.toString();
window.location.replace(destination.href);
