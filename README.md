# WatchLaterSearch

A lightweight Chrome extension that adds an instant search bar to your YouTube Watch Later playlist, making it easy to find saved videos without endless scrolling.

## Features

- 🔍 Real-time video filtering
- ⚡ Instant search as you type
- 🎨 Dark mode friendly UI
- 🪶 Lightweight with zero dependencies
- 📺 Works directly inside YouTube's Watch Later playlist

## How It Works

The extension injects a search box at the top of your YouTube Watch Later page.

When you type a keyword, videos are filtered instantly based on their titles.

Example:

Search:

react


Results:
- React Tutorial for Beginners
- React Project Build
- Advanced React Patterns

All other videos are temporarily hidden.

## Installation

### Method 1: Load Unpacked Extension

1. Download or clone this repository.
2. Open Chrome and navigate to:


chrome://extensions


3. Enable **Developer Mode**.
4. Click **Load unpacked**.
5. Select the project folder.
6. Open your Watch Later playlist:


https://www.youtube.com/playlist?list=WL


7. Start searching.

## Project Structure


watch-later-filter/
│
├── manifest.json
├── content.js
└── README.md


## Permissions

The extension only runs on:


https://www.youtube.com/playlist?list=WL


It requires access to YouTube pages to inject the search interface and filter playlist items.

## Technical Details

### Content Script

The extension:

1. Waits for the Watch Later playlist to load.
2. Injects a search input field.
3. Listens for user input.
4. Filters playlist videos based on title matching.

### Search Logic

Filtering is case-insensitive.

```javascript
const shouldShow = fullTitle.includes(keyword);
