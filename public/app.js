document.addEventListener('DOMContentLoaded', () => {
  fetch('https://farajdaoud-timestamp.glitch.me/api/timestamp/2019-01-15')
    .then((res) => {
      return res.json();
  })
  .then((data) => {
      document.getElementById('result').innerHTML = JSON.stringify(data);
  });
});
