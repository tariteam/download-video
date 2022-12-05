export function getUriProgressApi(js: string): string {
  return new Function(`
  let uri
  const get_progressApi = t => uri = t
  try {
    ${js}
  } catch {}
  return uri
  `)()
}
