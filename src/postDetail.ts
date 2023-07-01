import { Posts , Comments } from "./data.js";

function createPageDetail() {

  const url = new URLSearchParams(window.location.search);
  const idUrl = url.get("id");
  console.log(idUrl)

  Posts.forEach((post) =>{
    if (Number(idUrl) == post.id){
      const postBody = `
        <section class="post-section">
          <div class="teste-image">
            <img src="${post.imageUrl}" alt="capa filme" />
          </div>
          <div class="texto-div">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        </section>
      `
      document.getElementById("detail-container")!.innerHTML += postBody;
    }
  })

  Comments.forEach((comment) => {
    if (Number(idUrl) == comment.postId) {
      const commentBody = `
      <div class="comments-box">
        <div class="comments">
          <address class="user">
            <span>${comment.email.split("@")[0]} : ${comment.email}</span>: ${comment.body} 
          </address>
        </div>
      </div>
      `
      document.getElementById("comments-container")!.innerHTML += commentBody;
    }
  })
}

createPageDetail();
