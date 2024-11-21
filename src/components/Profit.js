import React, { useState, useEffect, useCallback } from 'react';

const Profit = ({ sales, purchases, expenses, executives }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [filteredSales, setFilteredSales] = useState([]);
    const [filteredPurchases, setFilteredPurchases] = useState([]);
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    
    // Filter sales, purchases, and expenses based on date range
    const filterData = useCallback(() => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Filter sales, purchases, and expenses based on the date range
        const filteredSalesData = sales.filter(sale => {
            const saleDate = new Date(sale.date);
            return saleDate >= start && saleDate <= end;
        });

        const filteredPurchasesData = purchases.filter(purchase => {
            const purchaseDate = new Date(purchase.date);
            return purchaseDate >= start && purchaseDate <= end;
        });

        const filteredExpensesData = expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate >= start && expenseDate <= end;
        });

        setFilteredSales(filteredSalesData);
        setFilteredPurchases(filteredPurchasesData);
        setFilteredExpenses(filteredExpensesData);
    }, [startDate, endDate, sales, purchases, expenses]);

    // Calculate profit from selling (sale price - purchase price)
    const calculateProfitOnSelling = () => {
        return filteredSales.reduce((totalProfit, sale) => {
            sale.items.forEach(item => {
                const purchase = filteredPurchases.find(p => p.product === item.product);
                if (purchase) {
                    const profit = item.price * item.quantity - purchase.unitPrice * item.quantity;
                    totalProfit += profit;
                }
            });
            return totalProfit;
        }, 0);
    };

    // Calculate net profit (profit from selling - expenses)
    const calculateNetProfit = () => {
        const profit = calculateProfitOnSelling();
        const totalExpenses = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
        return profit - totalExpenses;
    };

    // Calculate top selling customer by total amount spent
    const getTopSellingCustomer = () => {
        const customerSales = {};
        filteredSales.forEach(sale => {
            const totalSale = sale.items.reduce((total, item) => total + item.price * item.quantity, 0);
            if (customerSales[sale.customer]) {
                customerSales[sale.customer] += totalSale;
            } else {
                customerSales[sale.customer] = totalSale;
            }
        });

        const topCustomer = Object.entries(customerSales).reduce((top, [customer, total]) => {
            return total > top.total ? { customer, total } : top;
        }, { customer: '', total: 0 });

        return topCustomer;
    };

    // Calculate top selling executive by total sales
    const getTopSellingExecutive = () => {
        const executiveSales = {};
        filteredSales.forEach(sale => {
            const totalSale = sale.items.reduce((total, item) => total + item.price * item.quantity, 0);
            if (executiveSales[sale.executive]) {
                executiveSales[sale.executive] += totalSale;
            } else {
                executiveSales[sale.executive] = totalSale;
            }
        });

        const topExecutive = Object.entries(executiveSales).reduce((top, [executive, total]) => {
            return total > top.total ? { executive, total } : top;
        }, { executive: '', total: 0 });

        return topExecutive;
    };

    useEffect(() => {
        if (startDate && endDate) {
            filterData();
        }
    }, [startDate, endDate, filterData]);  // Include filterData in the dependency array

    return (
        <div>
            <h2>Profit Report</h2>

            {/* Date Range Filter */}
            <div>
                <label>
                    Start Date:
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
                <label>
                    End Date:
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </label>
            </div>

            {/* Profit on Selling */}
            <div>
                <h3>Profit on Selling: {calculateProfitOnSelling()} tk</h3>
            </div>

            {/* Net Profit */}
            <div>
                <h3>Net Profit: {calculateNetProfit()} tk</h3>
            </div>

            {/* Top Selling Customer */}
            <div>
                <h3>Top Selling Customer: {getTopSellingCustomer().customer}</h3>
                <p>Total Sales: {getTopSellingCustomer().total} tk</p>
            </div>

            {/* Top Selling Executive */}
            <div>
                <h3>Top Selling Executive: {getTopSellingExecutive().executive}</h3>
                <p>Total Sales: {getTopSellingExecutive().total} tk</p>
            </div>
        </div>
    );
};

export default Profit;
