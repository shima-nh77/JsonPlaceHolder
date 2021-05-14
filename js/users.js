axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(response => {
    const data = response.data;
    const postsContainer = $("#users");
    // console.log("data",data);
    data.forEach(element => {
        // console.log("element",element);
        postsContainer.append(`
            <div class="col-md-3">
                <div class="card mt-2 text-center" style=" height:568px;">
                    <div class="card-body">
                    <img id="image/prof-img" src="image/Profile-icon-9.png" 
                     style="height: 200px; width: 200px; margin: auto;margin-top: -25px;">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.username}</p>
                    <p class="card-text">${element.email}</p>
                    <p class="card-text">${element.phone}</p>
                    <p>Adrees:${element.address.city}-${element.address.suite}-
                    ${element.address.street}-${element.address.zipcode}<p>
                    <p>Company:${element.company.name}</p>
                    <p>Website:${element.website}</p>
                    <a href="#" onClick="getUserALbums(${element.id})" class="btn btn-secondary btn-sm"> Albums</a>
                    <a href="#" onClick="getUserTodoes(${element.id})" class="btn btn-success btn-sm">  Todoes</a>
                    <a href="#" onClick="getUserPosts(${element.id})" class="btn btn-info btn-sm">  Posts</a>
                    </div>
                </div>
            </div>
        `);
    });
})

function getUserALbums(albumId){
    axios.get(`https://jsonplaceholder.typicode.com/users/${albumId}/albums`)
    .then(response => {
        const data = response.data;
        $("#photos .row").html("");
        const myModal = new bootstrap.Modal(document.getElementById('photos'));
        data.forEach(element => {
            $("#photos .row").append(`
            <div class="col-md-4">
            <div class="card mt-2 text-center" style=" height:190px;">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <a onClick="getAlbumPhotos(${element.id})" href="#" class="btn btn-success"
                style="position:absolute; bottom:7%;left: 25%;">Show Photos</a>
                </div>
            </div>
        </div>
              
            `);
            
        });
        myModal.show();
        
    })
}
function getAlbumPhotos(albumId){
    axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then(response => {
        const data = response.data;
        $("#photos .row").html("");
        const myModal = new bootstrap.Modal(document.getElementById('photos'));
       
        data.forEach(element => {
            $("#photos .row").append(`
                <div class="col-md-4 mt-2 ">
                    <div class="card"  style="height:351.33px">
                        <img src="${element.thumbnailUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        </div>
                    </div>
                </div>
              
            `);
            
        });
        myModal.show();
        
    })
}

function getUserTodoes(albumId){
    axios.get(`https://jsonplaceholder.typicode.com/users/${albumId}/todos`)
    .then(response => {
        const data = response.data;
        $("#photos .row").html("");
        const myModal = new bootstrap.Modal(document.getElementById('photos'));
        data.forEach(element => {
            $("#photos .row").append(`
            <div class="col-md-4">
            <div class="card mt-2 text-center" style=" height:200px;">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <h5 class="card-title"><span class="fw-bold">Completed:</span>${element.completed}</h5>
            </div>
        </div>
              
            `);
            
        });
        myModal.show();
        
    })
}

function getUserPosts(albumId){
    axios.get(`https://jsonplaceholder.typicode.com/users/${albumId}/posts`)
    .then(response => {
        const data = response.data;
        $("#photos .row").html("");
        const myModal = new bootstrap.Modal(document.getElementById('photos'));
        data.forEach(element => {
            $("#photos .row").append(`
            <div class="col-md-12">
            <div class="card mt-2 text-center" style=" height:160px;">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <h5 class="card-title">${element.body}</h5>
            </div>
        </div>
              
            `);
            
        });
        myModal.show();
        
    })
}