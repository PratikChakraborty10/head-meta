# Head Meta (fetchHeadTags)

This is a Node.js package that extracts meta tags and link tags from a given URL. It can be used in both CommonJS and ES6 module environments.

## Installation

You can install ```head-meta```  via npm:

```bash
npm install head-meta
```
You can install ```head-meta```  via yarn:

```bash
yarn add head-meta
```
## Usage
### CommonJS Environment
```bash
const fetchHeadTags = require('head-meta');

fetchHeadTags('https://pratikchakraborty.in')
    .then(tags => console.log(tags))
    .catch(error => console.error(error));
```

### ES6 Modules

```bash
import fetchHeadTags from 'head-meta';

const parseMeatData = async () => {
  try {
    const tags = await fetchHeadTags('https://www.pratikchakraborty.in/');
    console.log(tags)
  } catch (error) {
    console.error('Error fetching meta data:', error.message);
  }
};
 ```

## API

``fetchHeadTags(url: string): Promise<object>``

This function fetches meta tags and link tags from the specified URL.
Returns a Promise that resolves to an object containing the extracted meta tags and link tags.

### Example output:

```bash
{
  "metaTags": {
    "viewport": "width=device-width, initial-scale=1",
    "description": "Hi, I am Pratik Chakraborty and you are currently viewing my portfolio website. Check now!",
    "og:title": "Pratik Chakraborty | portfolio",
    "og:description": "Hi, I am Pratik Chakraborty and you are currently viewing my portfolio website. Check now!",
    "og:type": "website",
    "og:url": "https://www.pratikchakraborty.in",
    "og:image": "https://nuxt-portfolio.s3.ap-south-1.amazonaws.com/static-assets/Screenshot+2024-01-07+041541.png",
    "twitter:title": "Pratik Chakraborty | portfolio",
    "twitter:description": "Hi, I am Pratik Chakraborty and you are currently viewing my portfolio website. Check now!",
    "twitter:site": "https://www.pratikchakraborty.in",
    "twitter:image": "https://nuxt-portfolio.s3.ap-south-1.amazonaws.com/static-assets/Screenshot+2024-01-07+041541.png",
    "twitter:card": "summary_large_image"
  },
  "linkTags": {
    "stylesheet": "/_nuxt/MainBar.CI57Swy6.css",
    "modulepreload": "/_nuxt/MainBar.J0Q7xQTv.js",
    "prefetch": "/_nuxt/error-500.rmXc9Dcc.js"
  }
}
```

### Dependencies

- axios
- cheerio

## License
MIT