const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHeadTags(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const metaTags = {};
        const linkTags = {};

        // Extract meta tags
        $('meta').each((i, element) => {
            const name = $(element).attr('name') || $(element).attr('property');
            if (name) {
                metaTags[name] = $(element).attr('content');
            }
        });

        // Extract link tags
        $('link').each((j, elements) => {
            const rel = $(elements).attr('rel');
            const href = $(elements).attr('href');

            if (rel) {
                linkTags[rel] = href || '';
            }

            // Check for favicon in other attributes
            if (rel && rel.toLowerCase() === 'icon' && !linkTags.icon && href) {
                linkTags.icon = href;
            } else if (!linkTags.icon && href && href.toLowerCase().includes('favicon')) {
                linkTags.icon = href;
            }
        });

        return { metaTags, linkTags };
    } catch (error) {
        throw new Error(error.message);
    }
}

// Export for CommonJS
module.exports = fetchHeadTags;

// Export for ES6 modules
module.exports.default = fetchHeadTags;