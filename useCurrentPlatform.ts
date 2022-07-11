import UAParser from "ua-parser-js";
import { useMemo } from "react";

type TUseCurrentPlatform = {
    getOS: () => string;
    getDevice: () => string;
    getBrowser: () => string;
    getCPU: () => string;
};

export const useCurrentPlatform = (): TUseCurrentPlatform => {
    const uaParser = useMemo(() => {
        return new UAParser();
    });

    const getOS = (): string => {
        return uaParser.getOS().name;
    };

    const getDevice = (): string => {
        return uaParser.getDevice().name;
    };

    const getBrowser = (): string => {
        return uaParser.getBrowser().name;
    };

    const getCPU = (): string => {
        return uaParser.getCPU().name;
    };

    return {
        getOS,
        getDevice,
        getBrowser,
        getCPU
    };
};
