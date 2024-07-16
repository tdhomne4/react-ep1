export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RES_DETAILS_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=";
// export const LOGO_URL = "/public/assets/images/Eatance_Logo.png";

export const RES_DATA_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const removeHTMLTags = (htmlString) => {
  return htmlString.replace(/<\/?b>/g, "");
};
