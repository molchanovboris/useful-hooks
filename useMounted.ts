import React, {useEffect, useRef} from "react";

export const useMounted = (): React.MutableRefObject<boolean> => {
    const mounted = useRef<boolean>(false);

    useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    });

    return mounted;
};
