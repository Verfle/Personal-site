// keep const - Get Element
const status = document.getElementById('status');
const nameStatus = document.getElementById('nameStatus');
// keep let
let clearStatus;
// fecth function - lanyard api
function lanyard() {
	try {
		fetch('https://api.lanyard.rest/v1/users/576422773694660608')
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			discordStatus = data.data.discord_status;
			if(!discordStatus) {
				throw new Error('Discord status cant fetching')
				nameStatus.innerText = ' ' + 'Null'
			}
			else if(discordStatus === 'offline') {
				status.classList.remove('chip-online', 'chip-dnd', 'chip-idle')
				status.classList.add('chip-offline', 'status-chip')
				nameStatus.innerText = ' ' + ' Offline'
			}
			else if(discordStatus === 'online') {
				status.classList.remove('chip-offline', 'chip-dnd', 'chip-idle')
				status.classList.add('chip-online', 'status-chip')
				nameStatus.innerText = ' ' + ' Online'
			}
			else if(discordStatus === 'idle') {
				status.classList.remove('chip-online', 'chip-dnd', 'chip-offline')
				status.classList.add('chip-idle', 'status-chip')
				nameStatus.innerText = ' ' + ' Idle'
			}
			else if(discordStatus === 'dnd') {
				status.classList.remove('chip-online', 'chip-offline', 'chip-idle')
				status.classList.add('chip-dnd', 'status-chip')
				nameStatus.innerText = ' ' + ' Dnd'
			}
		})
	} catch (e) {
		console.log('Has error! : ' + err)
	}
}
// setInterval
setInterval(lanyard, 900)