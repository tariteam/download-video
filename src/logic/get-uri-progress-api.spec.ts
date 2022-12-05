import { describe , test, expect } from "vitest"
import { getUriProgressApi } from "./get-uri-progress-api"

describe("get-uri-progress-api", () => {
  test("normal", () => {
    const js = `get_progressApi('/render.php?id=ce448d2571fd4a3305a4088d9cb1f503&quality=1080p&video_url=https%3A%2F%2Fvideo-ams4-1.xx.fbcdn.net%2Fv%2Ft39.25447-2%2F10000000_474760141310735_5404956219976869738_n.webm%3F_nc_cat%3D1%26ccb%3D1-7%26_nc_sid%3D5aebc0%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJfdnA5X2dlbjFhdmNfcTkwX2ZyYWdfMl92aWRlbyJ9%26_nc_ohc%3D_1acN2ScZn0AX_kOhMY%26_nc_ht%3Dvideo-ams4-1.xx%26oh%3D00_AfDpapHC1A8PkX8peY0KSDyM7lHOhlz29f45MR_TAdA6nQ%26oe%3D6390D769&audio_url=https%3A%2F%2Fvideo-ams4-1.xx.fbcdn.net%2Fv%2Ft39.25447-2%2F316099209_204550255306966_6016352457765711936_n.mp4%3F_nc_cat%3D1%26ccb%3D1-7%26_nc_sid%3D5aebc0%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImRhc2hfYXVkaW9fYWFjcF82NF9mbm9ybTE0X2ZyYWdfMl9hdWRpbyJ9%26_nc_ohc%3D9C68EAguDP4AX8PVCpB%26_nc_ht%3Dvideo-ams4-1.xx%26oh%3D00_AfD438g1XgpZdro-ETLmCd6geunF64JqU891QhgeafYlOg%26oe%3D63915A46');showAd();sendEvent('Click_download_Render')`

    expect(getUriProgressApi(js)).toBe("/render.php?id=ce448d2571fd4a3305a4088d9cb1f503&quality=1080p&video_url=https%3A%2F%2Fvideo-ams4-1.xx.fbcdn.net%2Fv%2Ft39.25447-2%2F10000000_474760141310735_5404956219976869738_n.webm%3F_nc_cat%3D1%26ccb%3D1-7%26_nc_sid%3D5aebc0%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJfdnA5X2dlbjFhdmNfcTkwX2ZyYWdfMl92aWRlbyJ9%26_nc_ohc%3D_1acN2ScZn0AX_kOhMY%26_nc_ht%3Dvideo-ams4-1.xx%26oh%3D00_AfDpapHC1A8PkX8peY0KSDyM7lHOhlz29f45MR_TAdA6nQ%26oe%3D6390D769&audio_url=https%3A%2F%2Fvideo-ams4-1.xx.fbcdn.net%2Fv%2Ft39.25447-2%2F316099209_204550255306966_6016352457765711936_n.mp4%3F_nc_cat%3D1%26ccb%3D1-7%26_nc_sid%3D5aebc0%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImRhc2hfYXVkaW9fYWFjcF82NF9mbm9ybTE0X2ZyYWdfMl9hdWRpbyJ9%26_nc_ohc%3D9C68EAguDP4AX8PVCpB%26_nc_ht%3Dvideo-ams4-1.xx%26oh%3D00_AfD438g1XgpZdro-ETLmCd6geunF64JqU891QhgeafYlOg%26oe%3D63915A46")
  })
})
