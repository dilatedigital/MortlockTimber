import React, { Component } from "react";
import { graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

import SEO from "../components/seo";
import Layout from '../components/layout';
import SubMenu from "../components/global-subnav";
import Button from "../components/global/button";

import ProductFaq from "../components/productparent/product-faq"
import GlobalNewsSlider from "../components/global-news-slider"
import RequestSample from "../components/global/global-request-sample"
import PricingBlock from "../components/global/global-pricing-block"
import ProductApplication from "../components/productparent/product-intro"
import ProductGallery from "../components/productparent/product-gallery"
import ExpandableContent from "../components/productparent/product-text-section";
import ProductProducts from "../components/productparent/product-products";
import ProductTable from "../components/productparent/product-table";

class Page extends Component {
  render() {
    
    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf.product_single_banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf.product_single_banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf.product_single_banner_heading,
      banner_description: this.props.data.wordpressPage.acf.product_single_banner_sub_heading,
      banner_buttons: this.props.data.wordpressPage.acf.product_single_banner_buttons,
      banner_type: 'medium'
    }
	
    const productFAQ = {
      faq_title: this.props.data.wordpressPage.acf.faq_title,
      faqs: this.props.data.wordpressPage.acf.faqs,
    }

    const productPricing = {
      pricing_title: this.props.data.wordpressPage.acf.pricing_title,
      pricing_description: this.props.data.wordpressPage.acf
        .pricing_description,
      pricing_image: this.props.data.wordpressPage.acf.pricing_image,
      pricing_guide_download_link: this.props.data.wordpressPage.acf
        .pricing_guide_download_link,
    }

    const requestSample = {
      request_sample_image: this.props.data.wordpressPage.acf
        .request_sample_image,
      request_block_heading: this.props.data.wordpressPage.acf
        .request_block_heading,
      request_sample_brochure: this.props.data.wordpressPage.acf
        .request_sample_brochure,
      request_sample_description: this.props.data.wordpressPage.acf
        .request_sample_description,
    }
	
    const relatedArticleSectionTitle = this.props.data.wordpressPage.acf
      .related_article_section_title
	  
    const productApplication = {
      show_video: this.props.data.wordpressPage.acf.show_video,
      video_heading: this.props.data.wordpressPage.acf.video_heading,
      video_description: this.props.data.wordpressPage.acf.video_description,
      video_expand_description: this.props.data.wordpressPage.acf.video_expand_description,
      video_image: this.props.data.wordpressPage.acf.video_image,
      video_iframe_code: this.props.data.wordpressPage.acf.video_iframe_code,
    }
	
    const productGallery = {
      gallery_title: this.props.data.wordpressPage.acf.gallery_title,
      gallery_description: this.props.data.wordpressPage.acf.gallery_description,
      gallery_expand_description: this.props.data.wordpressPage.acf.gallery_expand_description,
      gallery_images: this.props.data.wordpressPage.acf.gallery_images,
      gallery_button_text: this.props.data.wordpressPage.acf.gallery_button_text,
      gallery_button_link: this.props.data.wordpressPage.acf.gallery_button_link,
    }
	
    const expandableContent = {
      text_section_title: this.props.data.wordpressPage.acf.text_section_title,
      text_section_description: this.props.data.wordpressPage.acf.text_section_description,
      text_section_expand_description: this.props.data.wordpressPage.acf.text_section_expand_description
    }
	
    const productProducts = {
      products_title: this.props.data.wordpressPage.acf.products_title,
      product_item: this.props.data.wordpressPage.acf.product_item
    }
	
    const productTable = {
      products_table_title: this.props.data.wordpressPage.acf.products_table_title,
      products_table_description: this.props.data.wordpressPage.acf.products_table_description,
      products_table_expand_description: this.props.data.wordpressPage.acf.products_table_expand_description,
      products_table_features: this.props.data.wordpressPage.acf.products_table_features,
      products_table_items: this.props.data.wordpressPage.acf.products_table_items
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
                      <Button type="external" link={button.product_single_button_link} text={button.product_single_button_text} style={button.product_single_button_style} key={index} /> : 
                      <Button link={button.product_single_button_link} text={button.product_single_button_text} style={button.product_single_button_style} key={index} /> 
                    ))}
                  </div> : null }
              </div>
            </div>
          </div>
        </div>
        <div className="product-parent-intro">
          <ProductApplication data={productApplication} />
        </div>
        <div className="product-parent-products">
          <ProductProducts data={productProducts} />
        </div>
		<div className="product-parent-table">
		<ProductTable data={productTable} />
		</div>
		<div className="product-project-gallery">
			<div className="product-project-gallery-container container">
				<ProductGallery data={productGallery} />
			</div>
		</div>
		<div className="product-category-faq">
			<div className="product-category-faq-container container">
		<ProductFaq data={productFAQ} />
			</div>
		</div>
		<div className="product-text-section">
			<div className="product-text-section-container container">
        <ExpandableContent data={expandableContent} />
			</div>
		</div>
		<div className="product-category-pricing-block">
        <PricingBlock
		data={productPricing}
          location={this.props.location.href}
        />
		</div>
		<div className="product-category-request-sample">
        <RequestSample
          data={requestSample}
          location={this.props.location.href}
        />
		</div>
        <div
          className="fixed-request-pricing"
        >
          Request Pricing
        </div>
		<div className="product-category-related-articles">
        {this.props.data.wordpressPage.acf.show_related_articles &&
          this.props.data.allWordpressPost.edges.length && (
            <GlobalNewsSlider
              contentData={this.props.data.allWordpressPost.edges}
              title={relatedArticleSectionTitle}
            />
          )}
		  </div>
		  </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPage {
			  yoast {
				title
				metadesc
			  }
			  acf {
				product_single_banner_image {
				  localFile {
					childImageSharp {
					  fluid(maxWidth: 1170) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
				product_single_banner_image_overlay
				product_single_banner_heading
				product_single_banner_sub_heading
				product_single_banner_buttons {
				  product_single_button_link
				  product_single_button_text
				  product_single_button_style
				}
				show_video
				video_heading
				video_iframe_code
				video_description
				video_expand_description
				video_image {
				  localFile {
					childImageSharp {
					  fluid {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
				products_title
				product_item {
					product_title
					product_aside_image {
					  localFile {
						childImageSharp {
						  fluid {
							...GatsbyImageSharpFluid_withWebp
						  }
						}
					  }
					}
					product_description
					button_text
					button_link
				}
				products_table_title
				products_table_description
				products_table_expand_description
				products_table_features {
					feature_item_title
				}
				products_table_items {
					product_item_title
					product_item_checkbox {
						product_item_tick
						product_item_text
					}
					product_item_button_text
					product_item_button_link
				}
				gallery_title
				gallery_description
				gallery_expand_description
				gallery_images {
				  gallery_image {
					link
					localFile {
					  childImageSharp {
						fluid(maxWidth: 1500) {
						  ...GatsbyImageSharpFluid_withWebp
						}
					  }
					}
				  }
				}
				gallery_button_text
				gallery_button_link
				faq_title
				faqs {
				  faq_title
				  faq_content
				}
				text_section_title
				text_section_description
				text_section_expand_description
				pricing_title
				pricing_image {
				  localFile {
					childImageSharp {
					  fluid(maxWidth: 650) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
				pricing_description
				pricing_guide_download_link {
				  link
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
				show_related_articles
				related_article_section_title
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