function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // You can add validation or login logic here
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Simulate successful login (in real application, you'd verify credentials here)
    if (username && password) {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        alert("Please enter both username and password.");
    }
}
// Store the progress of the lessons
function updateProgress(lessonNumber, status) {
    localStorage.setItem('lesson' + lessonNumber, status);
}

// Example of how to retrieve and update progress
function displayProgress() {
    let lesson1Status = localStorage.getItem('lesson1') || 'Not Started';
    let lesson2Status = localStorage.getItem('lesson2') || 'Not Started';
    let lesson3Status = localStorage.getItem('lesson3') || 'Not Started';

    // Update lesson status in the HTML
    document.querySelector('.lesson1-status').textContent = lesson1Status;
    document.querySelector('.lesson2-status').textContent = lesson2Status;
    document.querySelector('.lesson3-status').textContent = lesson3Status;

    // Calculate the progress bar value
    let completedLessons = 0;
    if (lesson1Status === 'Completed') completedLessons++;
    if (lesson2Status === 'Completed') completedLessons++;
    if (lesson3Status === 'Completed') completedLessons++;

    let progress = (completedLessons / 3) * 100;
    document.querySelector('progress').value = progress;
}

