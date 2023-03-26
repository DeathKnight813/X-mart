export const formatPrice = function (inputPrice) {
    const usd = inputPrice / 1000;
    const inr = usd * 80;
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(inr);
};
