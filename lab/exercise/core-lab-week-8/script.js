
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
      // filter the data down to only albums marked true for "has_listened_fully" in my Airtable base
      return poster.fields.Medium;
    })
    .sort((a, b) => {
      // sorting by earlier "release_year"
      return a.fields.Date - b.fields.Date;
    })

    
    
    .forEach(poster => {
      console.log(poster); // look in the console at each album to see what fields we can access (these are your own table headers from Airtable)

      // now we add html to our albumsContainer div
      // this is where we take our data from Airtable and put it in our html
      // think of this chunk of HTML as a component template for each entry in our database
      // note the backticks `` below. This allows us to add html + js together using ${field} in a single block of code
      postersContainer.innerHTML += `
      
          <div class="poster">
          <div class="images">
          <img src="${poster.fields.Attachements[0].thumbnails.large.url}" class="img2" width='200'/>
          
          </div>
          <div class="text">
          <h5>${poster.fields.Name}</h5> 
          <h5>${poster.fields.Dimensions}</h5>  
          <h5>${poster.fields.Artist}</h5>
          <h5>${poster.fields.Date}</h5>
          </div>
          </div>
          
        `;

      // that's it!
      // Try adding or removing items in your Airtable base and see your website update on refresh
    });
  });
