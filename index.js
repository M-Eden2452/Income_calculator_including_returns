function calculateDailyIncome() {
    const PROCUREMENT_COST = 500;
    const REALIZATION_PRICE = 799;
    const REFUNDS = 0.35;
    const REFUNDS_COST = 160;

    const quantity = parseFloat(document.getElementById("quantity").value);

    // Вынесем вычисления в отдельные функции
    const totalIncome = calculateTotalIncome(quantity, REALIZATION_PRICE, PROCUREMENT_COST, REFUNDS);
    const uncollectedQuantity = calculateUncollectedQuantity(quantity, REFUNDS);
    const spentOnProcurement = calculateSpentOnProcurement(quantity, PROCUREMENT_COST);
    const returnDeliveryCosts = calculateReturnDeliveryCosts(uncollectedQuantity, REFUNDS_COST);
    const outcomes = totalIncome - returnDeliveryCosts;

    // Вывод результатов
    const resultElement = document.getElementById("result");
    const resultProcurement = document.getElementById("result_procurement");
    const resultQuantityRefunds = document.getElementById("quantity_refunds");
    const resultReturnDeliveryCosts = document.getElementById("resultReturnDeliveryCosts");

    // Логика проверки наличия значения и нулевого значения
    if (!isNaN(quantity) && quantity !== 0) {
        resultElement.textContent = `Доход: ${outcomes.toFixed(2)}₴`;
    } else {
        resultElement.textContent = "Введите количество отправок!!";
    }

    // Вывод остальных результатов
    resultProcurement.textContent = `Потрачено на закупку: ${spentOnProcurement}₴`;
    resultQuantityRefunds.textContent = `Количество возвратов: ${uncollectedQuantity} шт`;
    resultReturnDeliveryCosts.textContent = `Стоимость возвратов: ${returnDeliveryCosts.toFixed(2)}₴`;
}

// Функции расчетов
function calculateTotalIncome(quantity, realizationPrice, procurementCost, refunds) {
    return (realizationPrice - procurementCost) * quantity * (1 - refunds);
}

function calculateUncollectedQuantity(quantity, refunds) {
    return Math.ceil(quantity * refunds);
}

function calculateSpentOnProcurement(quantity, procurementCost) {
    return procurementCost * quantity;
}

function calculateReturnDeliveryCosts(uncollectedQuantity, refundsCost) {
    return uncollectedQuantity * refundsCost;
}



















// function calculateDelivery() {
//     const weight = parseFloat(document.getElementById("weight").value);
//     const option = document.getElementById("option").value;
//     let cost = 0;
  
//     switch (option) {
//       case "standard":
//         if (weight <= 1) {
//           cost = 5;
//         } else if (weight <= 5) {
//           cost = 10;
//         } else {
//           cost = 15;
//         }
//         break;
  
//       case "express":
//         if (weight <= 1) {
//           cost = 15;
//         } else if (weight <= 5) {
//           cost = 20;
//         } else {
//           cost = 30;
//         }
//         break;
  
//       // Добавьте кейсы для других опций
  
//       default:
//         cost = 0;
//         break;
//     }
  
//     document.getElementById("result").textContent = `Стоимость доставки: $${cost}`;
//   }