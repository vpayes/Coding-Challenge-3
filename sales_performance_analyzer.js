// 1. Create a Function to Calculate Average Sales 
function calculateAverageSales(sales) {
    if (sales.length === 0) return 0; 
    const total = sales.reduce((sum, sale) => sum + sale, 0);
    return total / sales.length; 
}

// 2. Create a Function to Determine Performance Rating
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

// 3. Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(salesperson) {
    if (salesperson.length === 0) return {topPerformer: null, bottomPerformer: null };

    return salesperson.reduce((acc, person) => {
        const totalSales = person.sales.reduce((sum, sale) => sum + sale, 0);
        if (!acc.topPerformer || totalSales > acc.topPerformer.totalSales) {
            acc.topPerformer = { name: person.name, totalSales };
        }
        if (!acc.bottomPerformer || totalSales < acc.bottomPerformer.totalSales) {
            acc.bottomPerformer = {name: person.name, totalSales };
        }
        return acc;
    }, {topPerformer: null, bottomPerformer: null});
}

// 4. Combine Functions to Generate a Performance Report 
function generatePerformanceReport(salesData) {
    const performanceReport = salesData.map(person => {
        const averageSales = calculateAverageSales(person.sales);
        const rating = determinePerformanceRating(averageSales);
        return {
            name: person.name,
            averageSales: averageSales.toFixed(2),
            performanceRating: rating
        };
    });

    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesData);

    return {
        performanceReport,
        topPerformer,
        bottomPerformer
    };
}

// 5. Test Your Functions with Sample Data 
const salesData = [

      { name: 'Alice', sales: [12000, 15000, 13000] },
    
      { name: 'Bob', sales: [7000, 6000, 7500] },
    
      { name: 'Charlie', sales: [3000, 4000, 3500] },
    
      { name: 'Diana', sales: [9000, 8500, 9200] },
    
   ];

   const report = generatePerformanceReport(salesData);
   console.log(`Performance Report:`, report);
