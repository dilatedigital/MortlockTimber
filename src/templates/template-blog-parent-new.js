import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo";
import Layout from "../components/layout"

class Page extends Component {
  constructor(props) {
    super(props)
    const posts = props.pageContext.posts_new
    const categoriesArray = []
    props.data.allWordpressCategory.edges.forEach(item => {
      categoriesArray.push(item.node)
    })    

    this.state = {
      search: "",
      posts: posts,
      filtered: posts,
      searchCount: 0,
      fitlerValueResource: "None",
      fitlerValueProduct: "None",
      fitlerValueTopic: "None",
      searching: false,
      filtering: false,
      categories: categoriesArray,
    }
  }

  searchPosts = (posts, searchedValue) => {
    return posts.filter(post => {
      return (
        post.node.title.toLowerCase().indexOf(searchedValue.toLowerCase()) !==
          -1 ||
        post.node.excerpt.toLowerCase().indexOf(searchedValue.toLowerCase()) !==
          -1 ||
        post.node.content.toLowerCase().indexOf(searchedValue.toLowerCase()) !==
          -1
      )
    })
  }

  filterPosts = (posts, filteredValue) => {
    return posts.filter(post => {
      for (let categoryObj of post.node.categories) {
        if (categoryObj.name === filteredValue) return true
      }
    })
  }

  handleOnChangeSearch = e => {
    const posts = this.state.posts
    let filteredPosts
    let filteredPostsA
    let filteredPostsB
    let searching = true

    //if the search box is empty skip filtereing the page
    if (e.target.value.length === 0) {
      filteredPosts = this.state.filtered
      searching = false
    } else {
      if (this.state.filtering) {
          if (this.state.fitlerValueResource !== "None" && this.state.fitlerValueProduct === "None" && this.state.fitlerValueTopic === "None") {
            filteredPosts = this.searchPosts(
              this.filterPosts(posts, this.state.fitlerValueResource),
              e.target.value
            )
          } else if (this.state.fitlerValueResource === "None" && this.state.fitlerValueProduct !== "None" && this.state.fitlerValueTopic === "None") {
            filteredPosts = this.searchPosts(
              this.filterPosts(posts, this.state.fitlerValueProduct),
              e.target.value
            )
          } else if (this.state.fitlerValueResource === "None" && this.state.fitlerValueProduct === "None" && this.state.fitlerValueTopic !== "None") {
            filteredPosts = this.searchPosts(
              this.filterPosts(posts, this.state.fitlerValueTopic),
              e.target.value
            )
          } else if (this.state.fitlerValueResource !== "None" && this.state.fitlerValueProduct !== "None" && this.state.fitlerValueTopic === "None") {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(posts, this.state.fitlerValueResource), this.state.fitlerValueProduct),
              e.target.value
            )
          } else if (this.state.fitlerValueResource !== "None" && this.state.fitlerValueProduct === "None" && this.state.fitlerValueTopic !== "None") {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(posts, this.state.fitlerValueResource), this.state.fitlerValueTopic),
              e.target.value
            )
          } else if (this.state.fitlerValueResource === "None" && this.state.fitlerValueProduct !== "None" && this.state.fitlerValueTopic !== "None") {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(posts, this.state.fitlerValueProduct), this.state.fitlerValueTopic),
              e.target.value
            )
          } else {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(this.filterPosts(posts, this.state.fitlerValueResource), this.state.fitlerValueProduct), this.state.fitlerValueTopic),
              e.target.value
            )
          }
      } else {
        filteredPosts = this.searchPosts(posts, e.target.value)
      }
    }

    this.setState({
      search: e.target.value,
      searching,
      filtered: filteredPosts,
      searchCount: filteredPosts.length,
    })
  }

  handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }

  handleOnChangeFilterResource = e => {
    const posts = this.state.posts
    let filtering = true
    let filteredPosts
    let filteredPostsA
    let filteredPostsB
    if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = posts
      filtering = false
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogProduct').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogTopic').value)
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogProduct').value)
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogTopic').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogProduct').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogTopic').value)
    } else {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPostsB = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogProduct').value)
      filteredPosts = this.filterPosts(filteredPostsB, document.querySelector('#filterBlogTopic').value)
    }

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      fitlerValueResource: document.querySelector('#filterBlogResource').value,
      searchCount: filteredPosts.length,
    })
  }
  
  handleOnChangeFilterProduct = e => {
    const posts = this.state.posts
    let filtering = true
    let filteredPosts
    let filteredPostsA
    let filteredPostsB
    if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = posts
      filtering = false
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogProduct').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogTopic').value)
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogProduct').value)
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogTopic').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogProduct').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogTopic').value)
    } else {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPostsB = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogProduct').value)
      filteredPosts = this.filterPosts(filteredPostsB, document.querySelector('#filterBlogTopic').value)
    }

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      fitlerValueProduct: document.querySelector('#filterBlogProduct').value,
      searchCount: filteredPosts.length,
    })
  }
  
  handleOnChangeFilterTopic = e => {
    const posts = this.state.posts
    let filtering = true
    let filteredPosts
    let filteredPostsA
    let filteredPostsB
    if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = posts
      filtering = false
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogProduct').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPosts = this.filterPosts(posts, document.querySelector('#filterBlogTopic').value)
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value === "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogProduct').value)
    } else if (document.querySelector('#filterBlogResource').value !== "None" && document.querySelector('#filterBlogProduct').value === "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogTopic').value)
    } else if (document.querySelector('#filterBlogResource').value === "None" && document.querySelector('#filterBlogProduct').value !== "None" && document.querySelector('#filterBlogTopic').value !== "None") {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogProduct').value)
      filteredPosts = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogTopic').value)
    } else {
      filteredPostsA = this.filterPosts(posts, document.querySelector('#filterBlogResource').value)
      filteredPostsB = this.filterPosts(filteredPostsA, document.querySelector('#filterBlogProduct').value)
      filteredPosts = this.filterPosts(filteredPostsB, document.querySelector('#filterBlogTopic').value)
    }

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      fitlerValueTopic: document.querySelector('#filterBlogTopic').value,
      searchCount: filteredPosts.length,
    })
  }
  
  
  handleOnClickFilterResource = e => {
    document.querySelector('#filterBlogResource').value = 'None'
    document.querySelector('#filterBlogResource').text = "FILTER BY RESOURCE TYPE..."
    this.handleOnChangeFilterResource()
  }
  
  handleOnClickFilterProduct = e => {
    document.querySelector('#filterBlogProduct').value = 'None'
    document.querySelector('#filterBlogProduct').text = "FILTER BY PRODUCT..."
    this.handleOnChangeFilterProduct()
  }
  
  handleOnClickFilterTopic = e => {
    document.querySelector('#filterBlogTopic').value = 'None'
    document.querySelector('#filterBlogTopic').text = "FILTER BY TOPIC..."
    this.handleOnChangeFilterTopic()
  }

  render() {
    const data = this.props
    //fitler search
    let displayedPosts =
      this.state.searching || this.state.filtering
        ? this.state.filtered
        : this.props.data.allWordpressPost.edges

    const paginationStyle = {
      display: "none",
    }
    
    const bannerContent = {
      banner_image: this.props.data.wordpressPage.acf.learning_hub_banner_image,
      banner_image_overlay: this.props.data.wordpressPage.acf.learning_hub_banner_image_overlay,
      banner_heading: this.props.data.wordpressPage.acf.learning_hub_banner_heading,
      banner_description: this.props.data.wordpressPage.acf.learning_hub_banner_sub_heading
    }

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
        <div className='inner__banner'>
          <div className="bg__image has-overlay">
            { bannerContent.banner_image ? <BackgroundImage fluid={bannerContent.banner_image.localFile.childImageSharp.fluid} /> : null }
          </div>
          <div className="container">
            <div className="inner__bannerbox">
              <div className="box" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
                <h1 className={ !bannerContent.banner_description ? "text-center" : null } dangerouslySetInnerHTML={{ __html: bannerContent.banner_heading }} />
                { bannerContent.banner_description ? <span className="inner__bannertext" dangerouslySetInnerHTML={{ __html: bannerContent.banner_description }} /> : null }
              </div>
            </div>
          </div>
        </div>
        <div className="blog__wrapper learning-hub-wrapper">
          <div className="container">
            <div className="blog__heading search-page-heading">
              <div className="article__metas new-article-metas">
                <form className="form__search new-search-form-wrap">
                  <div className="search__wrap new-search-box">
                    <input
                      type="text"
                      className="inputSearch"
                      placeholder="SEARCH FOR A TOPIC or ASK A QUESTION..."
                      value={this.state.search}
                      onChange={this.handleOnChangeSearch}
                      onKeyDown={this.handleKeyDown}
                    />
                  </div>
                  <div className="search__wrap filters-wrap">
                    <span className="title">filters</span>
                    <div className="inner-filters-wrap">
                      <select
                        id="filterBlogResource"
                        value={this.state.fitlerValueResource}
                        onChange={this.handleOnChangeFilterResource}
                      >
                        <option value="None">FILTER BY RESOURCE TYPE...</option>
                        <option value="Timber Cladding">TIMBER CLADDING</option>
                        <option value="Jarrah">JARRAH</option>
                      </select>
                      <label for="filterBlogResource"></label>
                      <select
                        id="filterBlogProduct"
                        value={this.state.fitlerValueProduct}
                        onChange={this.handleOnChangeFilterProduct}
                      >
                        <option value="None">FILTER BY PRODUCT...</option>
                        <option value="News">NEWS</option>
                      </select>
                      <label for="filterBlogProduct"></label>
                      <select
                        id="filterBlogTopic"
                        value={this.state.fitlerValueTopic}
                        onChange={this.handleOnChangeFilterTopic}
                      >
                        <option value="None">FILTER BY TOPIC...</option>
                        <option value="Information">INFORMATION</option>
                      </select>
                      <label for="filterBlogTopic"></label>
                    </div>
                  </div>
                  {this.state.fitlerValueResource !== 'None' || this.state.fitlerValueProduct !== 'None' || this.state.fitlerValueTopic !== 'None' ? (
                  <div className="search__wrap selected-filters">
                    <span className="title">Selected filters:</span>
                    {this.state.fitlerValueResource !== 'None' ? (
                    <span className="selectedFilter filterResource" onClick={this.handleOnClickFilterResource}>{this.state.fitlerValueResource}</span> ) : null }
                    {this.state.fitlerValueProduct !== 'None' ? (
                    <span className="selectedFilter filterProduct" onClick={this.handleOnClickFilterProduct}>{this.state.fitlerValueProduct}</span> ) : null }
                    {this.state.fitlerValueTopic !== 'None' ? (
                    <span className="selectedFilter filterTopic" onClick={this.handleOnClickFilterTopic}>{this.state.fitlerValueTopic}</span> ) : null }
                  </div>
                    ) : null }
                </form>
              </div>
            </div>
            <div className="blog__content new-blog-content">
              <div className="row">
                {displayedPosts.map(post => (
                  <div
                    className="col-sm-4"
                    key={
                      this.state.searching || this.state.filtering
                        ? post.node.id
                        : post.node.wordpress_id
                    }
                  >
                    <div className="blog_article">
                      {(!this.state.searching && !this.state.filtering) ?
                        <div className="blog_image">
                          <Link
                            to={`https://www.mortlock.com.au${data.pageContext.actualPath}${post.node.slug}`}
                          >
                            {post.node.featured_media ? (
                              <BackgroundImage
                                fluid={
                                  post.node.featured_media.localFile
                                    .childImageSharp.fluid
                                }
                                alt="Mortlock Timber"
                              />
                            ) : (
                              "image"
                            )}
                          </Link>
                        </div> :
                        <div className="blog_image">
                          <Link to={`https://www.mortlock.com.au${post.node.path}`}>
                            <div className="bg_image" style={{ backgroundImage: `url(${post.node.featured_media.link})` }}></div>
                          </Link>
                        </div>
                      }
                      <div className="blog_meta">
                        {post.node.categories ? (
                          <span className="post_category">
                            {post.node.categories.map((category, index) => (
                              <span key={index}>{category.name} </span>
                            ))}
                          </span>
                        ) : null}
                        <span className="date">{post.node.date}</span>
                      </div>
                      <div className="blog_text">
                        <h3>
                          <Link to={(!this.state.searching && !this.state.filtering) ? `https://www.mortlock.com.au${data.pageContext.actualPath}${post.node.slug}` : `https://www.mortlock.com.au${post.node.path}` } dangerouslySetInnerHTML={{ __html: post.node.title }} />
                        </h3>
                        {(() => {
                          const regex = /(<([^>]+)>)/ig;
                          var removeHTMLtags = post.node.excerpt.replace(regex, '').substring(0, 150) + "...";
                          return (
                            <p dangerouslySetInnerHTML={{ __html: removeHTMLtags }} />
                          )
                        })()}
                        <Link className="link" to={(!this.state.searching && !this.state.filtering) ? `https://www.mortlock.com.au${data.pageContext.actualPath}${post.node.slug}` : `https://www.mortlock.com.au${post.node.path}` }>Read more</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="pagination learning_hub"
              style={
                this.state.searching || this.state.filtering
                  ? paginationStyle
                  : {}
              }
            >
              <span className="title">Pages</span>
              <ul className="pages">
                {Array.from({ length: data.pageContext.numberOfPages_new }).map(
                  (page, index) => (
                    <li
                      key={index}
                      className={
                        index + 1 === data.pageContext.currentPage
                          ? "active"
                          : null
                      }
                    >
                      <Link
                        to={
                          index === 0
                            ? data.pageContext.actualPath
                            : `https://www.mortlock.com.au${data.pageContext.actualPath}${index + 1}/`
                        }
                      >
                        {index + 1}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    wordpressPage(id: { eq: $id }) {
      wordpress_id
      yoast {
        title
        metadesc
      }
       acf {
          learning_hub_banner_heading
          learning_hub_banner_image_overlay
          learning_hub_banner_sub_heading
          learning_hub_banner_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1170) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
	}
    allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          date(formatString: "DD MMMM YYYY")
          title
          excerpt
          slug
          wordpress_id
          categories {
            name
          }
          tags {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    allWordpressCategory {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`
