$(document).ready(function () {
  $.getJSON(
    "https://www.googleapis.com/books/v1/volumes/Wfan6L9RGgYC",
    function (data) {
      let items = "";
      let sbj_VolumeInfo_items = "";
      var keys = Object.keys(data);

      function keyFormat(key_p) {
        return "<p><span class = book_bold>" + key_p + "</span> : ";
      }

      //kind
      sbj_VolumeInfo_items += keyFormat(keys[0]) + data.kind;
      //id
      sbj_VolumeInfo_items += keyFormat(keys[1]) + data.id + "<br>";
      //etag
      sbj_VolumeInfo_items += keyFormat(keys[2]) + data.etag + "<br>";
      //selfLink
      sbj_VolumeInfo_items += keyFormat(keys[3]) + data.selfLink + "<br>";
      $("#sbj_VolumeInfo").append(sbj_VolumeInfo_items);

      let buttonCount = 0;
      $("#hide").click(function () {
        if (buttonCount == 0) {
          $("#sbj_VolumeInfo").hide();
        }
        buttonCount++;
      });

      //volumeInfo
      items +=
        "<div><img src = " +
        data.volumeInfo.imageLinks.smallThumbnail +
        "/></div>";
      $.each(data[keys[4]], function (k, v) {
        if (k == "industryIdentifiers") {
          for (let i = 0; i < 2; i++) {
            items +=
              keyFormat(data.volumeInfo.industryIdentifiers[i].type) +
              data.volumeInfo.industryIdentifiers[i].identifier +
              "</p>";
          }
        } else if (k == "readingModes") {
        } else {
          items += keyFormat(k) + v + "</p>";
        }
      });
      //layerInfo
      $.each(data[keys[5]], function (k, v) {
        items += keyFormat(k) + v + "</p>";
      });
      //saleInfo
      $.each(data[keys[6]], function (k, v) {
        items += keyFormat(k) + v + "</p>";
      });
      //accessInfo
      $.each(data[keys[7]], function (k, v) {
        items += keyFormat(k) + v + "</p>";
      });

      $("#single_book_json").append(items);
    }
  );
});
