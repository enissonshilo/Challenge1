import { Posts } from "./data.js";

function createPost()

{Posts.forEach((post) => {
  const postBody = `
  <article class="card">
    <a class="go-post" href="views/postDetail.html?id=${post.id}">
      <div class="content">
        <img src="${post.imageUrl}" />
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <footer class="expand">
          <small>Expand...</small>
        </footer>
      </div>
    </a>
  </article>`
  document.getElementById("card-container")!.innerHTML += postBody;
  });
}

createPost();
