const theForm = document.querySelector("#theForm");
document.querySelector("#submitButton").addEventListener('click', e => {
    e.preventDefault();
    let title = document.querySelector("#titleBox").value;
    let name = document.querySelector("#nameBox").value;
    let story = document.querySelector("#storyBox").value;
    postStory(title, name, story);
});