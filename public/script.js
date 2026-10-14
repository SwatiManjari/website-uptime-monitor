const form = document.getElementById('checkForm');
const websiteInput = document.getElementById('websiteUrl');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

form.addEventListener('submit', async (event) => {
event.preventDefault();

const url = websiteInput.value.trim();

result.className = 'result';
result.textContent = 'Checking website...';
checkButton.disabled = true;
checkButton.textContent = 'Checking...';

try {
    const response = await fetch(
        `/check?url=${encodeURIComponent(url)}`
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Unable to check website.');
    }

    result.classList.add(data.reachable ? 'up' : 'down');

    const heading = document.createElement('h2');
    heading.textContent = data.reachable
        ? 'Website responded'
        : 'Website unreachable';

    const urlText = document.createElement('p');
    urlText.textContent = `URL: ${data.url}`;

    const statusText = document.createElement('p');
    statusText.textContent = `HTTP Status: ${data.status ?? 'Unavailable'}`;

    const timeText = document.createElement('p');
    timeText.textContent = `Response Time: ${data.responseTime}`;

    result.replaceChildren(heading, urlText, statusText, timeText);

    if (data.error) {
        const errorText = document.createElement('p');
        errorText.textContent = `Reason: ${data.error}`;
        result.appendChild(errorText);
    }

} catch (error) {
    result.classList.add('down');
    result.textContent = `Error: ${error.message}`;
} finally {
    checkButton.disabled = false;
    checkButton.textContent = 'Check Status';
}
});