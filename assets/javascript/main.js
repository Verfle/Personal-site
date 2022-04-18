// === social-links ===
const json = [
	{
		"id": "Github",
		"url": "https://github.com/Verfle",
		"icon": "fa-brands fa-github"
	},
	{
		"id": "Facebook",
		"url": "https://facebook.com/2006in",
		"icon": "fa-brands fa-facebook"
	},
	{
		"id": "Messenger",
		"url": "https://m.me/2006in",
		"icon": "fa-brands fa-facebook-messenger"
	},
	{
		"id": "Source",
		"url": "https://github.com/Verfle/Personal-site",
		"icon": "fa-solid fa-code"
	}
]

json.forEach((obgs) => {
	const social = document.getElementById('social-links');
	social.innerHTML += `<a target="_blank" class="social-links" href="${obgs.url}"><i class="${obgs.icon}"></i></a>`
});
// === content ===
const name = document.getElementById('name');
name.innerText = 'Thanyathep Gamber';

// === age manager ===
const age = document.getElementById('age');
age.innerHTML = parseInt((Date.now() - new Date(2006, 11, 10).getTime()) / 31556952000);
