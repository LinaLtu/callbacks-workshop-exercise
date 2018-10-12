import Posts from "./posts";

const displayPosts = (posts) => {
    let output = "";
    posts.forEach(post => {
      output += `<li>${post.title} <button class="delete-button" data-id="${
        post.id
      }">Delete Item</button></li>`;
    });
    document.getElementById("posts").innerHTML = output;
    addOnClickToDeleteButtons();
};

const addOnClickToDeleteButtons = () => {
  document.getElementById("posts").addEventListener("click", () => {
    if (event) {
      const elem = event.target;
      console.log(event.target);
      if (elem.className === "delete-button") {
        console.log("Hello");
        let postId = elem.dataset.id;
        console.log("Data id", postId);
        Posts.deletePost(postId, displayPosts);
      }
    }
  });

  console.log("From add on click to delete buttons");
};

const addPost = () => {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  Posts.setPostPromise({ title, content })
    .then(Posts.getPostsPromise)
    .then(displayPosts)
    .then(() => console.log(Posts.posts));
};

document.getElementById("add-post").addEventListener("click", addPost);

Posts.getPostsPromise().then(displayPosts);
