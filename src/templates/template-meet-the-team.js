import React, { Component } from "react";
import { graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import scrollTo from "gatsby-plugin-smoothscroll"
import Img from 'gatsby-image';

import SEO from "../components/seo";
import Layout from '../components/layout';
import Button from "../components/global/button";

class Page extends Component {
  
 constructor(props) {
    super(props);
    this.openInfo = this.openInfo.bind(this);
   this.closeInfo = this.closeInfo.bind(this);
  }
 
  openInfo = (event) => {
    var elementClicked = event.target.id.split("-");
    document.getElementById("team-member-"+elementClicked[2]).classList.add("open");
  }
  
  closeInfo = (event) => {
    var closeClicked = event.target.id.split("-");
    document.getElementById("team-member-"+closeClicked[1]).classList.remove("open");
  }
    
  render() {
    
    const bannerContent = {
      mt_banner_image: this.props.data.allWordpressPage.edges[0].node.acf.mt_banner_image,
      mt_banner_image_overlay: this.props.data.allWordpressPage.edges[0].node.acf.mt_banner_image_overlay,
      mt_banner_heading: this.props.data.allWordpressPage.edges[0].node.acf.mt_banner_heading,
      mt_banner_sub_heading: this.props.data.allWordpressPage.edges[0].node.acf.mt_banner_sub_heading,
    }
				
    return (
      <Layout>
        <SEO 
          description={this.props.data.allWordpressPage.edges[0].node.yoast.metadesc} 
          title={this.props.data.allWordpressPage.edges[0].node.yoast.title} 
        />
		<div className="meet-team-template">
        <div className='inner__banner'>
          <div className="bg__image has-overlay">
            { bannerContent.mt_banner_image ? <BackgroundImage fluid={bannerContent.mt_banner_image.localFile.childImageSharp.fluid} /> : null }
          </div>
          <div className="container">
            <div className="inner__bannerbox">
              <div className="box" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
                <h1 className={ !bannerContent.mt_banner_sub_heading ? "text-center" : null } dangerouslySetInnerHTML={{ __html: bannerContent.mt_banner_heading }} />
                { bannerContent.mt_banner_heading ? <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: bannerContent.mt_banner_sub_heading }} /> : null }
              </div>
            </div>
          </div>
        </div>
		  </div>
      <div className="container">
      <div className="team-members">
        <div className="tm-heading">
          <h2>{this.props.data.allWordpressPage.edges[0].node.acf.mt_heading}</h2>
        </div>
        <div className="row">
          <div className="tm-container">
            {this.props.data.allWordpressPage.edges[0].node.acf.team_member ? this.props.data.allWordpressPage.edges[0].node.acf.team_member.map((team_member,index) => (
            <div id={'team-member-' + index} className="team-member col-sm-3">
            <div className="each-profile">
              <div className="imagebox">
                { team_member.member_photo && <Img fluid={team_member.member_photo.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> }
              </div>
              <div className="profile-content">
                <div className="name">{team_member.member_name}</div>
                <div className="jobtitle">{team_member.member_designation}</div>
                { team_member.member_introduction && <div className="jobdesc" dangerouslySetInnerHTML={{ __html: team_member.member_introduction }} /> }
                <div id={'read-more-' + index } className="read-more" onClick={this.openInfo}>Read more</div>
                <div id={'close-' + index } className="closebtn" onClick={this.closeInfo}>x</div>
               </div>
              </div>
            </div>
            )) : null }
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
    allWordpressPage(filter: {template: {eq: "template-meet-the-team.php"}}) {
      edges {
        node {
          yoast {
            title
            metadesc
          }
          acf {
            mt_banner_heading
            mt_banner_image_overlay
            mt_banner_sub_heading
            mt_banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            mt_heading
            team_member {
              member_name
              member_photo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1170) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
             }
              member_designation
              member_introduction
            }
          }
        }
      }
    }
  }
`