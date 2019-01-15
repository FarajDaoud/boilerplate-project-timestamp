document.addEventListener('DOMContentLoaded', () => {
  fetch('https://farajdaoud-timestamp.glitch.me/api/timestamp/')
    .then((res) => {
      return res.json();
  })
  .then((data) => {
      document.getElementById('result').innerHTML = JSON.stringify(data);
  });
});
