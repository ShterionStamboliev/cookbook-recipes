export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PORT: number;
            MONGO_URI: string;
            SECRET_KEY: string;
        }
    }
}