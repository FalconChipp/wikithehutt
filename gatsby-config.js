/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: `Wiki The Hutt`,
      description: `The unoffical Star Wars Wiki | Wiki The Hutt`,
      author: `Ryan Chippendale & Luke Sharples`,

        characters: {
          title: `Characters`,
          description: `Pick a side... Light, or Dark`, 
        },
        darksidechars: {
          title: `Dark Side Characters`,
          description: `#`,
        },
        lightsidechars: {
          title: `Light Side Chatacters`, 
          description: `#`,
        },
        ships: {
          title: `Ships`,
          description: `#`
        },
        weapons: {
          title: `Weapons`,
          description: `#`,
        }, 
        planets: {
          title: `Planets`,
          description: `#`
        }
    },
  plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`, // Needed for dynamic images
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      }, 
      `gatsby-plugin-breadcrumb`, {
        resolve: `gatsby-plugin-breadcrumb`,
        options: {
          locations: {
            pathname: "/",
          },
          crumbLabel: "Home",
          crumbSeparator: ' / '
        }
      }
  ],
}