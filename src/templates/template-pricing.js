import React, { Component } from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Banner from '../components/global/banner';

class Page extends Component {
  render() {
    const bannerContent = {
      banner_image: this.props.data.allWordpressPage.edges[0].node.acf.banner_image,
      banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.banner_image_overlay,
      banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.banner_heading,
      banner_description: this.props.data.allWordpressPage.edges[0].node.acf.banner_description,
      banner_buttons: this.props.data.allWordpressPage.edges[0].node.acf.banner_buttons
    }

    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
        <Banner data={bannerContent} />
        <div className="contact__wrapper">
          <div className="container">
            <div className="quote__text">
              <h2>pricing &amp; product guide</h2>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="pricing_formwrap">
                  <div>
                    <p>Our product guide gives illustrations, specifications, portfolio photo examples and a pricing guide to assist with budgeting.</p>
                    <p>Provide your contact details below for immediate access to our Product guide, as well as full access on your PC to all our other specific product flyers and resource downloads</p>
                  </div>
                  <form className="contact__form" action="#">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="firstname">first name</label>
                          <div className="form_input">
                            <input type="text" name="firstname" placeholder="Enter your first name" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="lastname">last name</label>
                          <div className="form_input">
                            <input type="text" name="lastname" placeholder="Enter your last name" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="email">Email</label>
                          <div className="form_input">
                            <input type="text" name="email" placeholder="Enter your email address" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form_group">
                          <label htmlFor="phone">Phone</label>
                          <div className="form_input">
                            <input type="text" name="phone" placeholder="Enter your phone number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form_group">
                      <label htmlFor="company">select the brochure(s) you need</label>
                      <ul className="check__list">
                        <li>
                          <label className="custom_check">
                            <input type="checkbox" />
                            <span className="custom-box"></span>
                            <span className="custom-text">proplank</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom_check">
                            <input type="checkbox" />
                            <span className="custom-box"></span>
                            <span className="custom-text">TRENDplank</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom_check">
                            <input type="checkbox" />
                            <span className="custom-box"></span>
                            <span className="custom-text">SATINPLANK</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom_check">
                            <input type="checkbox" />
                            <span className="custom-box"></span>
                            <span className="custom-text">MARINEplank</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom_check">
                            <input type="checkbox" />
                            <span className="custom-box"></span>
                            <span className="custom-text">METROplank</span>
                          </label>
                        </li>
                        <li>
                          <label className="custom_check">
                            <input type="checkbox" />
                            <span className="custom-box"></span>
                            <span className="custom-text">CLASSICPLANK</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="btn_wrap">
                      <button className="button" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pricing__image">
                  <img />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "template-pricing.php"}}) {
      edges {
        node {
          yoast {
            title
            metadesc
          }
          acf {
            banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            banner_heading
            banner_description
            banner_image_overlay
          }
        }
      }
    }
  }
`