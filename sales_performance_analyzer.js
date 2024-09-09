// 1. Create a Function to Calculate Average Sales 
function calculateAverageSales(sales) {
    if (sales.length === 0) return 0; 
    const total = sales.reduce((sum, sale) => sum + sale, 0);
    return total / sales.length; 
}

// Create a Function to Determine Performance Rating
function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000) {
        return "Good";
    } else if (averageSales >= 4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}
