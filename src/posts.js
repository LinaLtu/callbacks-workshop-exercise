//event bubbling
// generating id on backend

const idGenerator = () => {
  let c = 0;
  return () => {
    return c++;
  };
};

let generateId = idGenerator();

const posts = [
  {
    id: generateId(),
    title: "Post One",
    body: "This is the content of post one"
  },
  {
    id: generateId(),
    title: "Post Two",
    body: "This is the content of post two"
  }
];

const getPosts = callback => {
  setTimeout(() => {
    callback(posts);
  }, 1000);
};

const setPost = (post, callback) => {
  setTimeout(() => {
    posts.push({ ...post, id: generateId() });
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
