// importing data from data.js file
import {tweetsData} from '../data/data.js'
// uuid generator function 
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// creating an eventListener to listen clicks on tweet-action icons
// using data attribute to identify which tweet on the feed we clicked on
document.addEventListener('click', function(e){
    // if the clicked element has a data attribute called 'like'
    if (e.target.dataset.like){
        // if it does, call this function
        handleLikeClick(e.target.dataset.like)
    }
    // else if the clicked element has a data attribute called 'retweet'
    else if (e.target.dataset.retweet){
        // if it does, call this function
        handleRetweetClick(e.target.dataset.retweet)
    }
    // else if the clicked element has a data attribute called 'reply'
    else if (e.target.dataset.reply){
        // if it does, call this function
        handleReplyClick(e.target.dataset.reply)
    }
    // else if the clicked element has the id called 'tweet-btn'
    else if (e.target.id === 'tweet-btn'){
        // if it does, call this function
        handleTweetBtnClick()
    }
})

// creating a function that nested in the eventListener - LIKES
function handleLikeClick(tweetId){
    // declaring a const to iterate through our data
    const targetTweetObj = tweetsData.filter(function(tweet){
        // iterates through the feed and looking for an identical uuid as our stored tweetId
        // if the value is falsey, it doesnt return anything, doesnt store anything
        // if the value is truthy, it returns true, saves the uuid in the set up const
        return tweet.uuid === tweetId
    // return the 1st object of the array
    })[0]

    if (!targetTweetObj.isLiked){
        // incrementing likes by 1
        targetTweetObj.likes++
    } else {
        // decrementing likes by 1
        targetTweetObj.likes--
    }
    // flipping the booleans true/false value
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    // rendering it out
    render()
}

// creating a function that nested in the eventListener - RETWEET
function handleRetweetClick(tweetId){
    // iterates through the feed and looking for an identical uuid as our stored tweetId
    // if the value is falsey, it doesnt return anything, doesnt store anything
    // if the value is truthy, it returns true, saves the uuid in the set up const
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    // return the 1st object of the array
    })[0]

    if (targetTweetObj.isRetweeted){
            // decrementing likes by 1
        targetTweetObj.retweets--
    } else {
        // incrementing likes by 1
        targetTweetObj.retweets++
    }
    // flipping the booleans true/false value
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    // rendering it out
    render()
}

// creating a function that nested in the eventListener - REPLY
function handleReplyClick(replyId){
    // toggling CSS display styling
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

// creating a function that nested in the eventListener - TWEET BUTTON
function handleTweetBtnClick(){
    // declaring const variables
    const tweetInput = document.getElementById('tweet-input')
    // empty strings not allowed to post
    if (tweetInput.value){
        // pushing a new object at the 1st place in the feed array 
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    // rendering it
    render()
    // emptying the textarea after tweeting
    tweetInput.value = ''
    }
}

// creating a function to get the whole feed from the data.js and transform it
function getFeedHtml(){
    // creating an empty string for the data
    let feedHtml = ``
    // forEach() method to run through our data.js tweet by tweet
    tweetsData.forEach(function(tweet){

        // declaring variable as place to store later class - LIKE
        let likeIconClass = ''
        // changin class, if isLiked = true
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }

        // declaring variable as place to store later class - RETWEET
        let retweetIconClass = ''
        if(tweet.isRetweeted){
            // changin class, if isRetweeted = true
            retweetIconClass = 'retweeted'
        }

        // declaring variable to hold replies
        let repliesHtml = ''
        // examine which tweets have actual replies
        if (tweet.replies.length > 0){
            // nestin another forEach function
            // storing JS values in a template string
            // updating repliesHtml variable
            tweet.replies.forEach(function(reply){
                repliesHtml += `
                    <div class="tweet-reply">
                        <div class="tweet-inner">
                            <img src="${reply.profilePic}" class="profile-pic">
                                <div>
                                    <p class="handle">${reply.handle}</p>
                                    <p class="tweet-text">${reply.tweetText}</p>
                                </div>
                        </div>
                    </div>`
            })
        }

        // changing innerHTML
        // transforming them with `backticks` to HTML form
        // adding each tweets uniqe uuid with data attributes
        // adding .JS class with ${}
        feedHtml += `
                    <div class="tweet">
                        <div class="tweet-inner">
                            <img src="${tweet.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${tweet.handle}</p>
                                <p class="tweet-text">${tweet.tweetText}</p>
                                <div class="tweet-details">
                                    <span class="tweet-detail">
                                        <i class="fa-regular fa-comment-dots" 
                                        data-reply="${tweet.uuid}"></i>
                                        ${tweet.replies.length}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-heart ${likeIconClass}"
                                        data-like="${tweet.uuid}"></i>
                                        ${tweet.likes}
                                    </span>
                                    <span class="tweet-detail">
                                        <i class="fa-solid fa-retweet ${retweetIconClass}"
                                        data-retweet="${tweet.uuid}"></i>
                                        ${tweet.retweets}
                                    </span>
                                </div>   
                            </div>            
                        </div>
                        <div class="hidden" id="replies-${tweet.uuid}">
                            ${repliesHtml}
                        </div>  
                    </div>`
    })
    // returning feedHTML variable, which stores the looped data
    return feedHtml 
}

// creating rendering function to render out tweets from the feed
function render(){
    // get controll of feed div, rendering out the feed
    document.getElementById('feed').innerHTML = getFeedHtml()
}

// calling render function, so it shows on the previewed page
render()