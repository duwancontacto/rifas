export const parseNumber = (number: number, decimal = true) => {
  // Convertir el input a un número para manejar correctamente la entrada.
  number = Number(number);

  // Opciones para toLocaleString que excluyen los decimales (por ahora).
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true, // Usa agrupación de dígitos (por ej., comas para separador de miles)
  };

  // Convertir el número a formato local con las opciones de formato definidas.
  // Esta parte se encargará de manejar los separadores de miles (comas).
  let formattedNumber = number.toLocaleString("en-US", options);

  // Añadir ".00" si decimal es true, o nada si es false.
  if (decimal) {
    formattedNumber += ".00";
  }

  return formattedNumber;
};
