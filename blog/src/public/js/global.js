document.getElementById('logout').addEventListener('click', async function(event) {
    event.preventDefault();
    const url = 'http://localhost:3000/auth/logout';
    const response = await fetch(url,{
        method: 'GET', // Method itself
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok) {
        alert('Error');
    } else {
        alert('login')
        location.href = 'http://localhost:3000/auth/login';
        return;
    }
})