// complete the given function

function palindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare with its reverse
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = palindrome;