

#Parcel
- Dev Build
- local server
- HMR (Hot Module Replacement) update content without page reload
- File Matching algorithm (written in C++)
- Faster build because of cache (.parcel-cache)
- Image Optimzation
- Minify css/js for production build
- Compressing
- Consistet Hashing
- Code Splitting
- Differential Bundling(Make build of app to support older   browser's version)
- Diagnostic
- Error Handling
- Host site to Https (SSL)
- Tree Shaking Algo (Remove unused code)
- Lazy mode
- Different Bundle for dev and prod
- Dev files store in dist folder generate auto

=========================================================
 "scripts": {
    "start" : "parcel index.html", #script for start project in dev
    "build" : "parcel build index.html", #script for building project in prod
    "test": "echo \"Error: no test specified\" && exit 1"
  },

#command 
- npm run start/npm start
- npm run build

##Food App
/**
 * Header
 *  - Logo
 *  - NavItems
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - ReataurantCard
 *      - Top Rated Reataurants (avg rating > 4)
 * Footer
 *  - Logo
 *  - Links
 *  - Copyright
 *  - Contact
 */
