import { describe, expect, test } from "vitest"

import { covY2mateConverter } from "./cov-y2mate-converter"

describe("cov-y2mate-converter", () => {
  test("normal", () => {
    expect(
      covY2mateConverter(
        '\r\n<script type="text/javascript">\r\n    $("#process-waiting").css(\'display\',\'none\');\r\n    if(typeof iWorker != \'undefined\'){\r\n        clearInterval(iWorker);\r\n        iWorker = undefined;\r\n    }\r\n\r\n</script>\r\n<div class="form-group has-success has-feedback">\r\n    <a href="https://rr4---sn-p5qlsndk.googlevideo.com/videoplayback?expire=1670247621&ei=ZaCNY7TsEdyI_9EPvvq6YA&ip=44.200.167.202&id=o-AKlSl-5exSRcb30YzRRxAg2LKk4KcXqP7SXznMkAqQ3J&itag=22&source=youtube&requiressl=yes&mh=0o&mm=31%2C26&mn=sn-p5qlsndk%2Csn-5ualdnll&ms=au%2Conr&mv=m&mvi=4&pl=22&initcwndbps=553750&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=852.985&lmt=1635250156084324&mt=1670225607&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=6311224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgNJocQtGaNzrcaMcG-kJlJ7sTPeM5Jaxz25xUpd0kGyICIQCGa3E1jd9TgRv5Hqk-i-5HjHa8ExO3Av_iyRsLH3BdRQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMSO5rQNg_RerA-n9st9Z71ILeQ_BG9zmFfOHZttIk1vAiEAtaA3aemlbeHPmNnaS1oAW-n0SOFhMusfleEk5WfFUa4%3D&title=Top+10+Phim+Anime+Main+c%C3%B3+S%E1%BB%A9c+M%E1%BA%A1nh+V%C6%B0%E1%BB%A3t+Ngo%C3%A0i+T%E1%BA%A7m+Ki%E1%BB%83m+So%C3%A1t+Khi%E1%BA%BFn+M%E1%BB%8Di+Ng%C6%B0%E1%BB%9Di+Kinh+H%C3%A3i" rel="nofollow" type="button" class="btn btn-success btn-file">\r\n        <i class="glyphicon glyphicon-download-alt"></i>&nbsp; Download .mp4    </a>\r\n</div>'
      )
    ).toBe(
      "https://rr4---sn-p5qlsndk.googlevideo.com/videoplayback?expire=1670247621&ei=ZaCNY7TsEdyI_9EPvvq6YA&ip=44.200.167.202&id=o-AKlSl-5exSRcb30YzRRxAg2LKk4KcXqP7SXznMkAqQ3J&itag=22&source=youtube&requiressl=yes&mh=0o&mm=31%2C26&mn=sn-p5qlsndk%2Csn-5ualdnll&ms=au%2Conr&mv=m&mvi=4&pl=22&initcwndbps=553750&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=852.985&lmt=1635250156084324&mt=1670225607&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=6311224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgNJocQtGaNzrcaMcG-kJlJ7sTPeM5Jaxz25xUpd0kGyICIQCGa3E1jd9TgRv5Hqk-i-5HjHa8ExO3Av_iyRsLH3BdRQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAMSO5rQNg_RerA-n9st9Z71ILeQ_BG9zmFfOHZttIk1vAiEAtaA3aemlbeHPmNnaS1oAW-n0SOFhMusfleEk5WfFUa4%3D&title=Top+10+Phim+Anime+Main+c%C3%B3+S%E1%BB%A9c+M%E1%BA%A1nh+V%C6%B0%E1%BB%A3t+Ngo%C3%A0i+T%E1%BA%A7m+Ki%E1%BB%83m+So%C3%A1t+Khi%E1%BA%BFn+M%E1%BB%8Di+Ng%C6%B0%E1%BB%9Di+Kinh+H%C3%A3i"
    )
  })
})
