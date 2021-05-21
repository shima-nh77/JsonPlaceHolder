axios.get(`https://jsonplaceholder.typicode.com/albums`)
.then(response => {
    const data = response.data;
    const postsContainer = $("#albums");
    $("#modalTitle").append(`
    Photos in this album: ${data.length} 
    `);
    // console.log("data",data);
    data.forEach(element => {
        // console.log("element",element);
        postsContainer.append(`
            <div class="col-md-3">
                <div class="card mt-2 text-center" style=" height:150px;">
                    <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <a onClick="getAlbumPhotos(${element.id})" href="#" class="btn btn-success"
                    style="position:absolute; bottom:7%;left: 29%;">Show Photos</a>
                    </div>
                </div>
            </div>
        `);
    });
})

//get photos:
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