window.onload = function() {
  const image = document.querySelector('img[alt="b3d_aps"]');
  var previousWidth = image.naturalWidth;
  var previousHeight = image.naturalHeight;
  var old_map = document.querySelector("map");
  var old_areas = old_map.querySelectorAll("area");
  const container = document.querySelector(".container");

  function populateAreas() {
    const map = document.querySelector("map");
    const areas = map.querySelectorAll("area");
    const scaleX = image.width / image.naturalWidth;
    const scaleY = image.height / image.naturalHeight;
    previousWidth = image.width;
    previousHeight = image.height;

    areas.forEach(area => {
      const div = document.createElement("div");
      div.classList.add("highlight");
      div.setAttribute("id", area.getAttribute("id"));
      const coords = area.coords.split(",");

      coords[0] *= scaleX;
      coords[1] *= scaleY;
      coords[2] *= ((scaleY + scaleX)/2);
      area.coords = coords.join(",");

      div.style.left = (coords[0] - coords[2]) + "px";
      div.style.top = (coords[1] - coords[2]) + "px";
      div.style.width = (coords[2] * 2) + "px";
      div.style.height = (coords[2] * 2) + "px";
      div.style.borderRadius = "50%";
      div.classList.remove("highlight");
      div.addEventListener("click", function() {
        document.querySelector('#'+div.getAttribute("id")).click();
      });

      container.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.classList.add("highlight");
      });
      div.addEventListener("mouseout", () => {
        div.classList.remove("highlight");
      });
    });
    old_map = document.querySelector("map");
    old_areas = old_map.querySelectorAll("area");
  }

  function updateAreas() {
    const map = old_map;
    const areas = map.querySelectorAll("area");
    const scaleX = image.width / previousWidth;
    const scaleY = image.height / previousHeight;
    previousWidth = image.width;
    previousHeight = image.height;

    areas.forEach(area => {
      const div = document.querySelector('div[id='+area.getAttribute("id")+']');
      const coords = area.coords.split(",");
      coords[0] *= scaleX;
      coords[1] *= scaleY;
      coords[2] *= ((scaleY + scaleX)/2);
      area.coords = coords.join(",");
      div.style.left = (coords[0] - coords[2]) + "px";
      div.style.top = (coords[1] - coords[2]) + "px";
      div.style.width = (coords[2] * 2) + "px";
      div.style.height = (coords[2] * 2) + "px";
      div.style.borderRadius = "50%";
      div.classList.remove("highlight");
      div.addEventListener("click", function() {
        document.querySelector('#'+div.getAttribute("id")).click();
      });

      container.appendChild(div);
      div.addEventListener("mouseover", () => {
        div.classList.add("highlight");
      });
      div.addEventListener("mouseout", () => {
        div.classList.remove("highlight");
      });
    });
    old_map = document.querySelector("map");
  }

  populateAreas();
  window.onresize = function() {updateAreas()};
  }
