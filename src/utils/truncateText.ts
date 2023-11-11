export const truncateText = (text: string, maxLength: number) => {
  // Si el texto es más largo que maxLength, cortarlo y añadir puntos suspensivos.
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
