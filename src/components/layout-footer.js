import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import NewsletterForm from '../components/forms/newsletter-form-8174';

const Footer = ({ data }) => (
  <StaticQuery
    query={graphql`
      query footerQuery {
        allWordpressMenusMenusItems(filter: {slug: {in: ["footer-quick-links", "products"]}}) {
          edges {
            node {
              count
              items {
                title
                url
                wordpress_id
                slug
              }
            }
          }
        }

        allWordpressAcfOptions {
          edges {
            node {
              options {
                copyright_text
                footer_background
                footer_contact_info
                footer_social_media_title
                show_footer_contact_info
                show_footer_logo
                show_footer_social_medias
                website_by
                show_useful_links_nav
                show_product_nav
                socials {
                  social_links
                  social_media_title
                  social_media_platform
                }
                footer_logo_svg_code
                footer_logo {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }

              }
            }
          }
        }

      }
    `}

    render={data => (
      <footer className="footer">	  
      <div className="newsletter">
      <h3>Subscribe to our newsletter</h3>
      <NewsletterForm></NewsletterForm>
      </div>
        <div className="container">
          <div className="footer__top">
            <div className="row">
              <div className="col-sm-7 col-md-4 col-lg-3">
                <div className="footer_logo">
                  <Link to="/" dangerouslySetInnerHTML={{ __html: data.allWordpressAcfOptions.edges[0].node.options.footer_logo_svg_code }} />
                    {/* <Img 
                      fluid={data.allWordpressAcfOptions.edges[0].node.options.footer_logo.localFile.childImageSharp.fluid} 
                      alt={ data.allWordpressAcfOptions.edges[0].node.options.footer_logo.alt_text ? data.allWordpressAcfOptions.edges[0].node.options.footer_logo.alt_text : 'Mortlock Timber' }
                    /> */}
                </div>
                <div className="socials">
                  <span className="title">Follow us on social media</span>
                  <ul className="social-networks">
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/mortlocktimber/"><span className="text">Facebook</span><svg className="icon" height="512" viewBox="0 0 24 24" width="512"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/></svg></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/mortlock-timber-group/"><span className="text">Linkedin</span><svg className="icon" height="512" viewBox="0 0 24 24" width="512"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/><path d="m.396 7.977h4.976v16.023h-4.976z"/><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/></svg></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.pinterest.com.au/mortlocktimber/boards/"><span className="text">Pinterest</span><svg className="icon" viewBox="-62 0 512 512"><path d="m60.945312 278.21875c.640626-1.597656 7.050782-26.230469 7.5-27.898438-10.007812-15.058593-21.125-64.371093-12.597656-104.398437 9.199219-58.730469 71.4375-87.601563 130.199219-87.601563v-.109374c73.570313.046874 128.640625 40.980468 128.699219 111.476562.046875 55.179688-33.195313 128.117188-89.957032 128.117188-.015624 0-.027343 0-.042968 0-20.257813 0-45.90625-9.1875-52.632813-18.210938-7.761719-10.398438-9.667969-23.230469-5.566406-36.941406 10.050781-32.082032 22.867187-70.511719 24.363281-96.136719 1.386719-24.183594-15.773437-39.917969-38.027344-39.917969-16.746093 0-38.496093 9.726563-49.335937 37.058594-8.953125 22.707031-8.761719 46.480469.585937 72.671875 3.644532 10.238281-16.15625 76.984375-22.5 98.71875-15.761718 53.992187-37.339843 122.304687-32.726562 160.347656l4.453125 36.605469 22.367187-29.3125c30.953126-40.519531 62.957032-145.332031 71.484376-170.835938 25.210937 32.648438 77.710937 33.585938 83.832031 33.585938 75.183593 0 160.4375-74.65625 158.019531-178.5625-2.121094-91.121094-68.808594-166.875-188.632812-166.875v.117188c-113.976563 0-180.5 60.835937-196.785157 137.703124-14.914062 71.273438 18.253907 125.519532 57.300781 140.398438zm0 0"/></svg></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/mortlocktimber/?hl=en"><span className="text">Instagram</span><svg className="icon" height="511pt" viewBox="0 0 511 511.9" width="511pt"><path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"/><path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"/><path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"/></svg></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCM9q-N6z8SAmiHEyVGCmqsg"><span className="text">Youtube</span><svg className="icon" height="682pt" viewBox="-21 -117 682.66672 682" width="682pt"><path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0"/></svg></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-5 col-md-3 col-lg-2">
                <h4>Products</h4>
                <ul className="footer_menu">
                  {data.allWordpressMenusMenusItems.edges[1].node.items.map((menu) => (
                  <li key={menu.wordpress_id}><Link to={"/" + menu.slug}>{menu.title}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-7 col-md-5 col-lg-4">
                <h4>Useful Links</h4>
                <div className="splitMenu">
                  <ul className="footer_menu">
                    {data.allWordpressMenusMenusItems.edges[0].node.items.map((menu) => (
                    <li key={menu.wordpress_id}><Link to={"/" + menu.slug}>{menu.title}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-3">
                <div className="footer__contactinfo" dangerouslySetInnerHTML={{ __html: data.allWordpressAcfOptions.edges[0].node.options.footer_contact_info }} />
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="row">
              <div className="col-md-6">
                <strong className="copyright" dangerouslySetInnerHTML={{ __html: data.allWordpressAcfOptions.edges[0].node.options.copyright_text }} />
              </div>
              <div className="col-md-6">
                <strong className="websiteby" dangerouslySetInnerHTML={{ __html: data.allWordpressAcfOptions.edges[0].node.options.website_by }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
