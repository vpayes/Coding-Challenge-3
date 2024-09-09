// 1. Create a Function to Calculate Average Sales 
function calculateAverageSales(sales) {
    if (sales.length === 0) return 0; 
    const total = sales.reduce((sum, sale) => sum + sale, 0);
    return total / sales.length; 
}