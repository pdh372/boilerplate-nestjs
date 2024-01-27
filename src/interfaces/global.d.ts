export {};

declare global {
  interface IEnvConfig {
    postgresql_url: string;
    jwt: {
      user: {
        // public: Buffer;
        // private: Buffer;
        expiresIn?: string;
      };
    };
  }
}
