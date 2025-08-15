

let comments = [];

comments = [
  {
    user: "amyrobson",
    avatar: "assets/image-amyrobson.webp",
    time: "1 month ago",
    text: "Impressive! Though it seems the drag feature could be improved.But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    votes: 12,
    replies: []
  },
  {
        user: "maxblagun",
        avatar: "assets/image-maxblagun.webp",
        time: "2 weeks ago",
        text: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        votes: 5,
        replies: [
        {
            user: "ramsesmiron",
            avatar: "assets/image-ramsesmiron.webp",
            time: "1 week ago",
            text: "@maxblagun If you're still new. I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            votes: 4,
            replies: []
        },
        {
            user: "juliusomo",
            avatar: "assets/image-juliusomo.webp",
            time: "2 days ago",
            text: "@ramsesmiron I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/ framework. But the fundamentals are what stay constant.",
            votes: 2,
            replies: []
        }
        ]
    }, 
]

function renderComments(){
    const commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = "";

    comments.forEach((comment, index) => {
        const commentsDiv = document.createElement("div");
        commentsDiv.className = "comment";

        commentsDiv.innerHTML = 
        `
            <div class="comment-content">
                <div class="vote">
                    <button class="vote-btn-plus" onClick="vote(${index}, 1)">+</button>
                    <p>${comment.votes}</p>
                    <button class="vote-btn-minus" onClick="vote(${index}, -1)">-</button>
                </div>
                <div class="usercomment">
                    <div class="userprofile">
                        <img src="${comment.avatar}" alt = "user image"></img>
                        <p><strong>${comment.user}</strong> ${comment.time}</p>
                    </div>
                    <p>${comment.text}</p>
                </div>
                <div class="comment-actions">
                    <button class="replybtn" onclick="showReplyBox(${index})"><img src ="assets/icon-reply.svg" alt = "reply button"/><strong>Reply</strong></button>
                </div>
            </div>
            <div id="reply-box-${index}" class="reply-box" style="display: none;">
                <textarea id="reply-input-${index}" placeholder="Write a reply..."></textarea>
                <button onclick="addReply(${index})">Send</button>
            </div>       
        `;
        
        setTimeout(() => { // Use timeout so DOM updates first
        const replyInput = document.getElementById(`reply-input-${index}`);
        if (replyInput) {
            replyInput.addEventListener("keydown", function (event) {
                if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    addReply(index);
                }
            });
        }
    }, 0);

    if (Array.isArray(comment.replies)) {
    const repliesContainer = document.createElement("div");

    comment.replies.forEach((reply, replyIndex) => {
        const replyDiv = document.createElement("div");
        replyDiv.className = "reply";

        replyDiv.innerHTML = `
            <div class="comment-content">
                <div class="vote">
                    <button class="vote-btn-plus">+</button>
                    <p>${reply.votes}</p>
                    <button class="vote-btn-minus">-</button>
                </div>
                <div class="usercomment">
                    <div class="userprofile">
                        <img src="${reply.avatar}" alt="user image">
                        <p><strong>${reply.user}</strong> ${reply.time}</p>
                    </div>
                    <p>${reply.text}</p>
                </div>
                <div class="comment-actions">
                    <button class="edit" onclick="editReply(${index}, ${replyIndex})"><img src ="assets/icon-edit.svg" alt = "reply button"/><strong>Edit</strong></button>
                    <button class="delete" onclick="deleteReply(${index}, ${replyIndex})"><img src ="assets/icon-delete.svg" alt = "reply button"/><strong>Delete</strong></button>
                </div>
            </div>
        `;

        repliesContainer.appendChild(replyDiv);
    });

    commentsDiv.appendChild(repliesContainer);
    
}

    


        commentsContainer.appendChild(commentsDiv)
    });
    
}

function addComment(){
    const input = document.getElementById("newComment");
    const text =  input.value.trim();

    comments.push({
        user: "You",
        avatar: "assets/image-juliusomo.webp",
        time: "Just now",
        text,
        votes: 0
    });

    input.value = "";
    renderComments();
}

function editComment(index){
    const newComment = prompt("Edit your comment", comments[index].text);
    if (newComment !== null) {
        comments[index].text = newComment;
        renderComments();
    }
}

function deleteComment(index){
    if (confirm("Delete this comment?")) {
        comments.splice(index, 1);
        renderComments();
    }
}

function vote(index, value){
    comments[index].votes += value;
    renderComments();
}

function showReplyBox(index) {
    const replyBox = document.getElementById(`reply-box-${index}`);
    replyBox.style.display = replyBox.style.display === "none" ? "block" : "none";
}

function addReply(index) {
    const input = document.getElementById(`reply-input-${index}`);
    const text = input.value.trim();

    if (text === "") return;

    const reply = {
        user: "You",
        avatar: "assets/image-juliusomo.webp",
        time: "Just now",
        text: text,
        votes: 0,
        replies: [] // for future nesting if needed
    };

    // Ensure replies array exists
    if (!comments[index].replies) {
        comments[index].replies = [];
    }

    comments[index].replies.push(reply);
    renderComments();
}

function editReply(commentIndex, replyIndex) {
    const newReply = prompt("Edit your reply", comments[commentIndex].replies[replyIndex].text);
    if (newReply !== null) {
        comments[commentIndex].replies[replyIndex].text = newReply;
        renderComments();
    }
}

function deleteReply(commentIndex, replyIndex) {
    if (confirm("Delete this reply?")) {
        comments[commentIndex].replies.splice(replyIndex, 1);
        renderComments();
    }
}


renderComments();

document.getElementById("newComment").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); 
        addComment();
    }
});