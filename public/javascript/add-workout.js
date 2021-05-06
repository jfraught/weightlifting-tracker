async function newFormHandler(event) {
    event.preventDefault();

    const workout = document.querySelector('#workout-name').value.trim();
    const weight = document.querySelector('#weight').value.trim();
    const reps = document.querySelector('#reps').value.trim();
    const sets = document.querySelector('#sets').value.trim();

    const response = await fetch(`/api/workouts`, {
        method: 'post',
        body: JSON.stringify({
            workout,
            weight,
            reps,
            sets

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/weekview');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.add-workout-form').addEventListener('submit', newFormHandler);

