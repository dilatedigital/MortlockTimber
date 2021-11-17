/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions
createRedirect({ fromPath: '/vacoa-timber-cladding/', toPath: '/vacoa-cladding/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/do-i-have-to-maintain-shou-sugi-ban-charred-timber/', toPath: '/news/how-to-maintain-shou-sugi-ban-cladding-for-maximum-durability/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/pricing-new/', toPath: '/product-pricing-guide/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/timber-ceilings/proplank-timber-battens/', toPath: '/timber-battens/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/5-ideas-for-the-perfect-outdoor-entertaining-area/', toPath: '/news/outdoor-entertaining-ideas/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/composite-vs-real-timber-decking-pros-and-cons/', toPath: '/news/timber-vs-composite-decking/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/how-much-do-click-in-timber-batten-ceilings-and-walls-cost/', toPath: '/news/timber-ceiling-cost/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/how-much-does-shou-sugi-ban-charred-timber-cost/', toPath: '/news/charred-timber-cladding-cost/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/how-to-create-the-ultimate-outdoor-dining-area/', toPath: '/news/outdoor-dining-area/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/how-to-maintain-shou-sugi-ban-cladding-for-maximum-durability/', toPath: '/news/shou-sugi-ban-maintenance-guide/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/incredible-timber-features-to-complement-every-architectural-design/', toPath: '/news/architectural-timber-design/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/jarrah-merbau-blackbutt-and-more-choosing-the-best-timber-for-decking/', toPath: '/news/best-timber-for-decking/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/keeping-your-timber-deck-properly-maintained-will-keep-it-stunning-for-years-to-come/', toPath: '/news/timber-decking-maintenance-guide/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/random-or-set-lengths-problems-benefits-and-everything-else-you-need-to-know/', toPath: '/news/cut-to-length-timber/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/timber-decking-how-much-does-it-really-cost/', toPath: '/news/timber-decking-cost/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/timbers-making-a-comeback-why-are-so-many-public-projects-featuring-wood-so-heavily/', toPath: '/news/advantages-of-timber-building-material/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/what-is-end-matched-timber-and-what-are-the-benefits/', toPath: '/news/end-matched-tongue-and-groove-timber-paneling/', isPermanent: true, redirectInBrowser: true })
createRedirect({ fromPath: '/news/why-does-timber-move-what-issues-does-timber-movement-cause/', toPath: '/news/timber-movement/', isPermanent: true, redirectInBrowser: true })
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
            format
            title
            excerpt
            content
            date(formatString: "DD MMMM YYYY")
            featured_media {
              alt_text
              link
            }
            categories {
              name
            }
          }
        }
      }

      allWordpressWpProject {
        edges {
          node {
            id
            path
            status
            template
            title
            project_category
            featured_media {
              alt_text
              link
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpProject,
  } = result.data

  // Create Page pages.
  const defaultPageTemplate = path.resolve(
    `./src/templates/defaultPageTemplate.js`
  )
  const homepageTemplate = path.resolve(`./src/templates/template-homepage.js`)
  const contactTemplate = path.resolve(`./src/templates/template-contact.js`)
  const aboutPageTemplate = path.resolve(`./src/templates/template-about.js`)
  const meetTheTeamTemplate = path.resolve(`./src/templates/template-meet-the-team.js`)
  const thankyouTemplate = path.resolve(`./src/templates/template-thankyou.js`)
  const productSingleTemplate = path.resolve(
    `./src/templates/template-product-single.js`
  )
  const productParentTemplate = path.resolve(
    `./src/templates/template-product-parent.js`
  )
  const productParentTemplateNew = path.resolve(
    `./src/templates/template-product-parent-new.js`
  )
  const requestAQuoteTemplate = path.resolve(
    `./src/templates/template-request-a-quote.js`
  )
  const pricingTemplate = path.resolve(`./src/templates/template-pricing.js`)
  const pricingTemplateNew = path.resolve(`./src/templates/template-pricing-new.js`)
  const portfolioParentTemplate = path.resolve(
    `./src/templates/template-portfolio-parent.js`
  )
  const blogParentTemplate = path.resolve(
    `./src/templates/template-blog-parent.js`
  )
  const landingPageTemplate = path.resolve(
    `./src/templates/template-landing-page.js`
  )
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    switch (edge.node.template) {
      case "template-homepage.php":
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: edge.node.path,
          component: slash(homepageTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-contact.php":
        createPage({
          path: edge.node.path,
          component: slash(contactTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-about.php":
        createPage({
          path: edge.node.path,
          component: slash(aboutPageTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-thankyou.php":
        createPage({
          path: edge.node.path,
          component: slash(thankyouTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-meet-the-team.php":
        createPage({
          path: edge.node.path,
          component: slash(meetTheTeamTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-product-parent.php":
        createPage({
          path: `${edge.node.path}`,
          component: slash(productParentTemplate),
          context: {
            id: edge.node.id,
            slug: edge.node.slug,
          },
        })
        break
      case "template-product-parent-new.php":
        createPage({
          path: `${edge.node.path}`,
          component: slash(productParentTemplateNew),
          context: {
            id: edge.node.id,
            slug: edge.node.slug,
          },
        })
        break
      case "template-product-single.php":
        createPage({
          path: edge.node.path,
          component: slash(productSingleTemplate),
          context: {
            id: edge.node.id,
            slug: edge.node.slug,
          },
        })
        break
      case "template-landingpage.php":
        createPage({
          path: edge.node.path,
          component: slash(landingPageTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-request-a-quote.php":
        createPage({
          path: edge.node.path,
          component: slash(requestAQuoteTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-pricing.php":
        createPage({
          path: edge.node.path,
          component: slash(pricingTemplate),
          context: {
            id: edge.node.id,
          },
        })
        break
      case "template-pricing-new.php":
        createPage({
          path: edge.node.path,
          component: slash(pricingTemplateNew),
          context: {
            id: edge.node.id,
			slug: edge.node.slug,
          },
        })
        break
      case "template-portfolio-parent.php":
        const projects = allWordpressWpProject.edges
        const projectsPerPage = 18
        const numberOfProjects = Math.ceil(projects.length / projectsPerPage)

        Array.from({ length: numberOfProjects }).forEach((project, index) => {
          createPage({
            path:
              index === 0 ? edge.node.path : `${edge.node.path}${index + 1}`,
            component: slash(portfolioParentTemplate),
            context: {
              id: edge.node.id,
              actualPath: edge.node.path,
              numberOfProjects,
              currentPage: index + 1,
              skip: index * projectsPerPage,
              limit: projectsPerPage,
            },
          })
        })
        break
      case "template-blog-parent.php":
        const posts = allWordpressPost.edges
        const postsPerPage = 18
        const numberOfPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numberOfPages }).forEach((page, index) => {
          createPage({
            path:
              index === 0 ? edge.node.path : `${edge.node.path}${index + 1}`,
            component: slash(blogParentTemplate),
            context: {
              id: edge.node.id,
              actualPath: edge.node.path,
              posts: posts,
              numberOfPages,
              currentPage: index + 1,
              skip: index * postsPerPage,
              limit: postsPerPage,
            },
          })
        })
        break
      default:
        createPage({
          path: edge.node.path,
          component: slash(defaultPageTemplate),
          context: {
            id: edge.node.id,
          },
        })
    }
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `${edge.node.path}`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const projectTemplate = path.resolve(`./src/templates/project.js`)
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressWpProject.edges.forEach(edge => {
    createPage({
      path: `${edge.node.path}`,
      component: slash(projectTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
