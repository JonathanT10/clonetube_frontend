import commentAPI from './commentAPI';


const clickLikes = async (comment) => {
    comment.likes = comment.likes +1;
    console.log("likes",comment.likes)
    const response = await commentAPI.put(`/${comment._id}`,
    {
      likes: comment.likes,
      dislikes: comment.dislikes
    });
    
  }

  export default clickLikes;