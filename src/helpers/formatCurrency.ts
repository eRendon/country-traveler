const formatCurrency = (value: string | number): string => {
    value = Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(Number(value));
    value = value.replace(/\$\s/g,'$');
    return value;
}

export {
    formatCurrency
}