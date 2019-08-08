/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//axios.get("https://api.github.com/users/JulieGumerman");

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
const cards = document.querySelector(".cards");
async function cardCreator() {
  axios.get("https://api.github.com/users/JulieGumerman")
  .then((response) => createCard(response.data))
// .then((response) => console.log(response.data))
.catch((err) => {
  console.log("oops");
})


}

// avatar_url: "https://avatars2.githubusercontent.com/u/45279658?v=4"
// bio: null
// blog: "www.juliegumerman.com"
// company: null
// created_at: "2018-11-23T04:50:39Z"
// email: null
// events_url: "https://api.github.com/users/JulieGumerman/events{/privacy}"
// followers: 7
// followers_url: "https://api.github.com/users/JulieGumerman/followers"
// following: 2
// following_url: "https://api.github.com/users/JulieGumerman/following{/other_user}"
// gists_url: "https://api.github.com/users/JulieGumerman/gists{/gist_id}"
// gravatar_id: ""
// hireable: true
// html_url: "https://github.com/JulieGumerman"
// id: 45279658
// location: "Colorado Springs, Colorado"
// login: "JulieGumerman"
// name: "JulieGumerman"
// node_id: "MDQ6VXNlcjQ1Mjc5NjU4"
// organizations_url: "https://api.github.com/users/JulieGumerman/orgs"
// public_gists: 0
// public_repos: 32
// received_events_url: "https://api.github.com/users/JulieGumerman/received_events"
// repos_url: "https://api.github.com/users/JulieGumerman/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/JulieGumerman/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/JulieGumerman/subscriptions"
// type: "User"
// updated_at: "2019-07-11T17:07:52Z"
// url: "https://api.github.com/users/JulieGumerman"
 
window.addEventListener("load", cardCreator);

function createCard(obj) {

  //elements, classes, and content
  let userCard = document.createElement("div");
  userCard.classList.add("card");

  let avatarImg = document.createElement("img");
  avatarImg.src = obj.avatar_url;

  let userName = document.createElement("h2");
  userName.classList.add("name");
  userName.textContent = obj.name;

  let userP = document.createElement("p");
  userP.textContent = obj.bio;

  let userHandle = document.createElement("h3");
  userHandle.classList.add("username");
  userHandle.textContent = obj.login;

  //putting card together
  userCard.appendChild(avatarImg);
  userCard.appendChild(userName);
  userCard.appendChild(userP);
  userCard.appendChild(userHandle);

  cards.appendChild(userCard);
  

  return userCard;
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
