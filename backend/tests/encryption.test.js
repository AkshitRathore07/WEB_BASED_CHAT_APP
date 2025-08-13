import { encrypt, decrypt, verify } from "../utils/customEncryption.js";

// Test encryption and decryption
const testEncryption = () => {
    const testCases = [
        "Hello123!",
        "Password@123",
        "Test@#$%^&*()",
        "SimplePassword",
        "Complex!@#$%^&*()_+"
    ];

    console.log("Testing Encryption System:");
    console.log("------------------------");

    testCases.forEach((password, index) => {
        const encrypted = encrypt(password);
        const decrypted = decrypt(encrypted);
        const isVerified = verify(password, encrypted);

        console.log(`Test Case ${index + 1}:`);
        console.log(`Original: ${password}`);
        console.log(`Encrypted: ${encrypted}`);
        console.log(`Decrypted: ${decrypted}`);
        console.log(`Verified: ${isVerified}`);
        console.log("------------------------");
    });
};

// Run the tests
testEncryption(); 