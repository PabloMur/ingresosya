// Define el tipo para las propiedades del gasto
type GastoProps = {
  dia: Date;
  horaInicio: string;
  horaFin: string;
  totalGeneradoApp: number;
  propinaRecibida: number;
  montoInicialCaja: number;
  montoFinalCaja: number;
  costoCombustible: number;
};

class Gasto {
  dia: Date;
  horaInicio: string;
  horaFin: string;
  totalGeneradoApp: number;
  propinaRecibida: number;
  montoInicialCaja: number;
  montoFinalCaja: number;
  costoCombustible: number;

  constructor({
    dia,
    horaInicio,
    horaFin,
    totalGeneradoApp,
    propinaRecibida,
    montoInicialCaja,
    montoFinalCaja,
    costoCombustible,
  }: GastoProps) {
    this.dia = dia || new Date();
    this.horaInicio = horaInicio || "";
    this.horaFin = horaFin || "";
    this.totalGeneradoApp = totalGeneradoApp || 0;
    this.propinaRecibida = propinaRecibida || 0;
    this.montoInicialCaja = montoInicialCaja || 0;
    this.montoFinalCaja = montoFinalCaja || 0;
    this.costoCombustible = costoCombustible || 0;
  }

  // Método para calcular el total neto en caja
  calcularNetoCaja(): number {
    return this.montoFinalCaja - this.montoInicialCaja;
  }

  // Método para calcular el ingreso total
  calcularIngresoTotal(): number {
    return this.totalGeneradoApp + this.propinaRecibida;
  }

  // Método para verificar si el gasto es válido
  esValido(): boolean {
    return (
      this.dia instanceof Date &&
      this.horaInicio !== "" &&
      this.horaFin !== "" &&
      this.totalGeneradoApp >= 0 &&
      this.propinaRecibida >= 0 &&
      this.montoInicialCaja >= 0 &&
      this.montoFinalCaja >= 0 &&
      this.costoCombustible >= 0
    );
  }

  // Método para generar un resumen del gasto
  resumen(): {
    fecha: string;
    ingresos: number;
    netoCaja: number;
    costoCombustible: number;
  } {
    return {
      fecha: this.dia.toLocaleDateString(),
      ingresos: this.calcularIngresoTotal(),
      netoCaja: this.calcularNetoCaja(),
      costoCombustible: this.costoCombustible,
    };
  }
}

export { Gasto };
export type { GastoProps };
