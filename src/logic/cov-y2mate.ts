const tt= {
  "status": "success",
  "result": " <div class=\"tabs row\"> <div class=\"col-xs-12 col-sm-5 col-md-5\"> <div class=\"thumbnail cover\"> <a href=\"javascript:void(0);\" rel=\"nofollow\" class=\"video-thumbnail\"> <img src=\"https://i.ytimg.com/vi/evgL8sbwP1w/0.jpg\" alt=\"Youtube downloader thumbnail\"> </a> <div class=\"caption text-left\"> <b>Thám Tử Lừng Danh Conan: Chạm Trán Với Tổ Chức Áo Đen - Tổng Hợp Những Vụ Án Hay Nhất</b> </div> </div> <div class=\"hidden-xs\"> <div id=\"M826034ScriptRootC1351205\"></div> <script src=\"https://jsc.adskeeper.com/y/2/y2mate.com.1351205.js\" async></script> </div> </div> <div class=\"col-xs-12 col-sm-7 col-md-7\"> <ul class=\"nav nav-tabs\"> <li class=\"active\"> <a href=\"#mp4\" data-toggle=\"tab\">Video</a> </li> <li> <a href=\"#mp3\" data-toggle=\"tab\">mp3</a> </li> <li class=\"\"> <a href=\"#audio\" data-toggle=\"tab\">Audio</a> </li> </ul> <div class=\"tab-content\"> <div class=\"tab-pane fade active in\" id=\"mp4\"> <table class=\"table table-bordered\"> <thead> <tr> <th>Resolution</th> <th>FileSize</th> <th>Download</th> </tr> </thead> <tbody> <tr> <td> <a href=\"#\" rel=\"nofollow\"> 720p (.mp4) <span class=\"label label-primary\"><small>m-HD</small></span></a> </td> <td>MB</td> <td class=\"txt-center\"> <a href=\"javascript:void(0)\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"mp4\" data-fquality=\"720\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download </a> </td> </tr> <tr> <td> <a href=\"#\" rel=\"nofollow\"> 360p (.mp4)</a> </td> <td>MB</td> <td class=\"txt-center\"> <a href=\"javascript:void(0)\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"mp4\" data-fquality=\"360\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download </a> </td> </tr> </tbody> </table> </div> <div class=\"tab-pane fade\" id=\"mp3\"> <table class=\"table table-bordered\"> <thead><tr><th>File type</th><th>FileSize</th><th>Download</th></tr></thead> <tbody> <tr> <td> <a href=\"#\" rel=\"nofollow\"> .mp3 (128kbps)</a> </td> <td>55.9 MB</td> <td class=\"txt-center\"> <a href=\"javascript:void(0);\" id=\"process_mp3_a\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"mp3\" data-fquality=\"128\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download </a> </td> </tr> </tbody> </table> </div> <div class=\"tab-pane fade\" id=\"audio\"> <table class=\"table table-bordered\"> <thead> <tr> <th>File type</th> <th>FileSize</th> <th>Download</th> </tr> </thead> <tbody> <tr> <td> <a href=\"#\" rel=\"nofollow\"> .mp3 (128kbps)</a> </td> <td>55.9 MB</td> <td class=\"txt-center\"> <button id=\"process_mp3_2\" class=\"btn btn-success hidden\" onclick=\"checkToken();\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download</button> <a href=\"javascript:void(0);\" id=\"dbtn-mp3128\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"mp3\" data-fquality=\"128\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download</a> </td> </tr> </tbody> </table> </div> </div> </div> <div class=\"clearfix\"></div> </div> <input type=\"hidden\" data-id=\"evgL8sbwP1w\" data-extractor=\"youtube\" data-service=\"youtube\" id=\"video_status\"> <script type=\"text/javascript\"> var k_data_vid = \"evgL8sbwP1w\"; var k_data_vtitle = \"Th\\u00e1m T\\u1eed L\\u1eebng Danh Conan: Ch\\u1ea1m Tr\\u00e1n V\\u1edbi T\\u1ed5 Ch\\u1ee9c \\u00c1o \\u0110en - T\\u1ed5ng H\\u1ee3p Nh\\u1eefng V\\u1ee5 \\u00c1n Hay Nh\\u1ea5t\"; var k__id = \"6088057a983fd27e4b8b4586\"; var video_service = \"youtube\"; var video_extractor = \"youtube\"; </script> "
}


export function covY2mate(html: string) {
  const div = document.createElement("div")

  div.innerHTML = html

  const thumb = div.querySelector(".thumbnail img").getAttribute("src")


  const title = div.querySelector(".caption > b").textContent


  const [mp4, mp3, audio] =Array.from(div.querySelectorAll("#mp4, #mp3, #audio"))
  .map(item => Array.from(item.querySelectorAll("tbody > tr"))
    .map(tr => {
      const tds = tr.querySelectorAll("td")

      const name = tds[0].querySelector("a").childNodes[0].textContent
      const quality = tds[0].querySelector("a > .label")?.textContent

      const textSize = tds[1].textContent

      const ftype = tds[2].querySelector("a").getAttribute("data-ftype")
      const fquality = tds[2].querySelector("a").getAttribute("data-fquality")

      return { name, quality, textSize, ftype, fquality }
    })
  )

  return { title, thumb, mp4, mp3, audio }
}
