let DropdownArtistValue ='All'; // initial value
    
function handleArtistDropdown() {
  console.log(event.target.value);
  DropdownValue = event.target.value;
  generateContent();
}

let DropdownYearValue ='All'; // initial value
    
function handleYearDropdown() {
  console.log(event.target.value);
  DropdownValue = event.target.value;
  generateContent();
}

let DropdownMediumValue ='All'; // initial value
    
function handleMediumDropdown() {
  console.log(event.target.value);
  DropdownValue = event.target.value;
  generateContent();
}

let DropdownColorValue ='All'; // initial value
    
function handleColorDropdown() {
  console.log(event.target.value);
  DropdownValue = event.target.value;
  generateContent();
}

function generateContent(){
fetch('https://api.airtable.com/v0/appDsgDNlMVCrpbey/Table%201', {
  headers: {
    Authorization: 'Bearer keyZA1e5QRYt1En9y', // this is your API key, starting with 'key...' found in your Airtable account
  },
})
  .then(res => res.json()) // tells JS to expect data in json format
  .then(data => {
    // all your code should go inside here

    console.log(data); // first, log out your data. Explore it in the browser console.


    
    const postersContainer = document.querySelector('.posters-container');
    // tell JS about the div we added to our html file so we can put content inside it

    // loop over each record (row) of our Airtable data

    data.records
      .slice(0, 70) // only show the first 5 albums
      .filter(poster => {
        return DropdownArtistValue === 'All' ? poster : poster.fields.Artist === DropdownArtistValue;
      })

      .filter(poster => {
        return DropdownYearValue === 'All' ? poster : poster.fields.Year === DropdownYearValue;
      })

      .filter(poster => {
        return DropdownMediumValue === 'All' ? poster : poster.fields.Medium === DropdownMediumValue;
      })

      .filter(poster => {
        return DropdownColorValue === 'All' ? poster : poster.fields.Color === DropdownColorValue;
      })


      .forEach(poster => {
        console.log(poster); // look in the console at each album to see what fields we can access (these are your own table headers from Airtable)

        // now we add html to our albumsContainer div
        // this is where we take our data from Airtable and put it in our html
        // think of this chunk of HTML as a component template for each entry in our database
        // note the backticks `` below. This allows us to add html + js together using ${field} in a single block of code
        postersContainer.innerHTML += `
      
          <div class="poster" onclick="imageClick()">
          <div class="images">
          <img src="${poster.fields.Attachements[0].thumbnails.large.url}" class="img2" width='200' />
          
          </div>
          <div class="text">
          <h3>${poster.fields.Name}</h3> 
          <h5>${poster.fields.Artist}</h5>
          <h5>${poster.fields.Dimensions}</h5>  
          <h5>${poster.fields.Year}</h5>
          </div>
          </div>
          
        `;

        // that's it!
        // Try adding or removing items in your Airtable base and see your website update on refresh
      });
    
  });    
}
generateContent()

const screen = document.querySelector('.background-screen');
let currentItem;

function imageClick() {
  screen.style.display = 'block';
  currentItem = event.currentTarget;
  currentItem.classList.add('show-info');
}

function closeScreen() {
  screen.style.display = 'none';
  currentItem.classList.remove('show-info');
}



