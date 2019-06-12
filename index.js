function createPost(){
  //~~~~~~~~~~~~~Record form values
  let postTitle = document.getElementById("postTitle").value;
  let postBody = document.getElementById("postBody").value;
  let postAuthor = document.getElementById("postAuthor").value;

  //~~~~~~~~~~~~~Create HTML for blog post
  //Create comments section
  let commentsTemplate = document.getElementById("comments-template").innerHTML;
  let commentsTemplateFn = _.template(commentsTemplate);
  let commentsTemplateHTML = commentsTemplateFn({});



  //Create blog post
  let postTemplate = document.getElementById("post-template").innerHTML;
  let postTemplateFn = _.template(postTemplate);
  let postTemplateHTML = postTemplateFn({
    postTitle: postTitle,
    postBody: postBody,
    postAuthor: postAuthor,
    commentsSection: commentsTemplateHTML
  })

  //Create blog post container
  let pageTemplate = document.getElementById('page-template').innerHTML;
  let pageTemplateFn = _.template(pageTemplate);
  let pageTemplateHTML = pageTemplateFn({
    blogPost: postTemplateHTML
  })

  let mainDoc = document.getElementsByTagName('main');
  mainDoc.innerHTML += pageTemplateHTML;

}

function postComment(){
  let commenter = document.getElementById('commenter').value;
  let comment = document.getElementById('comment').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let commentTemplateFn = _.template(commentTemplate);
  let commentTemplateHTML = commentTemplateFn({
    comment: comment,
    commenter: commenter
  })

  let comments = document.getElementById('comments');
  comments.innerHTML += commentTemplateHTML;
}
