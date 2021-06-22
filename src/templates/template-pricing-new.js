import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import BackgroundImage from 'gatsby-background-image';

import Button from "../components/global/button";
import SEO from "../components/seo";
import Layout from "../components/layout";
import PricingForm from "../components/forms/pricing-form-3502";
import RequestAQuote from "../components/forms/request-quote-form-3495";
import PricingInstallation from "../components/pricing/pricing-installation"
import PricingBanner from "../components/pricing/pricing-banner"
import GlobalNewsSlider from "../components/global-news-slider"

class Page extends Component {
  render() {

    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.pricing_banner_buttons,
      banner_type: 'medium'
    }

    const pricingImage = this.props.data.allWordpressPage.edges[0].node.acf.pricing_image

    const zip = {
      download_zip_file_timber_decking: this.props.data.allWordpressPage.edges[0].node.acf.download_zip_file_timber_decking,
      download_zip_file_timber_ceilings: this.props.data.allWordpressPage.edges[0].node.acf.download_zip_file_timber_ceilings,
      download_zip_file_timber_walls: this.props.data.allWordpressPage.edges[0].node.acf.download_zip_file_timber_walls,
      download_zip_shou_sugi_ban: this.props.data.allWordpressPage.edges[0].node.acf.download_zip_shou_sugi_ban,
      download_mortlock_product_pricing_specification_guide: this.props.data.allWordpressPage.edges[0].node.acf.download_mortlock_product_pricing_specification_guide
    }
	
    const pricingIntro = {
		pricing_intro_content: this.props.data.allWordpressPage.edges[0].node.acf.pricing_intro_content
	}
	
    const costRange = {
      cost_range_title: this.props.data.allWordpressPage.edges[0].node.acf.cost_range_title,
      cost_range_image: this.props.data.allWordpressPage.edges[0].node.acf.cost_range_image,
      cost_range_image_mobile: this.props.data.allWordpressPage.edges[0].node.acf.cost_range_image_mobile,
      cost_range_description_one: this.props.data.allWordpressPage.edges[0].node.acf.cost_range_description_one,
      cost_range_description_two: this.props.data.allWordpressPage.edges[0].node.acf.cost_range_description_two,
      cost_range_buttons: this.props.data.allWordpressPage.edges[0].node.acf.cost_range_buttons
    }
	
    const installation = {
      installation_title: this.props.data.allWordpressPage.edges[0].node.acf.installation_title,
      installation_image: this.props.data.allWordpressPage.edges[0].node.acf.installation_image,
      installation_description: this.props.data.allWordpressPage.edges[0].node.acf.installation_description,
      installation_expanded_description: this.props.data.allWordpressPage.edges[0].node.acf.installation_expanded_description,
      installation_buttons: this.props.data.allWordpressPage.edges[0].node.acf.installation_buttons
    }
	
    const primaryCost = {
      primary_cost_title: this.props.data.allWordpressPage.edges[0].node.acf.primary_cost_title,
      primary_cost_image: this.props.data.allWordpressPage.edges[0].node.acf.primary_cost_image,
      primary_cost_description: this.props.data.allWordpressPage.edges[0].node.acf.primary_cost_description,
      primary_cost_content: this.props.data.allWordpressPage.edges[0].node.acf.primary_cost_content,
      primary_cost_buttons: this.props.data.allWordpressPage.edges[0].node.acf.primary_cost_buttons
    }
	
    const logistics = {
      logistics_title: this.props.data.allWordpressPage.edges[0].node.acf.logistics_title,
      logistics_image: this.props.data.allWordpressPage.edges[0].node.acf.logistics_image,
      logistics_content: this.props.data.allWordpressPage.edges[0].node.acf.logistics_content
    }
	
    const howToUse = {
      how_to_use_title: this.props.data.allWordpressPage.edges[0].node.acf.how_to_use_title,
      how_to_use_description: this.props.data.allWordpressPage.edges[0].node.acf.how_to_use_description
    }
	
    const relatedArticleSectionTitle = this.props.data.allWordpressPage.edges[0].node.acf.pricing_articles_title
	
    const requestQuote = {
      request_a_quote_content: this.props.data.allWordpressPage.edges[0].node.acf.request_a_quote_content
    }
	
    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <PricingBanner data={bannerContent} />
        <div className="contact__wrapper pricing-intro">
          <div className="container">
			<div className="pricing-intro-content" dangerouslySetInnerHTML={{ __html: pricingIntro.pricing_intro_content }} />
		  </div>
		 </div>
        <div className="contact__wrapper cost-range">
          <div className="container">
            <div className="quote__text cr-title">
              <h2 dangerouslySetInnerHTML={{ __html: costRange.cost_range_title }} />
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="pricing__image cr-image desktop-chart" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
                  {costRange.cost_range_image ? <Img fluid={costRange.cost_range_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> : null}
                </div>
                <div className="pricing__image cr-image mobile-chart" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
				  {costRange.cost_range_image_mobile ? <Img fluid={costRange.cost_range_image_mobile.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> : null}
                </div>
              </div>
              <div className="col-sm-12">
                <div className="pricing_formwrap cr-description">
                  <div dangerouslySetInnerHTML={{ __html: costRange.cost_range_description_one }} />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="cr-buttons">
					{ costRange.cost_range_buttons ?
					  <div className="inner__bannerbuttons">
						{costRange.cost_range_buttons.map((button, index) => 
							<button
							  className={'button ' + button.cost_range_button_style}
							  key={index}
							  data-id={button.cost_range_button_link}
							  onClick={() =>
								scrollTo(`${button.cost_range_button_link}`)
							  }
							>
							  {button.cost_range_button_text}
							</button>
						)}
					  </div> : null }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__wrapper installation-section">
          <div className="container">
				<PricingInstallation data={installation} />
		  </div>
		</div>
        <div className="contact__wrapper primary-cost-drivers">
          <div className="container">	
           <div className="quote__text pcd-title">
              <h2 dangerouslySetInnerHTML={{ __html: primaryCost.primary_cost_title }} />
            </div>
           <div className="pcd-description" dangerouslySetInnerHTML={{ __html: primaryCost.primary_cost_description }}/>		
			  <div className="spec__wrapper">
				<div className="row">
				  <div className="col-sm-7">
					<div
					  className="spec__column"
					>
					  <div
						className="spec__box"
						dangerouslySetInnerHTML={{ __html: primaryCost.primary_cost_content }}
					  />
						<div className="pcd-buttons">
							{ primaryCost.primary_cost_buttons ?
							  <div className="inner__bannerbuttons">
								{primaryCost.primary_cost_buttons.map((button, index) => 
									<button
									  className={'button ' + button.primary_cost_button_style}
									  key={index}
									  data-id={button.primary_cost_button_link}
									  onClick={() =>
										scrollTo(`${button.primary_cost_button_link}`)
									  }
									>
									  {button.primary_cost_button_text}
									</button>
								)}
							  </div> : null }
						</div>
					</div>
				  </div>
				  <div className="col-sm-5">
					<div className="spec__image">
					  {primaryCost.primary_cost_image ? (
						<Img
						  fluid={
							primaryCost.primary_cost_image.localFile
							  .childImageSharp.fluid
						  }
						  alt="Mortlock Timber"
						/>
					  ) : null}
					</div>
				  </div>
				</div>
			  </div>
		  </div>
		</div>
        <div className="contact__wrapper logistics">
          <div className="container">	
           <div className="quote__text logistics-title">
              <h2 dangerouslySetInnerHTML={{ __html: logistics.logistics_title }} />
            </div>			
			  <div className="spec__wrapper">
				<div className="row">
				  <div className="col-sm-5">
					<div className="spec__image">
					  {logistics.logistics_image ? (
						<Img
						  fluid={
							logistics.logistics_image.localFile
							  .childImageSharp.fluid
						  }
						  alt="Mortlock Timber"
						/>
					  ) : null}
					</div>
				  </div>
				  <div className="col-sm-7">
					<div
					  className="spec__column"
					  data-sal="slide-up"
					  data-sal-easing="ease"
					  data-sal-delay="5"
					>
					  <div
						className="spec__box"
						dangerouslySetInnerHTML={{ __html: logistics.logistics_content }}
					  />
					</div>
				  </div>
				</div>
			  </div>
		  </div>
		</div>
        <div className="contact__wrapper pricing-related-articles">		
			{this.props.data.allWordpressPage.edges[0].node.acf.show_related_articles &&
			  this.props.data.allWordpressPost.edges.length && (
				<GlobalNewsSlider
				  contentData={this.props.data.allWordpressPost.edges}
				  title={relatedArticleSectionTitle}
				/>
			  )}
		</div>
		  
        <div id="download" className="contact__wrapper pricing-guide-form">
          <div className="container">
            <div className="quote__text pgf-title">
              <h2 dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.pricing_heading }} />
            </div>
            <div className="row">
              <div className="col-sm-6 pgf-content">
                <div className="pricing_formwrap">
                  <div dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.pricing_page_description }} />
                  <PricingForm zip={zip} location={this.props.location.href} />
                </div>
              </div>
              <div className="col-sm-6 pgf-image">
                <div className="pricing__image" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
                  {pricingImage ? <Img fluid={pricingImage.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> : null}
                </div>
              </div>
            </div>
          </div>
          <div className="container container__small">
            <div dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.pricing_description_bottom }} />
          </div>
        </div>
        <div className="contact__wrapper how-to-use">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
				<div className="quote__text htu-title">
				  <h2 dangerouslySetInnerHTML={{ __html: howToUse.how_to_use_title }} />
				</div>
				<div className="htu-description" dangerouslySetInnerHTML={{ __html: howToUse.how_to_use_description }} />
              </div>
            </div>
          </div>
        </div>
        <div id="requestquote" className="contact__wrapper request-quote">
          <div className="container">		
            <div className="quote__text" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5" dangerouslySetInnerHTML={{ __html: this.props.data.allWordpressPage.edges[0].node.acf.request_a_quote_content }} />
            <div className="quote__formwrap">
              <RequestAQuote location={this.props.location.href} />
            </div>
			</div>
			</div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query ($slug: String!){
    allWordpressPage(filter: {template: {eq: "template-pricing-new.php"}}) {
      edges {
        node {
          yoast {
            title
            metadesc
          }
          acf {
            pricing_banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            pricing_banner_image_overlay
            pricing_banner_heading
            pricing_banner_description
            pricing_banner_buttons {
              pricing_button_text
              pricing_button_link
              pricing_button_style
            }
			pricing_intro_content
            cost_range_title
            cost_range_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            cost_range_image_mobile {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            cost_range_description_one
			cost_range_description_two
            cost_range_buttons {
              cost_range_button_text
              cost_range_button_link
              cost_range_button_style
            }
            installation_title
            installation_description
			installation_expanded_description
            installation_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            installation_buttons {
              installation_button_text
              installation_button_link
              installation_button_style
            }
            primary_cost_title
            primary_cost_description
			primary_cost_content
            primary_cost_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            primary_cost_buttons {
              primary_cost_button_text
              primary_cost_button_link
              primary_cost_button_style
            }
            logistics_title
            logistics_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
			logistics_content
			how_to_use_title
			how_to_use_description
			pricing_articles_title
			show_related_articles
            pricing_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            pricing_heading
            pricing_page_description
            pricing_description_bottom
            download_zip_file_timber_decking {
              link
            }
            download_zip_file_timber_ceilings {
              link
            }
            download_zip_file_timber_walls {
              link
            }
            download_zip_shou_sugi_ban {
              link
            }
            download_mortlock_product_pricing_specification_guide {
              link
            }
			request_a_quote_content
          }
        }
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          title
          date(formatString: "DD MMMM YYYY")
          content
          wordpress_id
          type
          excerpt
          path
          featured_media {
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
`
