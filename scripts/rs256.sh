#!/bin/sh

# Check if a parameter (role) is provided
if [ -z "$1" ]; then
    echo "Role should provided. (Example: 'user', 'admin', ...)"
    exit 1
fi

# Directory where the keys will be saved
DIR="src/keys/$1"

# Create the directory if it doesn't exist
mkdir -p "$DIR"

# Generate RSA private key
if ! openssl genpkey -algorithm RSA -out "$DIR/privateKey.pem" -pkeyopt rsa_keygen_bits:2048; then
    echo "Failed to generate private key."
    exit 2
fi

# Generate RSA public key from the private key
if ! openssl rsa -pubout -in "$DIR/privateKey.pem" -out "$DIR/publicKey.pem"; then
    echo "Failed to generate public key."
    exit 3
fi

echo "RSA key pair generated successfully for role: $1"
