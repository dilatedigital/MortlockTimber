import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

// import Button from "../components/global/button";
import SEO from "../components/seo";
import Layout from "../components/layout";
import PricingForm from "../components/forms/pricing-form-3502";
import ProductPricingForm from "../components/forms/product-pricing-form-4360";
import ProductPricingFormClassicplank from "../components/forms/product-pricing-form-classicplank-8490";
import ProductPricingFormMarineplank from "../components/forms/product-pricing-form-marineplank-8505";
import ProductPricingFormMetroplank from "../components/forms/product-pricing-form-metroplank-8506";
import ProductPricingFormProplank from "../components/forms/product-pricing-form-proplank-8507";
import ProductPricingFormShousugiban from "../components/forms/product-pricing-form-shousugiban-8508";
import ProductPricingFormTrendplank from "../components/forms/product-pricing-form-trendplank-8509";
import ProductPricingFormVacoa from "../components/forms/product-pricing-form-vacoa-12055";
import ProductPricingFormCeilingTiles from "../components/forms/product-pricing-form-timber-ceiling-tiles-14661";
import RequestAQuote from "../components/forms/request-quote-form-3495";
import SampleRequest from "../components/forms/sample-request-form-3509";

class Post extends Component {
  render() {
    const pageData = this.props.data.wordpressPost
    const relatedData = this.props.data.allWordpressPost
    const postURL = this.props.location.href;
	
    
    
    // const pricingImage = this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image

	const pricingProduct = this.props.data.wordpressPost.acf.pricing_product
	
    const productPricing = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link,
    }
    
    const productPricingClassicplank = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.classicplank_pricing_guide_download_link,
    }
    
    const productPricingMarineplank = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.marineplank_pricing_guide_download_link,
    }
    
    const productPricingMetroplank = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.metroplank_pricing_guide_download_link,
    }
    
    const productPricingProplank = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.proplank_pricing_guide_download_link,
    }
    
    const productPricingShouSugiBan = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.shou_sugi_ban_pricing_guide_download_link,
    }
    
    const productPricingTrendplank = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.trendplank_pricing_guide_download_link,
    }
    
    const productPricingVacoa = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.vacoa_pricing_guide_download_link,
    }
    
    const productPricingCeilingTiles = {
      pricing_title: this.props.data.wordpressPost.acf.pricing_title,
      pricing_description: this.props.data.wordpressPost.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.ceiling_tiles_pricing_guide_download_link,
    }
	
    const requestSample = {
      request_sample_brochure: this.props.data.allWordpressAcfOptions.edges[0].node.options.sample_brochure_link,
    }
	
    const socialSharers = (event, el) => {
      event.preventDefault();
      window.open(el, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=440,width=660');
      return false;
    }

  	
	
    return (
    <Layout headerColor="dark">
      <SEO description={pageData.yoast.metadesc} title={pageData.yoast.title}/> 
        <div className="single__wrapper">
		<script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{ "@context": "https://schema.org", "@type": "BlogPosting", "mainEntityOfPage": { "@type": "WebPage", "@id": "'+ postURL +'" }, "headline": "'+ pageData.yoast.title +'", "description": "'+ pageData.yoast.metadesc +'", "image": "https://www.mortlock.com.au/",   "author": { "@type": "Organization", "name": "Mortlock Timber" }, "publisher": { "@type": "Organization", "name": "Mortlock Timber", "logo": { "@type": "ImageObject", "url": "https://site.mortlock.com.au/wp-content/uploads/2020/07/mortlock-logo.png" } }, "datePublished": "'+ pageData.date +'", "dateModified": "'+ pageData.date +'" }'}}></script>
          <div className="container">
          <div className="post__heading">
            <div className="post_category"> {
                pageData.categories.map((category, index) => ( < span key = { index } > { category.name } < /span> ))}</div >
                                <h1 dangerouslySetInnerHTML = {
                                    { __html: pageData.title }
                                }/> 
                                <span className = "post__meta" > by < span className = "author" > Mortlock Timber < /span> &emsp; | &emsp; {pageData.date}</span >
                                <
                                div className = "share__block" >
                                <
                                span className = "title" > share this article < /span> <
                                ul className = "social-networks" >
                                <
                                li > < a href = { `http://www.facebook.com/sharer.php?u=${postURL}` }
                                onClick = {
                                    (e) => socialSharers(e, `http://www.facebook.com/sharer.php?u=${postURL}`)
                                } > < span className = "text" > Facebook < /span><svg className="icon" height="512" viewBox="0 0 24 24" width="512"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/ > < /svg></a > < /li> <
                                li > < a href = { `https://www.linkedin.com/shareArticle?mini=true&url=${postURL}` }
                                onClick = {
                                    (e) => socialSharers(e, `https://www.linkedin.com/shareArticle?mini=true&url=${postURL}`)
                                } > < span className = "text" > Linkedin < /span><svg className="icon" height="512" viewBox="0 0 24 24" width="512"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/ > < path d = "m.396 7.977h4.976v16.023h-4.976z" / > < path d = "m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" / > < /svg></a > < /li> <
                                li > < a href = { `http://pinterest.com/pin/create/button/?url=${postURL}` }
                                onClick = {
                                    (e) => socialSharers(e, `http://pinterest.com/pin/create/button/?url=${postURL}`)
                                } > < span className = "text" > Pinterest < /span><svg className="icon" viewBox="-62 0 512 512"><path d="m60.945312 278.21875c.640626-1.597656 7.050782-26.230469 7.5-27.898438-10.007812-15.058593-21.125-64.371093-12.597656-104.398437 9.199219-58.730469 71.4375-87.601563 130.199219-87.601563v-.109374c73.570313.046874 128.640625 40.980468 128.699219 111.476562.046875 55.179688-33.195313 128.117188-89.957032 128.117188-.015624 0-.027343 0-.042968 0-20.257813 0-45.90625-9.1875-52.632813-18.210938-7.761719-10.398438-9.667969-23.230469-5.566406-36.941406 10.050781-32.082032 22.867187-70.511719 24.363281-96.136719 1.386719-24.183594-15.773437-39.917969-38.027344-39.917969-16.746093 0-38.496093 9.726563-49.335937 37.058594-8.953125 22.707031-8.761719 46.480469.585937 72.671875 3.644532 10.238281-16.15625 76.984375-22.5 98.71875-15.761718 53.992187-37.339843 122.304687-32.726562 160.347656l4.453125 36.605469 22.367187-29.3125c30.953126-40.519531 62.957032-145.332031 71.484376-170.835938 25.210937 32.648438 77.710937 33.585938 83.832031 33.585938 75.183593 0 160.4375-74.65625 158.019531-178.5625-2.121094-91.121094-68.808594-166.875-188.632812-166.875v.117188c-113.976563 0-180.5 60.835937-196.785157 137.703124-14.914062 71.273438 18.253907 125.519532 57.300781 140.398438zm0 0"/ > < /svg></a > < /li> < /
                                ul > <
                                /div> < /
                                div > <
                                div className = "featured__image" > {
                                    pageData.featured_media ? < Img fluid = { pageData.featured_media.localFile.childImageSharp.fluid }
                                    alt = "Mortlock Timber" / > : null
                                } <
                                /div> < /
                                div > <
                                div className = "container container__small" >
                                <
                                div className = "post__content"
                                dangerouslySetInnerHTML = {
                                    { __html: pageData.content }
                                }
                                /> < /
                                div >
                                <div class="contact__wrapper">
                                <div className = "container">
                               
                                  
                                <div class="quote__text">
                                <h2 dangerouslySetInnerHTML={{ __html: this.props.data.wordpressPost.acf.pricing_title }} />
                                </div>
                                <div className="row">
  <div className = {"" + (pricingProduct == 'quote' ? 'col-sm-12 post-page-form' : pricingProduct == 'sample' ? 'col-sm-12 post-page-form' : 'col-sm-6 post-page-form')}>
                                      <p dangerouslySetInnerHTML={{ __html: this.props.data.wordpressPost.acf.pricing_description }} />
                                      <div className = "pricing_formwrap" >
										{pricingProduct == 'general' ? ( <ProductPricingForm gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricing} pageID={this.props.pageID} location={this.props.location} /> ) 
									  : pricingProduct == 'classicplank' ? ( <ProductPricingFormClassicplank gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingClassicplank} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'marineplank' ? ( <ProductPricingFormMarineplank gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingMarineplank} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'metroplank' ? ( <ProductPricingFormMetroplank gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingMetroplank} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'proplank' ? ( <ProductPricingFormProplank gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingProplank} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'shousugiban' ? ( <ProductPricingFormShousugiban gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingShouSugiBan} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'trendplank' ? ( <ProductPricingFormTrendplank gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingTrendplank} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'vacoa' ? ( <ProductPricingFormVacoa gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingVacoa} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'ceilingtiles' ? ( <ProductPricingFormCeilingTiles gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricingCeilingTiles} pageID={this.props.pageID} location={this.props.location} /> )
									  : pricingProduct == 'quote' ? ( <RequestAQuote location={this.props.location.href} /> )
									  : pricingProduct == 'sample' ? ( <SampleRequest pageID={this.props.wpPageId} data={requestSample} location={this.props.location} gtag={this.props.gtag} /> )									  
									  : ( <ProductPricingForm gtag={this.props.gtag} finishes={this.props.finishes} battensize={this.props.battensize} data={productPricing} pageID={this.props.pageID} location={this.props.location} /> )  }
                                      </div>
                                      </div> 
                                      <div className = {"" + (pricingProduct == 'quote' ? 'col-sm-6 hide-post-form-image' : pricingProduct == 'sample' ? 'col-sm-6 hide-post-form-image' : 'col-sm-6')}>
                                            <div className="" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
          <Img fluid={ this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" />
                                            </div>
                                          </div>
                                </div> 
                                </div> 
                                </div>
  <div className = {"" + (pricingProduct == 'quote' ? 'contact__wrapper posts-pricing-bottom-text hide-posts-pricing-bottom-text' : pricingProduct == 'sample' ? 'contact__wrapper posts-pricing-bottom-text hide-posts-pricing-bottom-text' : 'contact__wrapper posts-pricing-bottom-text')}>
                                  <div className="container container__small">
                                  <div dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_form_description_bottom }} />

                               
                                  </div>
                                </div>
                                <
                                div className = "related__blogs" >
                                <
                                div className = "container" >
                                <
                                h2 > Related Articles < /h2> <
                                div className = "row" > {
                                    relatedData.edges ? relatedData.edges.map((relatedpost, index) => ( <
                                            div className = "col-sm-6"
                                            key = { index } >
                                            <
                                            div className = "blog_article" >
                                            <
                                            div className = "blog_image" >
                                            <
                                            Link to = { relatedpost.node.path } > {
                                                relatedpost.node.featured_media && < BackgroundImage fluid = { relatedpost.node.featured_media.localFile.childImageSharp.fluid }
                                                alt = "Mortlock Timber" / >
                                            } <
                                            /Link> < /
                                            div > <
                                            div className = "blog_meta" > {
                                                relatedpost.node.categories ? < span className = "post_category" > {
                                                    relatedpost.node.categories.map((category, index) => ( < span key = { index } > { category.name } < /span> ))}</span >: null
                                                        } <
                                                        span className = "date" > { relatedpost.node.date } < /span> < /
                                                        div > <
                                                        div className = "blog_text" >
                                                        <
                                                        h3 dangerouslySetInnerHTML = {
                                                            { __html: relatedpost.node.title }
                                                        }
                                                        /> {
                                                        (() => {
                                                            const regex = /(<([^>]+)>)/ig;
                                                            var removeHTMLtags = relatedpost.node.excerpt.replace(regex, '').substring(0, 150) + "...";
                                                            return ( <
                                                                p dangerouslySetInnerHTML = {
                                                                    { __html: removeHTMLtags }
                                                                }
                                                                />
                                                            )
                                                        })()
                                                    } <
                                                    Link className = "link"
                                                    to = { relatedpost.node.path } > Read more < /Link> < /
                                                    div > <
                                                    /div> < /
                                                    div >
                                                )): null
                                        } <
                                        /div> < /
                                        div > <
                                        /div> < /
                                        div > <
                                        /Layout>
                                    )
                                }
                            }

                            export default Post

                            export const pageQuery = graphql `
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMMM YYYY")
      categories {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1212) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      yoast {
        title
        metadesc
      }
			acf {
				pricing_product
				pricing_title
				pricing_description
			}
    }
    allWordpressPost(sort: {fields: [date], order:DESC}, limit: 2) {
      edges {
        node {
          title
          date(formatString: "DD MMMM YYYY")
          content
          wordpress_id
          type
          excerpt
          path
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
					src
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }          
        }
      }
    }
    allWordpressAcfOptions {
      edges {
      node {
        options {
        pricing_form_description_bottom
        pricing_image{
          localFile {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
				pricing_guide_download_link {
				  link
				}
				sample_brochure_link{
					link
				}
				classicplank_pricing_guide_download_link {
				  link
				}
				marineplank_pricing_guide_download_link {
				  link
				}
				metroplank_pricing_guide_download_link {
				  link
				}
				proplank_pricing_guide_download_link {
				  link
				}
				shou_sugi_ban_pricing_guide_download_link {
				  link
				}
				trendplank_pricing_guide_download_link {
				  link
				}
				vacoa_pricing_guide_download_link {
				  link
				}
				ceiling_tiles_pricing_guide_download_link {
				  link
				}
        }
      }
      }
    }
  }

`