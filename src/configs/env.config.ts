export const ENV_VAR = {
  // JWT
  JWT_USER_PRIVATE: 'jwt.user.private',
  JWT_USER_PUBLIC: 'jwt.user.public',
} as const;

export const envConfig = (): IEnvConfig => ({
  jwt: {
    user: {
      // private: fs.readFileSync(path.join(__dirname, '../keys/user/privateKey.pem')),
      // public: fs.readFileSync(path.join(__dirname, '../keys/user/publicKey.pem')),
      expiresIn: '60s',
    },
  },
});
