/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Yurimurda')
.then(response => {
  console.log(response);
  const card = document.querySelector('.cards');
  const otherCard = cardCreator(response.data);
  card.appendChild(otherCard);
})
.catch(error => {
  console.log("The data was not returned", error);
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   /*
{
  "login": "Yurimurda",
  "id": 50273894,
  "node_id": "MDQ6VXNlcjUwMjczODk0",
  "avatar_url": "https://avatars0.githubusercontent.com/u/50273894?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Yurimurda",
  "html_url": "https://github.com/Yurimurda",
  "followers_url": "https://api.github.com/users/Yurimurda/followers",
  "following_url": "https://api.github.com/users/Yurimurda/following{/other_user}",
  "gists_url": "https://api.github.com/users/Yurimurda/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Yurimurda/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Yurimurda/subscriptions",
  "organizations_url": "https://api.github.com/users/Yurimurda/orgs",
  "repos_url": "https://api.github.com/users/Yurimurda/repos",
  "events_url": "https://api.github.com/users/Yurimurda/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Yurimurda/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ian Vaughn",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2019-05-04T17:56:44Z",
  "updated_at": "2019-09-23T18:10:15Z"
}
   /*

   Skip to Step 3.
*/

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

function cardCreator (obj){
  let card = document.createElement('div')
  let avatar = document.createElement('img');
  let info = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let link = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  card.appendChild(avatar);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(link);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);
  

  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  location.classList.add('location');
  profile.classList.add('profile');
  link.classList.add('link');
  followers.classList.add('followers');
  following.classList.add('following');
  bio.classList.add('bio');



  avatar.src = obj.avatar_url;
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = obj.location;
  link.href = `${obj.html_url}`;
  followers.textContent = `Followers ${obj.followers}`;
  following.textContent = `Following ${obj.following}`;
  bio.textContent = obj.bio;

  
  // followersArray.appendChild(cardCreator);
  
  return card;
}