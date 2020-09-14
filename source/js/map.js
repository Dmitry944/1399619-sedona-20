const viewportWidth = window.innerWidth;

ymaps.ready(init);

function init(){
  const myMap = new ymaps.Map("map", {
    center: viewportWidth >= 1440 ? [34.861139, -111.714942] : [34.861139, -111.714942],
    zoom: 8
  });
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("rulerControl");

  const myPlacemark = new ymaps.Placemark([34.861139, -111.714942], {
    hintContent: "sedona",
  }, {
    iconLayout: "default#image",
    iconImageHref: "../img/icon-map-marker.svg",
    iconImageSize: [27, 27],
    iconImageOffset: viewportWidth > 767 ? [-20, -20] : [-15, -15]
  });
  myMap.geoObjects.add(myPlacemark);
}
