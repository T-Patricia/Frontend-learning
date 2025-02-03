// create a Dog class
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml() {
        const { name, avatar, age, bio, alt } = this
        return `
                <article class="tindog-container">
                    <div class="tindog-pfp-container">
                        <img id="like-badge" class="tindog-badge" src="./images/badge-like.png" alt="Tindog like badge">
                        <img id="nope-badge" class="tindog-badge" src="./images/badge-nope.png" alt="Tindog nope badge">
                        <img class="tindog-pfp" src=${avatar} alt=${alt}>
                        <h2 class="tindog-info">${name}, ${age}</h2>
                        <p class="tindog-bio">${bio}</p>
                    </div>
                    <div class="action-btns-container">
                        <img id="dislike-btn" class="action-btns" src="./images/icon-cross.png" alt="Tindog dislike icon">
                        <img id="like-btn" class="action-btns" src="./images/icon-heart.png" alt="Tindog like icon">    
                    </div>
                </article>
        `
    }
}

export default Dog