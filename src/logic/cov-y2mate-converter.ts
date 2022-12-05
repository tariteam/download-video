export function covY2mateConverter(html: string) {
  const div = document.createElement("div")
  div.innerHTML = html

  return div.querySelector("a")?.getAttribute("href")
}
