export function unObserveJs(ojs: string): HTMLDivElement {
const { type, html } = new Function(`
const Date = class { toString() { return 9e9 }}
const window = { location: { hostname: "snapsave.app" }}
const dom = {remove(){}}
const document = {
  getElementById() {
    return dom
  },
  querySelector() { return {...dom} }
}
let type
const sendEvent = t => type = t
;
${ojs}
;
return { type, html: dom.innerHTML }
`)()

if (type.toLowerCase() !== "get_success")
  throw new Error(type)

const div = document.createElement("div")
div.innerHTML = html

return div
}
