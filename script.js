function addComment(){

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let comment = document.getElementById("message").value;

    if(!firstName || !lastName || !comment){
        alert("Tous les champs doivent être remplis");
        return
    }

    let firstDiv = document.createElement("div");
    let title = document.createElement("h3");
    let commenterName = document.createTextNode(firstName + " " + lastName);
    title.appendChild(commenterName);

    let paragraph = document.createElement("p");
    let newComment = document.createTextNode(comment);
    paragraph.appendChild(newComment);

    let secondDiv = document.createElement("div");
    let thirdDiv = document.createElement("div");
    
    firstDiv.appendChild(secondDiv);
    secondDiv.appendChild(title);
    title.appendChild(thirdDiv);
    thirdDiv.appendChild(paragraph);

    let commentList = document.getElementById("comment-list");
    commentList.appendChild(firstDiv)

    firstDiv.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
    secondDiv.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
    title.classList.add("font-medium", "text-gray-900");
    thirdDiv.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");

}

function noReload(event) {
    event.preventDefault();
}

function resetForm() {
    document.getElementById("form").reset();
}