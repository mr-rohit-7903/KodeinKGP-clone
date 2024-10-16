// Menu toggle starts
const menuIcon = document.querySelector("#menu");
const navbar = document.querySelector("header .navbar");
const navLinks = document.querySelectorAll("header .navbar ul li a");

menuIcon.addEventListener("click", function() {
  navbar.classList.toggle("nav-toggle");
});

navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navbar.classList.remove("nav-toggle");
    });
});
// Menu toggle ends


//Adding Cards starts
// Function to load and display the head cards
async function loadheadCards() {
  try {
    const response = await fetch('data.json'); 
    const data = await response.json();  

    const container = document.querySelector(".c1");  

    // adding Html to card 
    data.heads.forEach(item => { 
      const cardHTML = `
        <div class="card">
          <div class="role">${item.role}</div>
          <div class="image"><img src="${item.imageUrl}" alt="${item.name}"></div>
          <div class="icons">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-solid fa-envelope"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-github"></i></a>
          </div>
          <div class="name">${item.name}</div>
        </div>
      `;
      container.innerHTML += cardHTML; 
    });
  } catch (error) {
    console.error('Error fetching the JSON data:', error);  
  }
}

// Function to load and display the cards
async function loadCards(containerSelector, section) {
  try {
    const response = await fetch('data.json'); 
    const data = await response.json();  

    const container = document.querySelector(containerSelector);  

    const items = data[section];

    // adding Html to card 
    items.forEach(item => { 
      const cardHTML = `
        <div class="card">
          <div class="image"><img src="${item.imageUrl}" alt="${item.name}"></div>
          <div class="icons">
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-solid fa-envelope"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-github"></i></a>
          </div>
          <div class="name">${item.name}</div>
        </div>
      `;
      container.innerHTML += cardHTML; 
    });
  } catch (error) {
    console.error('Error fetching the JSON data:', error);  
  }
}

loadheadCards(); // calling for heads data 
loadCards(".c2", "founders"); //calling for founders data
loadCards(".c3", "advisors"); // calling for advisors data


const listItems = document.querySelectorAll(".secbox .teamName ul li");
const subTitle = document.querySelector(".teams .secbox .subTitle");

listItems.forEach(item => {
  item.addEventListener('click', () => {

    //removing class "activeTeam" from all li elements
    listItems.forEach(li => li.classList.remove("activeTeam"));

    //adding class "activeTeam" to clicked li
    item.classList.add('activeTeam');

    //changing Sub title
    subTitle.innerHTML = item.innerHTML;

    addTeam(); // calling function addTEam to get the data accordingly
  });
});

// Function to display team cards accordingly
function addTeam(){
  const container = document.querySelector(".c4");

  //removing all cards from container
  if (container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  //loading cards accoring to active Team
  if(listItems[0].classList.contains('activeTeam')) loadCards(".c4","tech");
  else if(listItems[1].classList.contains('activeTeam')) loadCards(".c4","ai");
  else if(listItems[2].classList.contains('activeTeam')) loadCards(".c4","blockchain");
  else if(listItems[3].classList.contains('activeTeam')) loadCards(".c4","events");
  else if(listItems[4].classList.contains('activeTeam')) loadCards(".c4","design");
}
addTeam(); // calling for the first time

//Adding Cards ends


