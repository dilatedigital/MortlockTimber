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
      filterValueResource: ["None"],
      filterValueProduct: ["None"],
      filterValueTopic: ["None"],
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
        for (var i = 0, l = filteredValue.length; i < l; i++) {
          if (categoryObj.name === filteredValue[i]) return true
        }
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
          if (this.state.filterValueResource.find(v => v === 'None') === undefined && this.state.filterValueProduct.find(v => v === 'None') !== undefined && this.state.filterValueTopic.find(v => v === 'None') !== undefined) {
            filteredPosts = this.searchPosts(
              this.filterPosts(posts, this.state.filterValueResource),
              e.target.value
            )
          } else if (this.state.filterValueResource.find(v => v === 'None') !== undefined && this.state.filterValueProduct.find(v => v === 'None') === undefined && this.state.filterValueTopic.find(v => v === 'None') !== undefined) {
            filteredPosts = this.searchPosts(
              this.filterPosts(posts, this.state.filterValueProduct),
              e.target.value
            )
          } else if (this.state.filterValueResource.find(v => v === 'None') !== undefined && this.state.filterValueProduct.find(v => v === 'None') !== undefined && this.state.filterValueTopic.find(v => v === 'None') === undefined) {
            filteredPosts = this.searchPosts(
              this.filterPosts(posts, this.state.filterValueTopic),
              e.target.value
            )
          } else if (this.state.filterValueResource.find(v => v === 'None') === undefined && this.state.filterValueProduct.find(v => v === 'None') === undefined && this.state.filterValueTopic.find(v => v === 'None') !== undefined) {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(posts, this.state.filterValueResource), this.state.filterValueProduct),
              e.target.value
            )
          } else if (this.state.filterValueResource.find(v => v === 'None') === undefined && this.state.filterValueProduct.find(v => v === 'None') !== undefined && this.state.filterValueTopic.find(v => v === 'None') === undefined) {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(posts, this.state.filterValueResource), this.state.filterValueTopic),
              e.target.value
            )
          } else if (this.state.filterValueResource.find(v => v === 'None') !== undefined && this.state.filterValueProduct.find(v => v === 'None') === undefined && this.state.filterValueTopic.find(v => v === 'None') === undefined) {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(posts, this.state.filterValueProduct), this.state.filterValueTopic),
              e.target.value
            )
          } else {
            filteredPosts = this.searchPosts(
              this.filterPosts(this.filterPosts(this.filterPosts(posts, this.state.filterValueResource), this.state.filterValueProduct), this.state.filterValueTopic),
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
  
  runFilterConditions = (resourceValues, productValues, topicValues) => {
    const posts = this.state.posts
    let filtering = true
    let filteredPosts
    let filteredPostsA
    let filteredPostsB
    if (resourceValues.find(v => v === 'None') !== undefined && productValues.find(v => v === 'None') !== undefined && topicValues.find(v => v === 'None') !== undefined) {
      filteredPosts = posts
      filtering = false
    } else if (resourceValues.find(v => v === 'None') === undefined && productValues.find(v => v === 'None') !== undefined && topicValues.find(v => v === 'None') !== undefined) {
      filteredPosts = this.filterPosts(posts, resourceValues)
    } else if (resourceValues.find(v => v === 'None') !== undefined && productValues.find(v => v === 'None') === undefined && topicValues.find(v => v === 'None') !== undefined) {
      filteredPosts = this.filterPosts(posts, productValues)
    } else if (resourceValues.find(v => v === 'None') !== undefined && productValues.find(v => v === 'None') !== undefined && topicValues.find(v => v === 'None') === undefined) {
      filteredPosts = this.filterPosts(posts, topicValues)
    } else if (resourceValues.find(v => v === 'None') === undefined && productValues.find(v => v === 'None') === undefined && topicValues.find(v => v === 'None') !== undefined) {
      filteredPostsA = this.filterPosts(posts, resourceValues)
      filteredPosts = this.filterPosts(filteredPostsA, productValues)
    } else if (resourceValues.find(v => v === 'None') === undefined && productValues.find(v => v === 'None') !== undefined && topicValues.find(v => v === 'None') === undefined) {
      filteredPostsA = this.filterPosts(posts, resourceValues)
      filteredPosts = this.filterPosts(filteredPostsA, topicValues)
    } else if (resourceValues.find(v => v === 'None') !== undefined && productValues.find(v => v === 'None') === undefined && topicValues.find(v => v === 'None') === undefined) {
      filteredPostsA = this.filterPosts(posts, productValues)
      filteredPosts = this.filterPosts(filteredPostsA, topicValues)
    } else {
      filteredPostsA = this.filterPosts(posts, resourceValues)
      filteredPostsB = this.filterPosts(filteredPostsA, productValues)
      filteredPosts = this.filterPosts(filteredPostsB, topicValues)
    }
    
    let filterOptions = [filteredPosts, filtering]
    return filterOptions
  }

  handleOnChangeFilterResource = e => {
    var topicValues = this.state.filterValueTopic;
    var resourceValues = this.state.filterValueResource;
    var productValues = this.state.filterValueProduct;
      
    if(e.target.checked){
      if(resourceValues.find(v => v === e.target.value) === undefined){

        if(resourceValues.length > 0){
          resourceValues.push(e.target.value);
        }

        if(resourceValues.find(v => v === 'None') !== undefined){

            for( var i = 0; i < resourceValues.length; i++){ 

                if ( resourceValues[i] === 'None') { 

                    resourceValues.splice(i, 1); 
                }

            }
        }

        if(resourceValues.length < 1){
          resourceValues.push('None');
        }
      }
    }
    
    if(!e.target.checked){
      var toRemoveValue = e.target.value;

      if(resourceValues.find(v => v === toRemoveValue) !== undefined){

          for( var i = 0; i < resourceValues.length; i++){ 

              if ( resourceValues[i] === toRemoveValue ) { 

                  resourceValues.splice(i, 1); 
              }

          }
      }
      
      if(resourceValues.length < 1){
        resourceValues.push('None');
      }
    }
      
    let filteredPosts
    let filtering
    let filterOptions
    filterOptions = this.runFilterConditions(resourceValues, productValues, topicValues)
    filteredPosts = filterOptions[0]
    filtering = filterOptions[1]

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      filterValueResource: resourceValues,
      searchCount: filteredPosts.length,
    })
    
  }
  
  handleOnChangeFilterProduct = e => {
    var topicValues = this.state.filterValueTopic;
    var resourceValues = this.state.filterValueResource;
    var productValues = this.state.filterValueProduct;
    
    if(e.target.checked){
      if(productValues.find(v => v === e.target.value) === undefined){

        if(productValues.length > 0){
          productValues.push(e.target.value);
        }

        if(productValues.find(v => v === 'None') !== undefined){

            for( var i = 0; i < productValues.length; i++){ 

                if ( productValues[i] === 'None') { 

                    productValues.splice(i, 1); 
                }

            }
        }

        if(productValues.length < 1){
          productValues.push('None');
        }
      }
    }
     
    if(!e.target.checked){
      var toRemoveValue = e.target.value;

      if(productValues.find(v => v === toRemoveValue) !== undefined){

          for( var i = 0; i < productValues.length; i++){ 

              if ( productValues[i] === toRemoveValue ) { 

                  productValues.splice(i, 1); 
              }

          }
      }

      if(productValues.length < 1){
        productValues.push('None');
      }
    }
    
    let filteredPosts
    let filtering
    let filterOptions
    filterOptions = this.runFilterConditions(resourceValues, productValues, topicValues)
    filteredPosts = filterOptions[0]
    filtering = filterOptions[1]
    
    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      filterValueProduct: productValues,
      searchCount: filteredPosts.length,
    })
    
  }
  
  handleOnChangeFilterTopic = e => {
    var topicValues = this.state.filterValueTopic;
    var resourceValues = this.state.filterValueResource;
    var productValues = this.state.filterValueProduct;
      
    if(e.target.checked){
      if(topicValues.find(v => v === e.target.value) === undefined){

        if(topicValues.length > 0){
          topicValues.push(e.target.value);
        }

        if(topicValues.find(v => v === 'None') !== undefined){

            for( var i = 0; i < topicValues.length; i++){ 

                if ( topicValues[i] === 'None') { 

                    topicValues.splice(i, 1); 
                }

            }
        }

        if(topicValues.length < 1){
          topicValues.push('None');
        }
      }
    }
      
    if(!e.target.checked){
      var toRemoveValue = e.target.value;

      if(topicValues.find(v => v === toRemoveValue) !== undefined){

          for( var i = 0; i < topicValues.length; i++){ 

              if ( topicValues[i] === toRemoveValue ) { 

                  topicValues.splice(i, 1); 
              }

          }
      }
      if(topicValues.length < 1){
        topicValues.push('None');
      }
    }
    
    let filteredPosts
    let filtering
    let filterOptions
    filterOptions = this.runFilterConditions(resourceValues, productValues, topicValues)
    filteredPosts = filterOptions[0]
    filtering = filterOptions[1]

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      filterValueTopic: topicValues,
      searchCount: filteredPosts.length,
    })

  }
  
  
  handleOnClickFilterResource = e => {
    var topicValues = this.state.filterValueTopic;
    var resourceValues = this.state.filterValueResource;
    var productValues = this.state.filterValueProduct;
    var toRemoveValue = e.target.innerText;
    var words = toRemoveValue.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");
    
    toRemoveValue = words.toString().replace(/,/g, ' ');
    
    if(resourceValues.find(v => v === toRemoveValue) !== undefined){
      
        for( var i = 0; i < resourceValues.length; i++){ 

            if ( resourceValues[i] === toRemoveValue ) { 

                resourceValues.splice(i, 1); 
            }

        }
    }
    
    if(resourceValues.length < 1){
      resourceValues.push('None');
    }
    
    let filteredPosts
    let filtering
    let filterOptions
    filterOptions = this.runFilterConditions(resourceValues, productValues, topicValues)
    filteredPosts = filterOptions[0]
    filtering = filterOptions[1]

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      filterValueResource: resourceValues,
      searchCount: filteredPosts.length,
    })
    
    document.querySelector('input[value="'+ toRemoveValue +'"]').checked = false
  }
  
  handleOnClickFilterProduct = e => {
    var topicValues = this.state.filterValueTopic;
    var resourceValues = this.state.filterValueResource;
    var productValues = this.state.filterValueProduct;
    var toRemoveValue = e.target.innerText;
    var words = toRemoveValue.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");
    
    toRemoveValue = words.toString().replace(/,/g, ' ');
    
    if(productValues.find(v => v === toRemoveValue) !== undefined){
      
        for( var i = 0; i < productValues.length; i++){ 

            if ( productValues[i] === toRemoveValue ) { 

                productValues.splice(i, 1); 
            }

        }
    }
    
    if(productValues.length < 1){
      productValues.push('None');
    }
    
    let filteredPosts
    let filtering
    let filterOptions
    filterOptions = this.runFilterConditions(resourceValues, productValues, topicValues)
    filteredPosts = filterOptions[0]
    filtering = filterOptions[1]
    
    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      filterValueProduct: productValues,
      searchCount: filteredPosts.length,
    })
    
    document.querySelector('input[value="'+ toRemoveValue +'"]').checked = false
  }
  
  handleOnClickFilterTopic = e => {
    var topicValues = this.state.filterValueTopic;
    var resourceValues = this.state.filterValueResource;
    var productValues = this.state.filterValueProduct;
    var toRemoveValue = e.target.innerText;
    var words = toRemoveValue.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(" ");
    
    toRemoveValue = words.toString().replace(/,/g, ' ');;
    
    if(topicValues.find(v => v === toRemoveValue) !== undefined){
      
        for( var i = 0; i < topicValues.length; i++){ 

            if ( topicValues[i] === toRemoveValue ) { 

                topicValues.splice(i, 1); 
            }

        }
    }
    
    if(topicValues.length < 1){
      topicValues.push('None');
    }
    
    let filteredPosts
    let filtering
    let filterOptions
    filterOptions = this.runFilterConditions(resourceValues, productValues, topicValues)
    filteredPosts = filterOptions[0]
    filtering = filterOptions[1]

    if (this.state.searching) {
      filteredPosts = this.searchPosts(filteredPosts, this.state.search)
    }

    this.setState({
      filtered: filteredPosts,
      filtering,
      filterValueTopic: topicValues,
      searchCount: filteredPosts.length,
    })
    
    document.querySelector('input[value="'+ toRemoveValue +'"]').checked = false
  }

  render() {
    const data = this.props
    //filter search
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
        <div className='inner__banner learning-hub-banner'>
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
                      <div id="product-dropdown" class="dropdown-wrap">
                        <span class="main-label">BY PRODUCT...</span>
                        <div class="dropdown-custom">
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-01" value="Proplank Timber Battens" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-01">PROPLANK TIMBER BATTENS</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-02" value="Trendplank" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-02">TRENDPLANK</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-03" value="Shou Sugi Ban" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-03">SHOU SUGI BAN</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-04" value="Vacoa" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-04">VACOA</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-05" value="Classicplank" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-05">CLASSICPLANK</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-06" value="Metroplank" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-06">METROPLANK</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-07" value="Marineplank" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-07">MARINEPLANK</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-08" value="Timber Ceiling Tiles" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-08">TIMBER CEILING TILES</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-09" value="Timber Walls" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-09">TIMBER WALLS</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-10" value="Timber Ceilings" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-10">TIMBER CEILINGS</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-11" value="Timber Cladding" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-11">TIMBER CLADDING</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-12" value="Timber Decking" onChange={this.handleOnChangeFilterProduct} />
                            <label for="option-12">TIMBER DECKING</label>
                          </div>
                        </div>
                      </div>
                      <div id="topic-dropdown" class="dropdown-wrap">
                        <span class="main-label">BY TOPIC...</span>
                        <div class="dropdown-custom">
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-001" value="Pricing" onChange={this.handleOnChangeFilterTopic} />
                            <label for="option-001">PRICING</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-002" value="Case Study" onChange={this.handleOnChangeFilterTopic} />
                            <label for="option-002">CASE STUDY</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-003" value="Projects" onChange={this.handleOnChangeFilterTopic} />
                            <label for="option-003">PROJECTS</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-004" value="Information" onChange={this.handleOnChangeFilterTopic} />
                            <label for="option-004">INFORMATION</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-005" value="Onsite With Mortlock" onChange={this.handleOnChangeFilterTopic} />
                            <label for="option-005">ONSITE WITH MORTLOCK</label>
                          </div>
                        </div>
                      </div>
                      <div id="resource-dropdown" class="dropdown-wrap">
                        <span class="main-label">BY RESOURCE TYPE...</span>
                        <div class="dropdown-custom">
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-0001" value="Article" onChange={this.handleOnChangeFilterResource} />
                            <label for="option-0001">ARTICLE</label>
                          </div>
                          <div class="checkbox-wrap">
                            <input type="checkbox" id="option-0002" value="Video" onChange={this.handleOnChangeFilterResource} />
                            <label for="option-0002">VIDEO</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.state.filterValueResource.find(v => v === 'None') === undefined || this.state.filterValueProduct.find(v => v === 'None') === undefined || this.state.filterValueTopic.find(v => v === 'None') === undefined ? (
                  <div className="search__wrap selected-filters">
                    <span className="title">Selected filters:</span>
      {this.state.filterValueProduct.map(x => x !== 'None' ? (<span className="selectedFilter filterProduct" onClick={this.handleOnClickFilterProduct}>{x}</span>) : null)}
      {this.state.filterValueTopic.map(x => x !== 'None' ? (<span className="selectedFilter filterTopic" onClick={this.handleOnClickFilterTopic}>{x}</span>) : null)}
      {this.state.filterValueResource.map(x => x !== 'None' ? (<span className="selectedFilter filterResource" onClick={this.handleOnClickFilterResource}>{x}</span>) : null)}
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
                      <div className="blog_text">
                        <h3>
                          {post.node.title.length > 80 ? (<Link className="lh-desktop-link" to={(!this.state.searching && !this.state.filtering) ? `https://www.mortlock.com.au${data.pageContext.actualPath}${post.node.slug}` : `https://www.mortlock.com.au${post.node.path}` } dangerouslySetInnerHTML={{ __html: post.node.title.substring(0, 80) + "..." }} />) : (<Link className="lh-desktop-link" to={(!this.state.searching && !this.state.filtering) ? `https://www.mortlock.com.au${data.pageContext.actualPath}${post.node.slug}` : `https://www.mortlock.com.au${post.node.path}` } dangerouslySetInnerHTML={{ __html: post.node.title }} />)}
                          <Link className="lh-mobile-link" to={(!this.state.searching && !this.state.filtering) ? `https://www.mortlock.com.au${data.pageContext.actualPath}${post.node.slug}` : `https://www.mortlock.com.au${post.node.path}` } dangerouslySetInnerHTML={{ __html: post.node.title }} />
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
