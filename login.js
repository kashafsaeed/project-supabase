
let userEmail = document.getElementById('username');
let userPassword = document.getElementById('password');
let loginBtn = document.getElementById('loginBtn');


async function loginUser(e) {
    e.preventDefault();
    const email = userEmail.value;
    const password = userPassword.value;
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) {
            console.error('Error logging in:', error.message);
            alert('Login failed: ' + error.message);
        } else {
            console.log('Login successful:', data);
            alert('Login successful!');
            // Redirect to another page or perform other actions
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        alert('An unexpected error occurred: ' + error.message);
    }
}
loginBtn.addEventListener('click', loginUser);