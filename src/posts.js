const posts = [
  { title: "Post One", body: "This is the content of post one" },
  { title: "Post Two", body: "This is the content of post two" }
];

const getPosts = callback => {
  setTimeout(() => {
    callback(posts);
  }, 1000);
};

const setPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback(post);
  }, 1000);
};

const deletePost = postIdx => {
  setTimeout(() => {
    posts.splice(postIdx, 1);
    return posts;
  }, 1000);
};

export default { setPost, getPosts, deletePost };
