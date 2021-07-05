
//making sure my screen will read my code...
window.addEventListener("load", function(){

//this is the data "entry point"

const cards = document.querySelector(".cards");


//making a card for myself

async function cardCreator() {
      axios.get("https://api.github.com/users/JulieGumerman")
      .then((response) => createCard(response.data))
    // .then((response) => console.log(response.data))
    .catch((err) => {
      console.log("oops");
    })
}

//calling the function to make a card for myself
cardCreator();
 

//cardmaking function (the contents and their organization)

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
  userProfile.textContent = "Profile: ";
  let userProfileUrl = document.createElement("a");
  userProfileUrl.textContent = `${obj.html_url}`;
  userProfileUrl.href = obj.html_url;


  let userSpecifics = document.createElement("div");
  userSpecifics.classList.add("user-specifics");


  let userFollowers = document.createElement("p");
  userFollowers.textContent = `Followers: ${obj.followers}`;

  let userFollowing = document.createElement("p");
  userFollowing.textContent = `Following: ${obj.following}`;

  let userRepos = document.createElement("p");
  userRepos.textContent = `Public repos: ${obj.public_repos}`;

  let userBio = document.createElement("p");
  userBio.textContent = `Bio: ${obj.bio}`;

  //putting card together
  userCard.appendChild(avatarImg);
  userCard.append(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userHandle);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileUrl);
  userCard.appendChild(userSpecifics);
  userSpecifics.appendChild(userFollowers);
  userSpecifics.appendChild(userFollowing);
  userSpecifics.appendChild(userRepos);
  userSpecifics.appendChild(userBio);


  cards.appendChild(userCard);
  
  //event handler
  userCard.addEventListener("mouseover", () => {
    userSpecifics.style.display = "block";
    cardInfo.style.borderBottom = "1px solid #1fc8db";
  }) //close event handler

  userCard.addEventListener("mouseleave", () => {
    userSpecifics.style.display = "none";
    cardInfo.style.borderBottom = "none";
  })
  //return card
  return userCard;
}





/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/*******************************THIS WORKS! DO NOT ERASE IT!!!!!**************************/
// let followersArray = ["tetondan", "allisonkydy", "justsml", "luishrd", "bigknell"];

// //followers_url
// //`htttps://api.github.com/users/${username}
// function myNewFollowers(array) {
//     array.forEach(item => {
//       axios.get(`https://api.github.com/users/${item}`)
//         .then(response => {
//           console.log("Yay!!!");
//           console.log(response);
//           const newestFollowerCards = createCard(response.data);
//           cards.appendChild(newestFollowerCards);
        
//           }) //close then 
//         .catch(err => {
//             console.log("errors, guys");
//         })//close atch
//       })

// };

// myNewFollowers(followersArray);

/*************************************DO NOT TOUCH ABOVE THIS LINE!!!!!**************/

function allTheNewFollowers() {
  axios.get(`https://api.github.com/users/JulieGumerman/followers`)
    .then(response => {
      console.log(response);
      console.log("I made it work!!!");
      newFollowers=[];
      response.data.forEach(item => {
        newFollowers.push(item.login);
      })//close for each
      newFollowers.forEach(person => {
        axios.get(`https://api.github.com/users/${person}`)
          .then(response => {
            console.log(response.data);
            const brandNewCards = createCard(response.data);
            cards.appendChild(brandNewCards);
          })//close inner .then()
          .catch(err => {
            console.log(err);
          })
      })//close second forEach
    })//close then

    .catch(err => {
      console.log("oops!!!");
      console.log(err);
    })

}//closeFunction

allTheNewFollowers();

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

}); //closing the code that surrounds my entire window



// createFollowerCards(followersArray);
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
