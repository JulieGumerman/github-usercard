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
window.addEventListener("load", function(){
  
  const cards = document.querySelector(".cards");

async function cardCreator() {
      axios.get("https://api.github.com/users/JulieGumerman")
      .then((response) => createCard(response.data))
    // .then((response) => console.log(response.data))
    .catch((err) => {
      console.log("oops");
    })


}

cardCreator();
 


function createCard(obj) {

  //elements, classes, and content
  let userCard = document.createElement("div");
  userCard.classList.add("card");

  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  let avatarImg = document.createElement("img");
  avatarImg.src = obj.avatar_url;


  let userName = document.createElement("h2");
  userName.classList.add("name");
  userName.textContent = obj.name;

  let userLocation = document.createElement("p");
  userLocation.textContent = `Location: ${obj.location}`;

  let userHandle = document.createElement("h3");
  userHandle.classList.add("username");
  userHandle.textContent = obj.login;

  let userProfile = document.createElement("p");
  userProfile.textContent = "Profile:";
  let userProfileUrl = document.createElement("a");
  userProfileUrl.textContent = `${obj.html_url}`;
  userProfileUrl.href = obj.html_url;


  let userFollowers = document.createElement("p");
  userFollowers.textContent = `Followers: ${obj.followers}`;

  let userFollowing = document.createElement("p");
  userFollowing.textContent = `Following: ${obj.following}`;



  let userBio = document.createElement("p");
  userBio.textContent = `Bio: ${obj.bio}`

  //putting card together
  userCard.appendChild(avatarImg);
  userCard.append(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userHandle);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileUrl);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);


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
let followersArray = ["tetondan", "allisonkydy", "justsml", "luishrd", "bigknell"];

//followers_url
//`htttps://api.github.com/users/${username}
function myNewFollowers(array) {
    array.forEach(item => {
      axios.get(`https://api.github.com/users/${item}`)
        .then(response => {
          console.log("Yay!!!");
          console.log(response);
            const newestFollowerCards = createCard(response.data);
            cards.appendChild(newestFollowerCards);
        
          }) //close then 
          .catch(err => {
            console.log("errors, guys");
          })//close atch
      })

};

myNewFollowers(followersArray);


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

});


// function createFollowerCards(array){

//     let newCards =array.map(profile => { 
//               //elements, classes, and content
//         let userCard = document.createElement("div");
//         userCard.classList.add("card");
      
//         let cardInfo = document.createElement("div");
//         cardInfo.classList.add("card-info");
      
//         let avatarImg = document.createElement("img");
//         avatarImg.src = profile.avatar_url;

//         let userHandle = document.createElement("h3");
//         userHandle.classList.add("username");
//         userHandle.textContent = profile.username;  
      
//         let userName = document.createElement("h3");
//         userName.classList.add("name");
//         userName.textContent = profile.name;
      
//         let userLocation = document.createElement("p");
//         userLocation.textContent = `Location: ${profile.location}`;

//         let userProfile = document.createElement("p");
//         userProfile.textContent = `Profile: `;
//         userProfileUrl = document.createElement("a");
//         userProfileUrl.textContent = profile.url;
//         userProfileUrl.href = profile.url;

//         let userFollowers = document.createElement("p");
//         userFollowers.textContent = `Followers: ${profile.followers}`;

//         // let userFollowing = document.createElement("p");
//         // userFollowing.textContent = `following: ${profile.following}`;

//         let userFollowing = document.createElement("p");
//         userFollowing.textContent = `Following: ${profile.following}`;
        
//         // let userBio = document.createElement("p");
//         // userFollowing.textContent = profile.bio;

//         let userBio = document.createElement("p");
//         userBio.textContent = `Bio: ${profile.bio}`;
//         //putting card together
//         userCard.appendChild(avatarImg);
//         userCard.append(cardInfo);
//         cardInfo.appendChild(userName);
//         cardInfo.appendChild(userHandle);
//         cardInfo.appendChild(userLocation);
//         cardInfo.appendChild(userProfile);
//         userProfile.appendChild(userProfileUrl);
//         cardInfo.appendChild(userFollowers);
//         cardInfo.appendChild(userFollowing);
//         cardInfo.appendChild(userBio);
//         //cardInfo.appendChild(userBio);
//         cards.appendChild(userCard);

//         return userCard;
//       });
    
//     return newCards;
    
// };

// createFollowerCards(followersArray);
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
