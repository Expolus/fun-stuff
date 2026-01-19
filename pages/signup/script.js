const usernames = [
    'starboy',
    'diamondheart',
    'connectionfavorable',
    'amiablesounder',
    'waltyoccupy',
    'drynachos',
    'cuttingreluctant',
    'traumacampfire',
    'minecartfall',
    'grantdispute',
    'rooferalso',
    'combagreement',
    'cufftux',
    'glovesbird',
    'lemonimage',
    'scutedegree',
    'jitteryhug',
    'parrotdrone',
    'violatetriathlon',
    'marvelblackberries',
    'ceremonyunbalanced',
    'eveningtulip'
];

// Hash function to generate pseudorandom values from password
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get the password value
        const password = document.getElementById('password').value;
        
        // Generate pseudorandom seed from password
        const seed = hashPassword(password);
        
        // Use seed to deterministically select username
        const usernameIndex = seed % usernames.length;
        const randomUsername = usernames[usernameIndex];
        
        // Use seed to deterministically select digit
        const randomDigit = (seed / usernames.length) % 10;
        const usernameWithDigit = randomUsername + Math.floor(randomDigit);
        
        // Show sweet alert
        Swal.fire({
            title: 'Username Taken',
            text: `Sorry, this password is already used by ${usernameWithDigit}`,
            icon: 'error'
        });
    });
});
