/*
 * Pago por horas
 * El total de horas trabajadas
 *
 * Si el total de horas trabajadas es mayor a 40, entonces
 * se debe calcular el pago por horas extras y el pago por horas
 * Si el total de horas no es mayor a 40, entonces
 * se debe calcular el pago por horas
 */

const calcularTotales = (MejorSueldoBruto, añosTrabajados) => {
    if (añosTrabajados > 40) {
        let totalPagoExtra = (añosTrabajados - 40)* MejorSueldoBruto * 2;
        let totalPago = 40 * MejorSueldoBruto;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de la indemnización es: ${totalPago} y el pago de Preaviso es: ${totalPagoExtra}. El total a pagar es: ${
            totalPago + totalPagoExtra
        }`;
    } else {
        let totalPago = MejorSueldoBruto * añosTrabajados;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de a pagar: ${totalPago}`;
    }
};

document.querySelector("#pro_calc").addEventListener("click", (e) => {
    e.preventDefault();
    let añosTrabajados= +document.querySelector("#horas_trabajadas").value;
    let MejorSueldoBruto = +document.querySelector("#precio_hora").value;
    calcularTotales(MejorSueldoBruto, añosTrabajados);
});