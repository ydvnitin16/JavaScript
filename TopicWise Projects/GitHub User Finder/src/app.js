const errorMsg = document.querySelector('#error-msg');
const loading = document.querySelector('#loading');
const userInterface = document.querySelector('main')

//Fetch Data From API
async function user(username) {
    try {
        loading.classList.remove('hidden')
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error('Not Found')
        }
        if (!errorMsg.classList.contains('hidden')) {
            errorMsg.classList.add('hidden')
        }

        const data = await response.json();
        if (userInterface.classList.contains('hidden')) {
            userInterface.classList.remove('hidden')
        }
        setTimeout(() => {
            updateUi(data)
            loadRepos(data)
            loading.classList.add('hidden')
        }, 200);

    } catch (err) {
        loading.classList.add('hidden')
        if (errorMsg.classList.contains('hidden')) {
            errorMsg.classList.remove('hidden')
        }
        if (!userInterface.classList.contains('hidden')) {
            userInterface.classList.add('hidden')
        }
        errorMsg.innerText = `Error: ${input.value} Not Found`
    }
};

const image = document.querySelector('#profile-picture')
const name = document.querySelector('#username')
const bio = document.querySelector('#bio')
const userLocation = document.querySelector('#location')
const following = document.querySelector('#following')
const followers = document.querySelector('#followers')
const repos = document.querySelector('#repos');
const reposContainer = document.querySelector('#repo-container');

//Update UI After Successfull Fetch
function updateUi(data) {
    image.src = data.avatar_url;
    name.innerText = data.name || `No Name Available`;
    bio.innerText = data.bio || `No Bio Available`
    userLocation.innerText = data.location || `Unknown Location`
    following.innerText = `Following: ${data.following || 0}`
    followers.innerText = `Followers: ${data.followers || 0}`
    repos.innerText = `repos: ${data.public_repos || 0}`
};

//Add Eventlistner To Search Button
const input = document.querySelector('#search-input');
document.querySelector('#search-btn')
    .addEventListener('click', () => {
        const username = input.value.trim()
        if (username) {
            user(username)
        } else {
            errorMsg.innerText = `Please Enter Something`
            errorMsg.classList.remove('hidden')
        }
        input.value = ''
    });
input.addEventListener('keypress',(e)=>{
    if(e.key === `Enter`){
        document.querySelector('#search-btn').click()
    }
})


const repoErrorMsg = document.querySelector('#repo-error-msg');
async function loadRepos(data) {
    try {
        let response = await fetch(data.repos_url)
        let repoData = await response.json();

        if (!repoErrorMsg.classList.contains('hidden')) {
            repoErrorMsg.classList.add('hidden')
        }

        if (!repoData.length) {
            reposContainer.innerHTML = '<p class="text-lg text-gray-400">No repositories found.</p>';
            return;
        }

        reposContainer.innerHTML = ''
        for (const repo of repoData) {
            let element = document.createElement('div');
            element.classList.add('my2')
            element.innerHTML = `
        <a href="${repo.html_url}" class="text-lg font-medium text-gray-100 hover:underline hover:text-gray-50">${repo.name || `No Name`} </a>
                        <p class="-mt-1 text-lg font-medium text-gray-400 truncate">${repo.description || `Not Available`}
                        </p>
                        <hr class="text-gray-500">
                        `
            reposContainer.appendChild(element)
        }
    } catch (err) {

        if (repoErrorMsg.classList.contains('hidden')) {
            repoErrorMsg.classList.remove('hidden')
        }

        repoErrorMsg.innerText = `Error loading repos : ${err.message}`
    }
}
