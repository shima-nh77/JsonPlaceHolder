axios.get(`https://jsonplaceholder.typicode.com/posts`)
.then(response => {
    const data = response.data;
    const postsContainer = $("#posts");
    // console.log("data",data);
    data.forEach(element => {
        // console.log("element",element);
        postsContainer.append(`
            <div class="col-md-4">
                <div class="card text-center mt-2" style="width: 350px; height: 280px;">
                    <a href="#" class="text-decoration-none" onClick="Deletepost(${element.id})" id="delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg></a>
                    <div class="card-body">
                    <h5 class="card-title" ">${element.title}</h5>
                    <p class="card-text"  >${element.body}</p>
                    <a href="post.html?id=${element.id}" class="btn btn-success" 
                    style="position:absolute; bottom:2%;left: 35%;">Read More</a>
                    </div>
                    </div>
                </div>
            </div>
        `);
    });
})

//deleting post:
 function Deletepost(postid){
    $("#delete").parent().parent().remove();
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postid}`)
    .then(function(){
        alert(` post has been deleted`);
    })
}