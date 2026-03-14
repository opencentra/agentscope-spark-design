declare const _default: () => {
    theme: {
        locale: string;
        colorPrimary: string;
        darkMode: boolean;
        prefix: string;
        leftHeader: {
            logo: string;
            title: string;
        };
    };
    sender: {
        attachments: boolean;
        maxLength: number;
        disclaimer: string;
    };
    welcome: {
        greeting: string;
        description: string;
        avatar: string;
        prompts: {
            value: string;
        }[];
    };
    api: {
        baseURL: string;
        token: string;
    };
};
export default _default;
