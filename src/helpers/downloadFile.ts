export function downloadFile(url: string): void {
  const anchor = document.createElement("a")

  anchor.href = url
  anchor.download = url

  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
