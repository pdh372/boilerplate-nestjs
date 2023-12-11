export const ENV_VAR = {
    POSTGRESQL_URL: 'postgresql_url',
} as const;

export const envConfig = (): IEnvConfig => ({
    [ENV_VAR.POSTGRESQL_URL]: process.env.DATABASE_URL,
});
