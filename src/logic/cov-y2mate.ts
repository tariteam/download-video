/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function covY2mate(html: string) {
  const div = document.createElement("div")

  div.innerHTML = html

  const thumb = div.querySelector(".thumbnail img")!.getAttribute("src")

  const title = div.querySelector(".caption > b")!.textContent

  const [mp4, mp3, audio] = Array.from(
    div.querySelectorAll("#mp4, #mp3, #audio")
  ).map((item) =>
    Array.from(item.querySelectorAll("tbody > tr")).map((tr) => {
      const tds = tr.querySelectorAll("td")

      const name = tds[0].querySelector("a")!.childNodes[0].textContent!
      const quality = tds[0].querySelector("a > .label")?.textContent

      const textSize = tds[1].textContent

      const ftype = tds[2].querySelector("a")!.getAttribute("data-ftype")!
      const fquality = tds[2].querySelector("a")!.getAttribute("data-fquality")!

      return { name, quality, textSize, ftype, fquality }
    })
  )

  // eslint-disable-next-line no-new-func, camelcase
  const { k_data_vid, k__id } = new Function(`
  ${div.querySelectorAll("script")[1].innerHTML};
  return { k_data_vid, k__id }
  `)()

  // eslint-disable-next-line camelcase
  return { title, thumb, mp4, mp3, audio, k_data_vid, k__id }
}
