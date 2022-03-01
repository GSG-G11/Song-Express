const searchInput = document.querySelector('input');
const searchForm = document.querySelector('#searchForm');
const cardContainer = document.querySelector('.card-container');
const loadingSpinner = document.querySelector('.spinner');
// Search

console.log(loadingSpinner);

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  if (searchInput.value.trim() === '') {
    searchInput.classList.add('error');
    searchInput.placeholder = 'Please enter a search term';
    return;
  }
  searchInput.classList.remove('error');
  cardContainer.innerHTML = '';
  const searchTerm = searchInput.value;
  showLoadingSpinner();
  fetch('/search?term=' + searchTerm)
    .then(response => {
      response.json().then(data => {
        if (!Object.keys(data).length) {
          const noResults = document.createElement('p');
          noResults.textContent = 'No results found';
          cardContainer.appendChild(noResults);
          hideLoadingSpinner();
        } else {
          hideLoadingSpinner();
          return data.tracks.hits.forEach(hit => songCard(hit));
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
});

function songCard(song) {
  const card = document.createElement('div');
  card.classList.add('card');
  cardContainer.appendChild(card);

  const songImage = document.createElement('img');
  songImage.classList.add('song-cover');
  songImage.src = song.track.images.coverart;
  card.appendChild(songImage);

  const songDetails = document.createElement('div');
  songDetails.classList.add('details');
  card.appendChild(songDetails);

  const songName = document.createElement('p');
  songName.classList.add('song-name');
  songName.textContent = song.track.title;
  songDetails.appendChild(songName);

  const artistName = document.createElement('p');
  artistName.classList.add('artist-name');
  artistName.textContent = song.track.subtitle;
  songDetails.appendChild(artistName);

  const playButton = document.createElement('a');
  playButton.classList.add('btn');
  playButton.textContent = '▶';
  playButton.target = '_blank';
  playButton.href = song.track.url;
  songDetails.appendChild(playButton);
}

function showLoadingSpinner() {
  loadingSpinner.classList.add('loading');
}

function hideLoadingSpinner() {
  loadingSpinner.classList.remove('loading');
}
