let params = (new URL(document.location)).searchParams;
let id = params.get("id");

async function updateStoryText() {
	const storyData = await getStory(id);
	if (storyData) {
		document.querySelector("#storyTitle").textContent = storyData.title;
		document.querySelector("#storyName").textContent = `By ${storyData.name}`;
		document.querySelector("#storyStory").textContent = storyData.story;
	} else {
		document.querySelector("#storyTitle").textContent = "No story found!";
	}
}

updateStoryText();