const aumentoSueldos = (sueldo , aumento ) => {
    return (sueldo * (1+(aumento/100)))
}

console.log(aumentoSueldos(1000,10))
