// Simple normalizer.

const posts = [
  {
    id: "postOne",
    author: { username: "user1", name: "User 1" },
    bodyText: "The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    comments: [
      {
        id: "comment1",
        author: { username: "testUser2", name: "Unknown", lastName: "unknown" },
        comment: "Ola!",
        isAuthorAnonymous: true,
      }
    ]
  },
  {
    id: "postTwo",
    author: { username: "user2", name: "User 2" },
    bodyText: "When an unknown printer took a galley",
    comments: [
      {
        id: "comment2",
        author: { username: "user3", name: "User 3", lastName: "unknown" },
        comment: "testComment from user3",
        isAuthorAnonymous: false,
      },
      {
        id: "comment3",
        author: { username: "Henry1030", name: "Henry", lastName: "Lowson" },
        comment: "Hello my friend, my name is Henry!",
        isAuthorAnonymous: false,
      }
    ]
  }
];


function normalize(arr) {
  return arr.reduce((acc, _item) => {
    const commentsIds = _item.comments.forEach((_comment) => {
  	acc.allCommentsIds.push(_comment.id);
    });
  
    acc.byId[_item.id] = {
      id: _item.id,
      author: _item.author.username,
      bodyText: _item.body,
      comments: _item.comments,
    };
    acc.allIds.push(_item.id);
    
    return acc;
  }, {allIds: [], byId: {}, allCommentsIds: []});
}

console.log(normalize(posts));
