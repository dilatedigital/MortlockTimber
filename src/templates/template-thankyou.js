import React, { Component } from "react";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

import SEO from "../components/seo";
import Layout from '../components/layout';
import Button from "../components/global/button";

import PricingNewsSlider from "../components/pricing-news-slider"

class Page extends Component {
  render() {
    
    const bannerContent = {
      main_banner_image: this.props.data.wordpressPage.acf.main_banner_image,
      main_banner_image_overlay: this.props.data.wordpressPage.acf.main_banner_image_overlay,
      main_banner_heading: this.props.data.wordpressPage.acf.main_banner_heading,
      main_banner_description: this.props.data.wordpressPage.acf.main_banner_sub_heading,
    }

    const messageBlock = {
      message_description: this.props.data.wordpressPage.acf
        .message_description,
	  message_button_link: this.props.data.wordpressPage.acf
        .message_button_link,
	  message_button_text: this.props.data.wordpressPage.acf
        .message_button_text,
    }   
    
    const contentBlock = {
      content_block_title: this.props.data.wordpressPage.acf.content_block_title,
      content_block_description: this.props.data.wordpressPage.acf
        .content_block_description,
      content_block_image: this.props.data.wordpressPage.acf.content_block_image,
	  content_block_button_one_text: this.props.data.wordpressPage.acf
        .content_block_button_one_text,
	  content_block_button_one_link: this.props.data.wordpressPage.acf
        .content_block_button_one_link,
	  content_block_button_two_text: this.props.data.wordpressPage.acf
        .content_block_button_two_text,
	  content_block_button_two_link: this.props.data.wordpressPage.acf
        .content_block_button_two_link,
    }

    const articlesSectionTitle = this.props.data.wordpressPage.acf
      .articles_section_title
    
    const postID = this.props.data.wordpressPage.wordpress_id
				
    return (
      <Layout>
        <SEO 
          description={this.props.data.wordpressPage.yoast.metadesc ? this.props.data.wordpressPage.yoast.metadesc : null} 
          title={this.props.data.wordpressPage.yoast.title ? this.props.data.wordpressPage.yoast.title : null} 
        />
		<div className="new-category-template">
        <div className="inner__banner medium ty-banner">
          <div className="bg__image has-overlay">
            { bannerContent.main_banner_image ? <BackgroundImage fluid={bannerContent.main_banner_image.localFile.childImageSharp.fluid} /> : null }
          </div>
          <div className="container">
            <div className="inner__bannerbox">
              <div className="box" data-sal="slide-up" 
      data-sal-easing="ease"
      data-sal-delay="5">
                <h1 className={ !bannerContent.main_banner_description ? "text-center" : null } dangerouslySetInnerHTML={{ __html: bannerContent.main_banner_heading }} />
                { bannerContent.main_banner_description ? <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: bannerContent.main_banner_description }} /> : null }
              </div>
            </div>
          </div>
        </div>
      {this.props.data.wordpressPage.acf.show_message_block && (
		<div className="product-category-pricing-block ty-message-block">
			<div className="pricing__block">
			  <div className="container">
				<div className="row">
				  <div className="col-sm-12">
					<div className="pricing__text" >
					  <p dangerouslySetInnerHTML={{ __html: messageBlock.message_description }} />
{postID === 14174 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.classicplank_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.classicplank_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.classicplank_pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null ) 
									  : postID === 14178 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.marineplank_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.marineplank_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.marineplank_pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 14182 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.metroplank_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.metroplank_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.metroplank_pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 14142 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.proplank_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.proplank_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.proplank_pricing_guide_download_link.link} target="_blank" rel="noreferrer" data="proplank">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 14185 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.shou_sugi_ban_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.shou_sugi_ban_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.shou_sugi_ban_pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 14188 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.trendplank_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.trendplank_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.trendplank_pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 14191 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.vacoa_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.vacoa_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.vacoa_pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 15800 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.ceiling_tiles_pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.ceiling_tiles_pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.ceiling_tiles_pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 14206 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )
									  : postID === 14212 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null ) 
									  : postID === 14214 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <div class="inner__bannerbuttons">
                  {this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <a class="button secondary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )									  
									  : ( messageBlock.message_button_link ? <div class="inner__bannerbuttons">
                  {messageBlock.message_button_link ? <a class="button secondary" href={"https://" + messageBlock.message_button_link} target="_blank" rel="noreferrer">{messageBlock.message_button_text}</a> : null }
                  </div> : null )  }
					</div>
				  </div>
				</div>
			  </div>
			</div>
		</div>
      )}
      {this.props.data.wordpressPage.acf.show_content_block && (
		<div className="product-category-pricing-block ty-content-block">
			<div className="pricing__block">
			  <div className="container">
				<div className="row">
				  <div className="col-sm-6">
					<div className="pricing__text" >
					  <h2 dangerouslySetInnerHTML={{ __html: contentBlock.content_block_title }} />
					  <p dangerouslySetInnerHTML={{ __html: contentBlock.content_block_description }} />
        
            {contentBlock.content_block_button_one_link ? <div class="inner__bannerbuttons">
{postID === 14216 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <a class="button primary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link}>{contentBlock.content_block_button_one_text}</a> : null ) 
									  : postID === 14343 ? ( this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link ? <a class="button primary" href={this.props.data.allWordpressAcfOptions.edges[0].node.options.pricing_guide_download_link.link}>{contentBlock.content_block_button_one_text}</a> : null )									  
									  : ( contentBlock.content_block_button_one_link ? <a class="button primary" href={"https://" + contentBlock.content_block_button_one_link}>{contentBlock.content_block_button_one_text}</a> : null )  }
      {contentBlock.content_block_button_two_link ? <a href={"https://" + contentBlock.content_block_button_two_link} class="button blackoutline">{contentBlock.content_block_button_two_text}</a> : null }
                  </div> : null }
					</div>
				  </div>
				  <div className="col-sm-offset-1 col-sm-5">
					<div className="price__image" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
					  {contentBlock.content_block_image ? <Img fluid={contentBlock.content_block_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> : null}
					</div>
				  </div>
				</div>
			  </div>
			</div>
		</div>
      )}
		<div className="contact__wrapper product-category-related-articles pricing-related-articles ty-articles">
        {this.props.data.wordpressPage.acf.show_articles &&
          this.props.data.allWordpressPost.edges.length && (
            <PricingNewsSlider
              contentData={this.props.data.allWordpressPost.edges}
              title={articlesSectionTitle}
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
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
		wordpress_id
			  yoast {
				title
				metadesc
			  }
			  acf {
				main_banner_image {
				  localFile {
					childImageSharp {
					  fluid(maxWidth: 1170) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
				main_banner_image_overlay
				main_banner_heading
				main_banner_sub_heading
        show_message_block
        message_description
        message_button_link 
        message_button_text
        show_content_block
				content_block_title
				content_block_image {
				  localFile {
					childImageSharp {
					  fluid(maxWidth: 650) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
				content_block_description
        content_block_button_one_text
        content_block_button_one_link
        content_block_button_two_text
        content_block_button_two_link
				show_articles
				articles_section_title
			  }
    }

    allWordpressPost{
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