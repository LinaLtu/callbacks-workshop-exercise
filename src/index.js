import Posts from "./posts";

const displayPosts = () => {
  Posts.getPosts(function(posts) {
    let output = "";
    posts.forEach(post => {
      output += `<li>${
        post.title
      } <button class="delete-button">Delete Item</button></li>`;
    });
    document.getElementById("posts").innerHTML = output;
    addOnClickToDeleteButtons();
  });
};

const addOnClickToDeleteButtons = () => {
  const deleteButtons = [...document.getElementsByClassName("delete-button")];
  deleteButtons.forEach((deleteButton, idx) => {
    deleteButton.addEventListener("click", () => deletePost(idx));
  });
  console.log("From add on click to delete buttons");
  console.log(Array.isArray(deleteButtons));
  console.log(deleteButtons);
};

const addPost = () => {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  Posts.setPost({ title, content }, displayPosts);
  console.log(Posts.posts);
};

document.getElementById("add-post").addEventListener("click", addPost);

const deletePost = idx => {
  Posts.deletePost(idx);
  displayPosts();
};

displayPosts();
