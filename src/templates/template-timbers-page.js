import React, { Component } from "react";
import { graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import scrollTo from "gatsby-plugin-smoothscroll"

import SEO from "../components/seo";
import Layout from '../components/layout';
import SubMenu from "../components/global-subnav";
import Button from "../components/global/button";

import TimbersFaq from "../components/timbers/timbers-faq"
import RequestSample from "../components/global/global-request-timber-guide"
import TimbersIntro from "../components/timbers/timbers-intro"
import TimberItems from "../components/timbers/timber-items";

class Page extends Component {
  render() {
    
    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf.timber_banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf.timber_banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf.timber_banner_heading,
      banner_description: this.props.data.wordpressPage.acf.timber_banner_sub_heading,
      banner_buttons: this.props.data.wordpressPage.acf.timber_banner_buttons,
      banner_type: 'medium'
    }
	
    const timbersFAQ = {
      faq_title: this.props.data.wordpressPage.acf.faq_title,
      faqs: this.props.data.wordpressPage.acf.faqs,
    }

    const requestSample = {
      request_sample_image: this.props.data.wordpressPage.acf
        .request_sample_image,
      request_block_heading: this.props.data.wordpressPage.acf
        .request_block_heading,
      request_sample_brochure: this.props.data.allWordpressAcfOptions.edges[0].node.options.sample_brochure_link,
      request_sample_description: this.props.data.wordpressPage.acf
        .request_sample_description,
    }
	  
    const timbersIntro = {
      intro_heading: this.props.data.wordpressPage.acf.intro_heading,
      intro_description: this.props.data.wordpressPage.acf.intro_description,
    }
	
    const timberItems = {
      timber_item: this.props.data.wordpressPage.acf.timber_item
    }
				
    return (
      <Layout>
        <SEO 
          description={this.props.data.wordpressPage.yoast.metadesc ? this.props.data.wordpressPage.yoast.metadesc : null} 
          title={this.props.data.wordpressPage.yoast.title ? this.props.data.wordpressPage.yoast.title : null} 
        />
		<div className="new-category-template">
        <div className={bannerContent.banner_type ? `inner__banner ${bannerContent.banner_type}` : 'inner__banner'}>
          <div className="bg__image has-overlay">
            { bannerContent.banner_image ? <BackgroundImage fluid={bannerContent.banner_image.localFile.childImageSharp.fluid} /> : null }
          </div>
          <div className="container">
            <div className="inner__bannerbox">
              <div className="box" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
                <h1 className={ !bannerContent.banner_description ? "text-center" : null } dangerouslySetInnerHTML={{ __html: bannerContent.banner_heading }} />
                { bannerContent.banner_description ? <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: bannerContent.banner_description }} /> : null }
                { bannerContent.banner_buttons ?
                  <div className="inner__bannerbuttons">
                    {bannerContent.banner_buttons.map((button, index) => (
                      (index === 1) ? 
                      <Button type="external" link={button.timber_button_link} text={button.timber_button_text} style={button.timber_button_style} key={index} /> : 
                      <Button link={button.timber_button_link} text={button.timber_button_text} style={button.timber_button_style} key={index} /> 
                    ))}
                  </div> : null }
              </div>
            </div>
          </div>
        </div>
        <div className="product-parent-intro timbers-intro">
          <TimbersIntro data={timbersIntro} />
        </div>
        <div className="product-parent-products timber-items">
          <TimberItems data={timberItems} />
        </div>
		<div className="product-category-request-sample">
        <RequestSample
          data={requestSample}
          location={this.props.location.href}
        />
		</div>
		<div className="product-category-faq">
			<div className="product-category-faq-container container">
		<TimbersFaq data={timbersFAQ} />
			</div>
		</div>
		  </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
		wordpress_id
			  yoast {
				title
				metadesc
			  }
			  acf {
				timber_banner_image {
				  localFile {
					childImageSharp {
					  fluid(maxWidth: 1170) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
				timber_banner_image_overlay
				timber_banner_heading
				timber_banner_sub_heading
				timber_banner_buttons {
				  timber_button_link
				  timber_button_text
				  timber_button_style
				}
				intro_heading
				intro_description
				timber_item {
					timber_aside_image {
					  localFile {
						childImageSharp {
						  fluid {
							...GatsbyImageSharpFluid_withWebp
						  }
						}
					  }
					}
					timber_title
          timber_qualities
					timber_description
					timber_expand_description
					button_text
					button_link
          button_text_two
          button_link_two
				}
				request_block_heading
				request_sample_image {
				  localFile {
					childImageSharp {
					  fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
				request_sample_description
				request_sample_brochure {
				  link
				}
				faq_title
				faqs {
				  faq_title
				  faq_content
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
        }
      }
      }
    }
  }
`