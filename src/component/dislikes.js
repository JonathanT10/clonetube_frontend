import commentAPI from './commentAPI';


const clickDislikes = async (comment) => {
    comment.dislikes = comment.dislikes +1;
    console.log("likes",comment.dislikes)
    const response = await commentAPI.put(`/${comment._id}`,
    {
      likes: comment.likes,
      dislikes: comment.dislikes
    });
    
  }

  export default clickDislikes;