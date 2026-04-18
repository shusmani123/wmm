document.getElementById('quickSearchForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const city = document.getElementById('city')?.value?.trim();
  if (city) {
    alert('Search form preview: city selected = ' + city + '. You can later connect this to a real database.');
  } else {
    alert('Search form preview only. Your website is ready to upload to GitHub Pages.');
  }
});
