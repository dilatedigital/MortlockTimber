import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo";
import Layout from "../components/layout"

class Page extends Component {
  constructor(props) {
    super(props)
    const posts = props.pageContext.posts
    const categoriesArray = []
    props.data.allWordpressCategory.edges.forEach(item => {
      categoriesArray.push(item.node)
    })

    this.state = {
      search: "",
      posts: posts,
      filtered: posts,
      searchCount: 0,
      fitlerValue: "all articles",
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
    let searching = true

    //if the search box is empty skip filtereing the page
    if (e.target.value.length === 0) {
      filteredPosts = this.state.filtered
      searching = false
    } else {
      if (this.state.filtering) {
        filteredPosts = this.searchPosts(
          this.filterPosts(posts, this.state.fitlerValue),
          e.target.value
        )
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

  handleOnChangeFilter = e => {
    const posts = this.state.posts
    let filtering = true
    let filteredPosts
    if (e.target.value === "all articles") {
      filteredPosts = posts
      filtering = false
    } else {
      filteredPosts = this.filterPosts(posts, e.target.value)
    }

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      fitlerValue: e.target.value,
      searchCount: filteredPosts.length,
    })
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
        <div className="blog__wrapper">
          <div className="container">
            <div className="blog__heading">
              <h1>News</h1>
              <div className="article__metas">
                <form className="form__search">
                  <div className="search__wrap">
                    <span className="title">search</span>
                    <input
                      type="text"
                      className="inputSearch"
                      placeholder="search keywords here..."
                      value={this.state.search}
                      onChange={this.handleOnChangeSearch}
                      onKeyDown={this.handleKeyDown}
                    />
                  </div>
                  <div className="search__wrap">
                    <span className="title">filter</span>
                    <select
                      id="filterBlog"
                      value={this.state.fitlerValue}
                      onChange={this.handleOnChangeFilter}
                    >
                      <option value="all articles">all articles</option>
                      {this.state.categories.map(category => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="blog__content">
              {this.state.searching ? (
                <p>
                  We found {this.state.searchCount}{" "}
                  {this.state.searchCount === 1 ? "post" : " posts "} for "
                  {this.state.search}"
                  {this.state.fitlerValue !== "all articles"
                    ? ` in "${this.state.fitlerValue}"`
                    : ""}
                </p>
              ) : (
                ""
              )}
              <div className="row">
                {displayedPosts.map(post => (
                  <div
                    className="col-sm-6"
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
              className="pagination"
              style={
                this.state.searching || this.state.filtering
                  ? paginationStyle
                  : {}
              }
            >
              <span className="title">Pages</span>
              <ul className="pages">
                {Array.from({ length: data.pageContext.numberOfPages }).map(
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
                            : `https://www.mortlock.com.au${data.pageContext.actualPath}${index + 1}`
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
