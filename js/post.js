//show the clicked post:
const urlSearchParams = new URLSearchParams(window.location.search);

const id = urlSearchParams.get("id");

console.log("id",id);
const postContainer = $("#post");

async function fetchData(){
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
        const data = response.data;
        postContainer.append(`
            <div class="col-md-12" style="margin-top:10px;">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.body}</p>
                    </div>
                </div>
            </div>
        `);
    })
 
    //show the comments for clicked post:
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => {
        const data = response.data;
        console.log("data",data);
        postContainer.append(`
            <div class="col-md-12 mt-3">
                <h3>Comments (${data.length}) : </h3>
            </div>
        `);

        data.forEach(element => {
            // console.log("element",element);
            postContainer.append(`
            <div class="row" >
                       <div class="col-sm-1 mt-3">
                       <img class="img-fluid rounded user-photo img-thumbnail" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                       </div><!-- /col-sm-1 -->
                       <div class="col-sm-10 mt-3">
                        <div class="card card-cm ">
                         <div class="card-header" id="cardHeader">
                          <strong><span>user:  </span>   ${element.id}</strong> <span class="text-muted">${element.name}</span>
                         </div>
                         <div class="card-body">${element.body}
                         <p>${element.email}</p>
                         </div>
                        </div>
                       </div>
                       </div>
                      
              
            `);
        });
        postContainer.append(`
            <div class="col-md-12 mt-3 mb-3">
            <button class="btn btn-info "  onClick="AddComment()" >Add Comment</button>
            </div>
        `);
        
    })
}
 fetchData();


  //adding comment:
  function AddComment(){
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
    $("#myModal form").submit(function(event){
     event.preventDefault();
        const data = $(this).serialize();
       
        axios.post("https://jsonplaceholder.typicode.com/comments",data)
        .then(res => {
            const data = res.data;
            alert(`Dear ${data.name} your comment has been received`);
        })
    })
}
  