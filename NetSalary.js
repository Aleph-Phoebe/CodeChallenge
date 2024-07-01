const TAX_RATES = [
    { household: 24000, rate: 10 },
    { household: 40000, rate: 15 },
    { household: 60000, rate: 20 },
    { household: 80000, rate: 25 },
    { household: 99999999, rate: 30 }
];

const NHIF_RATES = [
    { household: 0, deduction: 1500 },
    { household: 5000, deduction: 2000 },
    { household: 10000, deduction: 3000 },
    { household: 15000, deduction: 4000 },
    { household: 20000, deduction: 5000 },
    { household: 25000, deduction: 6000 },
    { household: 30000, deduction: 7000 },
    { household: 35000, deduction: 8000 },
    { household: 40000, deduction: 9000 },
    { household: 45000, deduction: 10000 },
    { household: 50000, deduction: 11000 },
    { household: 60000, deduction: 12000 },
    { household: 70000, deduction: 13000 },
    { household: 80000, deduction: 14000 },
    { household: 90000, deduction: 15000 },
    { household: 100000, deduction: 16000 },
    { household: 110000, deduction: 17000 },
    { household: 120000, deduction: 18000 },
    { household: 130000, deduction: 19000 },
    { household: 140000, deduction: 20000 },
    { household: 150000, deduction: 21000 },
    { household: 160000, deduction: 22000 },
    { household: 170000, deduction: 23000 },
    { household: 180000, deduction: 24000 },
    { household: 190000, deduction: 25000 },
    { household: 200000, deduction: 26000 }
];

const NSSF_RATE_EMPLOYEE = 6;

function calculatePAYE(grossSalary) {
    let taxableIncome = grossSalary - 2400;
    let tax = 0;

    for (let i = 0; i < TAX_RATES.length; i++) {
        if (taxableIncome <= 0) {
            break;
        }
        if (taxableIncome > TAX_RATES[i].household) {
            tax += TAX_RATES[i].household * TAX_RATES[i].rate / 100;
            taxableIncome -= TAX_RATES[i].household;
        } else {
            tax += taxableIncome * TAX_RATES[i].rate / 100;
            break;
        }
    }

    return Math.round(tax);
}

// Function to calculate NHIF
function calculateNHIF(grossSalary) {
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (grossSalary <= NHIF_RATES[i].household) {
            return NHIF_RATES[i].deduction;
        }
    }
    return 26000;
}

function calculateNSSF(grossSalary) {
    const nssfDeduction = Math.min(grossSalary * NSSF_RATE_EMPLOYEE / 100, 1800);
    return Math.round(nssfDeduction);
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - paye - nhif - nssf;

    return {
        'Gross Salary': grossSalary,
        'PAYE': paye,
        'NHIF': nhif,
        'NSSF': nssf,
        'Net Salary': netSalary
    };
}

function calculateSalary() {
    const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    const benefits = parseFloat(prompt("Enter Benefits:"));

    const result = calculateNetSalary(basicSalary, benefits);

    console.log("\nSalary Details:");
    for (let key in result);
};

