export {};

declare global {
  interface IEnvConfig {
    jwt: {
      user: {
        // public: Buffer;
        // private: Buffer;
        expiresIn?: string;
      };
    };
  }
}
