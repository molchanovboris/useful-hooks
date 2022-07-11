import Cookie, {CookieSetOptions} from "universal-cookie";

const cookies = new Cookie();

const COOKIES_KEY = "myCookies";
const COOKIE_DOMAIN = "test.domain.test";

type TMyData = { [key: string]: string; }

type UseCookiesParams = {
    setSessionCookies: (data: TMyData) => void;
    clearSessionCookies: () => void;
};

export const useCookieData = (): UseCookiesParams => {
    const setSessionCookies = (data: TMyData) => {
        if (!data) {
            return;
        }

        const cookieOptions: CookieSetOptions = {
            path: "/",
            maxAge: 1000,
            domain: COOKIE_DOMAIN,
            secure: true
        };

        cookies.set(
            COOKIES_KEY,
            JSON.stringify(data),
            cookieOptions
        );
    };

    const clearSessionCookies = () => {
        cookies.remove(COOKIES_KEY);
    };

    return { setSessionCookies, clearSessionCookies };
};
