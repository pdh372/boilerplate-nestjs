import { ENV } from '@constants';

export const getNodeENV = (env?: string) => {
    switch (env) {
        case ENV.PROD: {
            return ENV.PROD;
        }

        default: {
            return ENV.DEV;
        }
    }
};
