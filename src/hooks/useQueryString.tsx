import { useMemo } from 'react';

export const useQueryString = (params: { [key: string]: string | number | boolean }) => {
    return useMemo(() => {
        const queryParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined) {
                // Only append if value exists
                queryParams.append(key, value.toString());
            }
        }
        return queryParams.toString();
    }, [params]);
};
