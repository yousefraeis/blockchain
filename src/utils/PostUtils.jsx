export const getPostColorFromCategory = (category) => {
    switch (category) {
        case 'Innovation':
            return 'cyan';
        case 'Security':
            return 'violet';
        case 'Sustainability':
            return 'lime';
        default:
            return 'fuchsia';
    }
};

export const getPostColorFromPositionType = (type) => {
    switch (type) {
        case 'Part Time':
            return 'cyan';
        case 'Contract':
            return 'violet';
        case 'Full Time':
            return 'lime';
        default:
            return 'fuchsia';
    }
};

export const getPostColorFromPositionCategory = (category) => {
    switch (category) {
        case 'Product':
            return 'cyan';
        case 'Marketing':
            return 'violet';
        case 'Engineering':
            return 'lime';
        default:
            return 'fuchsia';
    }
};
