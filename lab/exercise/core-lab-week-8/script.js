console.log('hi')
fetch('https://api.airtable.com/v0/appDsgDNlMVCrpbey/Table%201'), {
    Headers: {
        Authorization: 'Bearer keyZA1e5QRYt1En9y',
},
}
    .then (reponse => Response.json())
    .then (data => {
        console.log(data);

    const container = document.querySelector('name');

    data.records.forEach(name => {
        console.log(name);

        container.innerHTML += 
        <div class="names">
                <h3>${name.fields.title}</h3>
                <h5>${name.fields.date}</h5>
        </div>;
    }); 

    console.log(data);

})