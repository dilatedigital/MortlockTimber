import React, { Component } from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubMenu from "../components/global-subnav"
import Button from "../components/global/button"

import ProductOverview from "../components/speciesingle/specie-overview"
import ProductBenefit from "../components/speciesingle/specie-benefit"
import ProductApplication from "../components/speciesingle/specie-application"
import ProductFaq from "../components/productsingle/product-faq"
import SpecieProducts from "../components/speciesingle/specie-products"
import SpecieFinishes from "../components/speciesingle/specie-finishes"
import SpecieColourVariation from "../components/speciesingle/specie-colour-variation"
import SpecieNaturalFeature from "../components/speciesingle/specie-natural-feature"
import SpecieProperties from "../components/speciesingle/specie-properties"
import SpecieLatestProjects from "../components/speciesingle/specie-latest-projects"

import RequestSpecieSample from "../components/global/global-request-specie-sample"

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf
        .specie_single_banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf
        .specie_single_banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf
        .specie_single_banner_heading,
      banner_description: this.props.data.wordpressPage.acf
        .specie_single_banner_sub_heading,
      banner_buttons: this.props.data.wordpressPage.acf
        .specie_single_banner_buttons,
    }

    const productOverview = {
      product_title: this.props.data.wordpressPage.acf.specie_title,
      product_overview_aside_title: this.props.data.wordpressPage.acf
        .specie_overview_aside_title,
      product_aside_image: this.props.data.wordpressPage.acf
        .specie_aside_image,
      product_description: this.props.data.wordpressPage.acf
        .specie_description,
      product_expand_description: this.props.data.wordpressPage.acf
        .specie_expand_description,
    }

    const productBenefit = {
      product_benefit_image: this.props.data.wordpressPage.acf
        .specie_benefit_image,
      product_benefit_title: this.props.data.wordpressPage.acf
        .specie_benefit_title,
      product_benefit_description: this.props.data.wordpressPage.acf
        .specie_benefit_description,
      product_benefit_columns: this.props.data.wordpressPage.acf
        .specie_benefit_columns,
    }

    const productApplication = {
      application_content: this.props.data.wordpressPage.acf
        .application_content,
      application_gallery: this.props.data.wordpressPage.acf
        .application_gallery,
    }

    const specie_products = {
      products_list: this.props.data.wordpressPage.acf.products_list,
      products_heading: this.props.data.wordpressPage.acf
        .products_heading,
      products_description: this.props.data.wordpressPage.acf
        .products_description,
    }
    
    const specie_finishes = {
      finishes_list: this.props.data.wordpressPage.acf.finishes_list,
      finishes_heading: this.props.data.wordpressPage.acf
        .finishes_heading,
      finishes_description: this.props.data.wordpressPage.acf
        .finishes_description,
      finishes_button_one_text: this.props.data.wordpressPage.acf
        .finishes_button_one_text,
      finishes_button_one_link: this.props.data.wordpressPage.acf
        .finishes_button_one_link,
      finishes_button_two_text: this.props.data.wordpressPage.acf
        .finishes_button_two_text,
      finishes_button_two_link: this.props.data.wordpressPage.acf
        .finishes_button_two_link,
    }
    
    const specie_colour_variation = {
      colour_variation_list: this.props.data.wordpressPage.acf.colour_variation_list,
      colour_variation_heading: this.props.data.wordpressPage.acf
        .colour_variation_heading,
      colour_variation_description: this.props.data.wordpressPage.acf
        .colour_variation_description,
    }
    
    const specie_natural_feature = {
      natural_feature_list: this.props.data.wordpressPage.acf.natural_feature_list,
      natural_feature_heading: this.props.data.wordpressPage.acf
        .natural_feature_heading,
      natural_feature_description: this.props.data.wordpressPage.acf
        .natural_feature_description,
      natural_feature_additional_description: this.props.data.wordpressPage.acf
        .natural_feature_additional_description,
    }
    
    const specie_properties = {
      properties_list: this.props.data.wordpressPage.acf.properties_list,
      properties_heading: this.props.data.wordpressPage.acf
        .properties_heading,
      properties_description: this.props.data.wordpressPage.acf
        .properties_description,
      properties_table_heading: this.props.data.wordpressPage.acf
        .properties_table_heading,
    }
    
    const specie_latest_projects = {
      latest_projects_list: this.props.data.wordpressPage.acf.latest_projects_list,
      latest_projects_heading: this.props.data.wordpressPage.acf
        .latest_projects_heading,
      latest_projects_description: this.props.data.wordpressPage.acf
        .latest_projects_description,
    }

    const productFAQ = {
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
      request_sample_heading: this.props.data.wordpressPage.acf
        .product_single_banner_heading,
    }

    const postID = this.props.data.wordpressPage.wordpress_id

    const submenus = ["benefits", "applications", "products", "appearance", "properties"]

    let requestSampleTag = {}
    let requestPricingTag = {}

    return (
      <Layout>
        <SEO
          description={
            this.props.data.wordpressPage.yoast.metadesc
              ? this.props.data.wordpressPage.yoast.metadesc
              : null
          }
          title={
            this.props.data.wordpressPage.yoast.title
              ? this.props.data.wordpressPage.yoast.title
              : null
          }
        />
        <div
          className="inner__banner product-single-template specie-template-banner"
          data-sample={requestSampleTag}
          data-price={requestPricingTag}
        >
          <div className="bg__image has-overlay">
            {bannerContent.banner_image ? (
              <GatsbyImage
                fluid={
                  bannerContent.banner_image.localFile.childImageSharp.fluid
                }
                alt="banner"
              />
            ) : null}
          </div>
          <div className="container">
            <div
              className="inner__bannerbox"
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-delay="5"
            >
              <div className="box">
                <h1
                  className={
                    !bannerContent.banner_description ? "text-center" : null
                  }
                  dangerouslySetInnerHTML={{
                    __html: bannerContent.banner_heading,
                  }}
                />
                {bannerContent.banner_description ? (
                  <span
                    className="inner__bannertext"
                    dangerouslySetInnerHTML={{
                      __html: bannerContent.banner_description,
                    }}
                  />
                ) : null}
                {bannerContent.banner_buttons ? (
                  <div className="inner__bannerbuttons">
                    {bannerContent.banner_buttons.map((button, index) =>
                      index === 1 ? (
                        <Button
                          type="external"
                          link={button.specie_single_button_link}
                          text={button.specie_single_button_text}
                          style={button.specie_single_button_style}
                          key={index}
                        />
                      ) : (
                        <button
                          className="button primary"
                          key={index}
                          data-id={button.specie_single_button_link}
                          onClick={() =>
                            scrollTo(`${button.specie_single_button_link}`)
                          }
                        >
                          {button.specie_single_button_text}
                        </button>
                      )
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <SubMenu data={submenus} />
        <div className="product__singlewrap specie__singlewrap">
          <ProductOverview data={productOverview} />
          <ProductBenefit id={submenus[0]} data={productBenefit} />
          <ProductApplication id={submenus[1]} data={productApplication} />
        </div>
        <div className="product__description specie-description specie_products">
          <div className="container">
            <SpecieProducts id={submenus[2]} data={specie_products} />
          </div>
        </div>
        <div className="product__description specie-description specie_finishes">
          <div className="container">
            <SpecieFinishes id={submenus[3]} data={specie_finishes} />
          </div>
        </div>
        <div className="product__description specie-description specie_colour_variation">
          <div className="container">
            <SpecieColourVariation data={specie_colour_variation} />
          </div>
        </div>
        <div className="product__description specie-description specie_natural_feature">
          <div className="container">
            <SpecieNaturalFeature data={specie_natural_feature} />
          </div>
        </div>
        <div className="product__description specie-description specie_properties">
          <div className="container">
            <SpecieProperties id={submenus[4]} data={specie_properties} />
          </div>
        </div>
        <div className="product__description specie-description specie_latest_projects">
          <div className="container">
            <SpecieLatestProjects data={specie_latest_projects} />
          </div>
        </div>
        <div className="product__description specie-description specie-faq">
          <div className="container">
            <ProductFaq data={productFAQ} />
          </div>
        </div>
        <RequestSpecieSample
          wpPageId={postID}
          data={requestSample}
          location={this.props.location.href}
          gtag={requestSampleTag}
        />
		<div className="floating-product-buttons specie-floats">
        <div
          className="fixed-request-sample"
          onClick={() => scrollTo(`#request-a-sample`)}
        >
          Request Sample
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
        specie_single_banner_sub_heading
        specie_single_banner_heading
        specie_single_banner_image_overlay
        specie_single_banner_buttons {
          specie_single_button_link
          specie_single_button_text
          specie_single_button_style
        }
        specie_single_banner_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                fallback: base64
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
          }
        }
        specie_title
        specie_overview_aside_title
        specie_aside_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        specie_description
        specie_expand_description
        specie_benefit_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        specie_benefit_title
        specie_benefit_description
        specie_benefit_columns {
          benefit_or_button
          button_text
          button_link
          icon_svg
          benefit_title
          benefit_description
        }
        application_content
        application_gallery {
          gallery_images{
            gallery_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          image_title
          image_icon
          image_description
        }
        products_heading
        products_description
        products_list{
          product_image {
            link
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          product_title
          product_description
          product_link
        }
        finishes_heading
        finishes_description
        finishes_list{
          finishes_image {
            link
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          finish_title
          finish_description
        }
        finishes_button_one_text
        finishes_button_one_link{
				  link
				}
        finishes_button_two_text
        finishes_button_two_link
        colour_variation_heading
        colour_variation_description
        colour_variation_list{
          colour_variation_image {
            link
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        natural_feature_heading
        natural_feature_description
        natural_feature_list{
          natural_feature_item_heading
          natural_feature_item_image {
            link
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        natural_feature_additional_description
        properties_heading
        properties_description
        properties_table_heading
        properties_list{
          property_heading
          property_description
        }
        latest_projects_heading
        latest_projects_description
        latest_projects_list{
          project_image {
            link
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          project_title
          project_description
          project_link
        }
        faq_title
        faqs {
          faq_title
          faq_content
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
