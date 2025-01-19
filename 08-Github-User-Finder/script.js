const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#searchButton");
const userDetails = document.querySelector("#userDetails");

const getUser = async (userName) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`); 
        if (!response.ok) {
            throw new Error("User not found");
        }
        const user = await response.json();
        const card = `
         <img src="${user.avatar_url}" alt="${user.name}">
        <h2>${user.name || "No Name Provided"}</h2>
        <p>${user.bio || "No Bio Available"}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><strong>Following:</strong> ${user.following}</p>
        <a href="${user.html_url}" target="_blank">View Profile</a>
        `
        userDetails.innerHTML = card
    } catch (error) {
        console.error(error.message);
    }
};

searchButton.addEventListener("click",()=>{
    const username = usernameInput.value
    if(username){
        getUser(username)
    }else {
        userDetails.innerHTML = `<p style="color: red;">Please enter a username!</p>`;
    }
})
