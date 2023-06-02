function confirmarAccion() {
    let respuesta = confirm("Bienvenido al simulador de contabilidad\nDesea continuar?")

    if (respuesta) {
        let continuar = true
        while (continuar) {
            let ventasTotales
            let gananciaBruta
            let interes
            let valor = true
            let intentos = 3

            //En este bucle (si "ventasTotales" no es un numero y los intentos son >=1) seguira ejecutandose a menos de que los intentos == 0, si "ventasTotales" es un numero e "intentos" >=1, el bucle se termina
            while (true) {
                ventasTotales = parseInt(prompt("Comencemos!\nIndique las ventas totales: "))
                if (isNaN(ventasTotales) && intentos >= 1) {
                    intentos -= 1
                    console.log(intentos)
                    alert(`No es un número\nLe quedan ${intentos} intentos`)
                } else {
                    break
                }

                if (intentos == 0) {
                    alert("Imposible continuar")
                    break
                } else {

                }
            }



            //si los intentos >=1 se ejecuta todo este bloque if
            if (intentos >= 1) {

                let q1 = parseInt(prompt("Que desea calcular:\n1) Porcentaje de ganancia\n2) Ganancia segun interes"))


                //Este bucle no se termina hasta que "q1" sea igual a 1 o 2 o >1           
                while (q1 != 1 && q1 != 2 && intentos > 1) {

                    intentos -= 1

                    alert(`Opcion incorrecta. Intente nuevamente\nLe queda ${intentos} intento/s`)


                    q1 = parseInt(prompt("Que desea calcular:\n1) Porcentaje de ganancia\n2) Ganancia segun interes"))


                }


                if (q1 == 1) {


                    //do-while controla que "gananciaBruta" sea un numero y los intentos >1 .se termina el bucle cambiando valor=false
                    do {
                        gananciaBruta = parseInt(prompt("Comencemos!\nIndique la Ganancia bruta: "))
                        if (isNaN(gananciaBruta) && intentos > 1) {
                            intentos -= 1
                            alert(`No es un número\nLe quedan ${intentos} intentos`)
                            valor = true

                        } else {
                            valor = false
                        }

                    } while (valor)

                    if (isNaN(gananciaBruta)) {
                        alert("No se pudo realizar la operacion")
                    } else {
                        let porcentaje = (gananciaBruta * 100) / ventasTotales
                        alert(`Porcentaje de ganancia= ${porcentaje.toFixed(2)}%`)

                        let costoDeVenta = ventasTotales - gananciaBruta
                        alert(`El costo de venta es $ ${costoDeVenta}`)
                    }




                } else if (q1 == 2) {

                    //do-while controla que "interes" sea un numero y los intentos >1 .se termina el bucle cambiando valor=false
                    do {
                        interes = parseInt(prompt("Indique el porcentaje de interes: "))
                        if (isNaN(interes) && intentos > 1) {
                            intentos -= 1
                            alert(`No es un número\nLe quedan ${intentos} intentos`)
                            valor = true

                        } else {
                            valor = false
                        }

                    } while (valor)

                    if (isNaN(interes)) {
                        alert("No se pudo realizar la operacion")

                    } else {
                        gananciaBruta = (ventasTotales * (interes / 100))
                        alert(`Ganancia Bruta= $${gananciaBruta}`)

                        let costoDeVenta = ventasTotales - gananciaBruta
                        alert(`El costo de venta es $${costoDeVenta}`)
                    }



                } else {
                    alert("No tiene mas intentos.")
                }

            } else {
            }

            let pregunta = prompt("Desea comenzar nuevamente?\nIngrese 'si' o 'no'")

            let repeticion = pregunta.toLowerCase()


            //En este switch las opciones son solamente 2 las disponibles
            //si la opcion es "si" se reanuda el sistema de contabilidad
            //si es "no" el bucle se termina cambiando el valor de "continuar" a false
            switch (repeticion) {
                case "si":
                    break
                case "no":
                    continuar = false
                    alert("Hasta pronto!!")
                    break
                default:
                    alert("Opcion incorrecta")
                    continuar = false
                    break

            }


        }


    } else {
        document.write("Acción cancelada.")
    }
}

confirmarAccion()