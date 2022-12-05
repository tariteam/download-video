export function getUriProgressApi(js: string): string {
  // eslint-disable-next-line no-new-func
  return new Function(`
  let uri
  const get_progressApi = t => uri = t
  try {
    ${js}
  } catch {}
  return uri
  `)()
}
