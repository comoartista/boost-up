export function generatePastelColor() {
  // Генеруємо випадкові значення компонентів кольору
  const r = Math.floor(150 + Math.random() * 105); // Червоний відтінок
  const g = Math.floor(150 + Math.random() * 105); // Зелений відтінок
  const b = Math.floor(150 + Math.random() * 105); // Синій відтінок

  // Конвертуємо компоненти в шістнадцятковий формат
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Формуємо кінцевий колір у форматі #RRGGBB
  const color = "#" + hexR + hexG + hexB;

  return color;
}
