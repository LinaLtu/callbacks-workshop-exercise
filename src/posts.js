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

function getPostsPromise() {
  return new Promise((resolve) => {
    getPosts(posts => resolve(posts))
  });
}

const setPost = (post, callback) => {
  setTimeout(() => {
    posts.push({ ...post, id: generateId() });
    callback(post);
  }, 1000);
};

function setPostPromise(post) {
  return new Promise((resolve) => {
    setPost(post, () => {
      resolve(post);
    })
  })
}

const deletePost = (postIdx, callback) => {
  setTimeout(() => {
    posts.splice(postIdx, 1);
    callback(posts);
  }, 1000);
};

export default { setPostPromise, getPostsPromise, deletePost };
