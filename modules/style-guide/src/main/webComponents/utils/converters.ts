export const object = {
    fromAttribute(value: string) {
        if (value === "[object Object]") {
            return {};
        }
        return JSON.parse(value);
    },
    toAttribute(value: Object) {
        return JSON.stringify(value);
    }
};

export const array = {
    fromAttribute(value: string) {
        try {
            return JSON.parse(value);
        } catch (e) {
            return [];
        }
    },
    toAttribute(value: Object) {
        return JSON.stringify(value);
    }
};
