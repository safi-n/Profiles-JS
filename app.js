const data = [
  {
    name: 'Safi Noorzai',
    age: 29,
    gender: 'Male',
    lookingFor: 'female',
    country: 'Afghanistan',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Muhanad',
    age: 26,
    gender: 'Male',
    lookingFor: 'female',
    country: 'Egypt',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Zainab',
    age: 26,
    gender: 'Female',
    lookingFor: 'Male',
    country: 'Tuni',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  }
];


const profiles = profileIterator(data);
// Display profile
const displayProfile = nextProfile();


// Next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile != undefined) {

  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Country: ${currentProfile.country}</li>
  </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
  `;
  } else {
    window.location.reload();
  }
};

// Profile iterator
function profileIterator(profiles) {
  let index = 0;

  return {
    next: function() {
      return index < profiles.length ?
      {value: profiles[index++], done: false} :
      {done: true}
    }
  };
};
