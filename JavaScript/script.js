document.getElementById('btn')
       .addEventListener('click', function (){

        //Step-2: Get the text written in the comment text area
         const commentBox = document.getElementById('comment-box');
         
         const newComment = commentBox.value;

         //Step-3: Get the parent node where to publish content
         const commentContainer = document.getElementById('comment-container');

         //Step-4: Create a comment P and set the innerText
         const commentElement = document.createElement('p');
         commentElement.classList.add('comment');
         commentElement.innerText = newComment;

         //Step-5: Append the new P tag to the parent Node
         commentContainer.appendChild(commentElement);

         //Step-6: Clean the text area
         commentBox.value = '';
       })