document.addEventListener('DOMContentLoaded', () => {
  fetch('https://farajdaoud-timestamp.glitch.me/api/timestamp/')
  .then((res) => res.json())
  .then((data) => {
      document.getElementById('result').innerHTML = JSON.stringify(data);
  });
  
  fetch('https://farajdaoud-timestamp.glitch.me/api/timestamp/2019-01-15')
  .then((res) => res.json())
  .then((data) => {
      document.getElementById('result2').innerHTML = JSON.stringify(data);
  });
  
  fetch('https://farajdaoud-timestamp.glitch.me/api/timestamp/hello')
  .then((res) => res.json())
  .then((data) => {
      document.getElementById('result3').innerHTML = JSON.stringify(data);
  });
  
  document.getElementById('userTest').addEventListener('change', () => {
    let url = 'https://farajdaoud-timestamp.glitch.me/api/timestamp/' + document.getElementById('userTest').value;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('result4').innerHTML = JSON.stringify(data);
    });
  });
});
