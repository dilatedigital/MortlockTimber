import React, { Component } from "react";
import { graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import scrollTo from "gatsby-plugin-smoothscroll"

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
      pricing_description: this.props.data.wordpressPage.acf.pricing_description,
      pricing_image: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_image,
      pricing_guide_download_link: this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link,
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
      text_section_expand_description: this.props.data.wordpressPage.acf.text_section_expand_description,
	  text_section_image: this.props.data.wordpressPage.acf.text_section_image
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

	const postID = this.props.data.wordpressPage.wordpress_id
	var faqSchema;
	if (postID == 182) {
	  faqSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"HOW WIDE IS TIMBER DECKING?","acceptedAnswer":{"@type":"Answer","text":"Timber decking boards are available in 85mm up to 135mm wide. There are narrower and wider board options however this is the most popular decking width range."}},{"@type":"Question","name":"WHICH TIMBER IS BEST FOR DECKING?","acceptedAnswer":{"@type":"Answer","text":"As a guide class 1 and 2 Australian hardwood timbers are the most durable for timber decking. Jarrah is your best all round decking species when you factor in cost and durability."}},{"@type":"Question","name":"HOW TO MAINTAIN TIMBER DECKING?","acceptedAnswer":{"@type":"Answer","text":"Maintaining timber includes cleaning your deck by mopping with soapy water and hosing it off. You will also need to re-oil your deck by mopping on your oil with a lambswool mop. Download our maintenance guide."}},{"@type":"Question","name":"IS TIMBER DECKING BETTER THAN COMPOSITE DECKING?","acceptedAnswer":{"@type":"Answer","text":"It depends, natural timber decking will always look amazing, much better than composite however it does require maintenance. Composite on the other hand doesn’t look as good as real timber and can be very hot to walk on when exposed to the sun but needs less maintenance, further reading."}},{"@type":"Question","name":"WHAT ARE ADVANTAGES OF TIMBER DECKING?","acceptedAnswer":{"@type":"Answer","text":"Timber is a renewable resource that has a low carbon footprint. You can never match the striking appearance of real timber."}},{"@type":"Question","name":"WHAT IS THE LIFESPAN OF TIMBER DECKING?","acceptedAnswer":{"@type":"Answer","text":"It depends on the timber type you choose the exposure to the weather and the maintenance the timber decking receives. A well-maintained timber deck can last up to 50 years, sometimes longer."}},{"@type":"Question","name":"WHAT FIRE RATING IS TIMBER DECKING?","acceptedAnswer":{"@type":"Answer","text":"Different timbers offer different BAL fire ratings, the highest fire rating natural timber can achieve is BAL 29, for a list of bush fire rated timbers"}},{"@type":"Question","name":"HOW MUCH DOES TIMBER DECKING COST?","acceptedAnswer":{"@type":"Answer","text":"Cost of timber decking depends on a range of factors including timber type, complexity of your deck and timber board size you select. A general price guide ranges from $300 – $400 per m2,"}}]}'}}></script>;
	} else if (postID == 9875) {
	  faqSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you maintain timber feature walls?","acceptedAnswer":{"@type":"Answer","text":"Internal timber feature walls typically do not need maintenance, just regular cleaning as with any type of wall product. External timber walls however will need regular maintenance if exposed to the weather. External timber walls may need recoating with oil as often as 1 to 2 years."}},{"@type":"Question","name":"What is the best timber for feature walls?","acceptedAnswer":{"@type":"Answer","text":"For internal applications Mortlock timber offers a range of timber options, for external timber feature walls Mortlock Timber recommends choosing a class 1 or class 2 timber. To see finishes and available timbers"}},{"@type":"Question","name":"How to install feature timber wall panelling?","acceptedAnswer":{"@type":"Answer","text":"Mortlock Timber does not offer installation, we recommend you contact a qualified carpenter for installation."}}]}'}}></script>;
	} else if (postID == 186) {
	  faqSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best timber for celling?","acceptedAnswer":{"@type":"Answer","text":"Mortlock timber offers a range of timbers suited to feature timber ceilings. As timber ceilings need little maintenance you can use quite a large range of timbers. To view timbers best suited to feature timber ceilings"}},{"@type":"Question","name":"How long does timber ceiling last?","acceptedAnswer":{"@type":"Answer","text":"Timber ceilings are a great way to include a timber feature with low maintenance. Timber ceilings often don’t need a lot of attention due to the low exposure to the weather. A timber ceiling with little or no exposure to the weather could last a lifetime with little maintenance."}},{"@type":"Question","name":"How much does a timber feature ceiling cost?","acceptedAnswer":{"@type":"Answer","text":"Timber feature ceilings can cost anywhere from $100 p/m2 up to over $1000 p/m2. As there is such a large range of options of ceiling types, timber types and timber finishes, it’s difficult to put an exact number without discussing your budget and what you are looking to achieve."}},{"@type":"Question","name":"How do you maintain a timber ceiling?","acceptedAnswer":{"@type":"Answer","text":"Maintenance on a timber ceiling is mostly just general cleaning. Mostly ceilings have limited exposure to the sun and rain, it could need attention where the sun is reflecting off glass or the water from a pool."}}]}'}}></script>;
	} else if (postID == 9684) {
	  faqSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best timber for exterior cladding?","acceptedAnswer":{"@type":"Answer","text":"Class 1 and 2 hardwoods are the best options for timber wall cladding externally,"}},{"@type":"Question","name":"How long does timber cladding last","acceptedAnswer":{"@type":"Answer","text":"For internal applications Mortlock timber offers a range of timber options, for external timber feature walls Mortlock Timber recommends choosing a class 1 or class 2 timber. To see finishes and available timbers. Some timber cladding types can last up to 50 years sometimes longer when maintained properly. It also depends on the timber type you choose; Mortlock Timber can recommend the correct options based on your application."}},{"@type":"Question","name":"How much does timber cladding cost?","acceptedAnswer":{"@type":"Answer","text":"As a guide the cost for the timber cladding ranges from $110 p/m2 up to $300 p/m2, installation depends on the scope, for example an installer might need to build out the wall structure or batten out the façade, this adds cost. To install timber cladding only it could cost around $60 – $90 per/m2 depending on the complexity of the project."}},{"@type":"Question","name":"External Timber Cladding Maintenance?","acceptedAnswer":{"@type":"Answer","text":"Natural timber cladding requires maintenance. Maintenance depends on the level of exposure to the weather however as a guide timber would need recoating with an oil every 18 months – 2 years to maintain the natural colour of the timber. Lower maintenance options are available like"}}]}'}}></script>;
	} else {
	  faqSchema= '';
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
		{faqSchema}
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
  query($id: String!, $slug: String!) {
    wordpressPage(id: { eq: $id }) {
		wordpress_id
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
					product_expand_description
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
				text_section_image {
				  localFile {
					childImageSharp {
					  fluid(maxWidth: 650) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
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