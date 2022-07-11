import {useState} from "react";

export type UseErrorParams = {
	errorText?: string;
	changeErrorText: (_?: string) => void;
	clearErrorText: () => void;
};

export const useError = (): UseErrorParams => {
    const [errorText, setErrorText] = useState<string>("");

    const changeErrorText = (text?: string) => {
        setErrorText(() => {
            return text || "";
        });
    };

    const clearErrorText = () => {
        setErrorText("");
    };

    return {
        errorText,
        changeErrorText,
        clearErrorText
    };
};
