
const grosssSalary = 2000;

let aliquotINSS;


if(grossSalary <= 1566.94) {

    aliquotINSS =  grosssSalary * 0.08;

} else if (grosssSalary <= 2594.92) {

    aliquotINSS = grosssSalary * 0.09;

} else if (grosssSalary <= 5189.82) {

    aliquotINSS = grosssSalary * 0.11;
    
} else {

    aliquotINSS = 570.88;
    
}

const baseSalary = grosssSalary - aliquotINSS;

if (baseSalary <= 1903.98) {

    aliquotIR = 0;

} else if (grosssSalary <= 2826.66) {
    aliquotIR = (baseSalary * 0.075) - 142.80;

} else if (baseSalary <= 3751.05) {

    aliquotIR = (baseSalary * 0.15) - 354.80;

}else if (baseSalary <= 4664.68) {

    aliquotIR = (baseSalary * 0.22) - 636.13;

} else {

    aliquotIR = ( baseSalary * 0.275) - 869.36;
}

const liquidSalary = baseSalary - aliquotIR;

console.log ("Salário: " , liquidSalary)