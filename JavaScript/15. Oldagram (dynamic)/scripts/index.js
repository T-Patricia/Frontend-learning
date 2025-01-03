// importing data
import {posts} from '../data/data.js'


// creating a function to render out the posts
function getFeedHtml(posts){
    // iterating over array
    const feedHtml = posts.map(post => {
        // destructuring the objects
        const { name, username, location, avatar, postpic, comment, likes, isLiked, uuid } = post
        
        // dynamically set the heart icon source based on `isLiked`
        const heartIconSrc = isLiked ? '../images/icon-heart-liked.png' : '../images/icon-heart.png';

        // inserting boilerplate
        return `
            <article class="post">
                <div class="user-container">
                    <img class="user-pfp" src="${avatar}">
                    <div>
                        <h1 class="bold-text">${name}</h1>
                        <p class="light-text">${location}</p>
                    </div>
                </div>

                <img class="post-pic" src="${postpic}">

                <div>
                    <img class="action-icons" src="${heartIconSrc}" data-like="${post.uuid}" alt="Clickable icon, increases number of likes.">
                    <img class="action-icons" src="../images/icon-comment.png" alt="Clickable icon to add comments.">
                    <img class="action-icons" src="../images/icon-dm.png" alt="Clickable icon to send direct message to the poster.">
                </div>

                <p  class="bold-text number-of-likes">${likes} likes</p>
                    
                <div class="post-content">
                    <p class="light-text"><span class="bold-text">${username}</span> ${comment}</p>
                </div>
            </article>
        `;
    }).join('');

return feedHtml
}


// event listener for like button
document.addEventListener('click', function(e){
    if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(postId){
    const targetPostObj = posts.find(function(post){
        return post.uuid === postId
    })

    if (!targetPostObj.isLiked) {
        targetPostObj.likes++
    } 
    else {
        targetPostObj.likes--
    }
    targetPostObj.isLiked = !targetPostObj.isLiked

    render()
}

function render(){
    // getting HTML elements
    // rendering it out on the page
    document.getElementById('feed-section').innerHTML = getFeedHtml(posts)
}

render()