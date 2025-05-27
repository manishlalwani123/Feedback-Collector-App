const form = document.getElementById('feedbackForm');
const list = document.getElementById('feedbackList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const res = await fetch('/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message })
  });

  const feedbacks = await res.json();
  displayFeedbacks(feedbacks);
  form.reset();
});

async function loadFeedbacks() {
  const res = await fetch('/feedback');
  const feedbacks = await res.json();
  displayFeedbacks(feedbacks);
}

function displayFeedbacks(feedbacks) {
  list.innerHTML = '';
  feedbacks.forEach(fb => {
    const li = document.createElement('li');
    li.innerText = `${fb.name}: ${fb.message}`;
    list.appendChild(li);
  });
}

loadFeedbacks();
