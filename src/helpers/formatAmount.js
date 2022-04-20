export default (amount, currency, digits, style) => {
    const fractionDigits = digits != null ? digits : 2
    return new Intl.NumberFormat(['en-US', 'ru-RU','de-DE'], {
        style: style || 'currency',
        currency: currency || 'USD',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits }).format(amount)
}