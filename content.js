function injectSearchBox() {
  if (document.getElementById("watch-later-search-box")) return;

  const container = document.querySelector("#primary");
  if (!container) return;

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Filter Watch Later…";
  input.id = "watch-later-search-box";

  Object.assign(input.style, {
    padding: "8px",
    width: "100%",
    marginBottom: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#121212",
    color: "#fff"
  });

  container.prepend(input);

  input.addEventListener("input", () => {
    filterVideos(input.value);
  });
}

function filterVideos(keyword) {
  keyword = keyword.toLowerCase();
  const videoCards = document.querySelectorAll("ytd-playlist-video-renderer");

  videoCards.forEach(card => {
    const titleNode = card.querySelector("#video-title");
    const fullTitle = titleNode?.textContent?.trim().toLowerCase() || "";
    const shouldShow = fullTitle.includes(keyword);
    card.style.display = shouldShow ? "" : "none";
  });
}

// Retry logic until DOM stabilizes
function waitForVideosAndInjectBox() {
  const tryInject = () => {
    const listReady = document.querySelectorAll("ytd-playlist-video-renderer").length > 5;
    const containerReady = document.querySelector("#primary");

    if (listReady && containerReady) {
      injectSearchBox();
      clearInterval(retryInterval);
    }
  };

  const retryInterval = setInterval(tryInject, 500);
}

// Inject on YouTube page load
waitForVideosAndInjectBox();
