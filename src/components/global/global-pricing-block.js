import React from 'react';
import Img from 'gatsby-image';

import ProductPricingForm from "../forms/product-pricing-form-4360";
import ProductPricingFormClassicplank from "../forms/product-pricing-form-classicplank-8490";
import ProductPricingFormMarineplank from "../forms/product-pricing-form-marineplank-8505";
import ProductPricingFormMetroplank from "../forms/product-pricing-form-metroplank-8506";
import ProductPricingFormProplank from "../forms/product-pricing-form-proplank-8507";
import ProductPricingFormShousugiban from "../forms/product-pricing-form-shousugiban-8508";
import ProductPricingFormTrendplank from "../forms/product-pricing-form-trendplank-8509";

const PricingBlock = ({ ...props }) =>  {
  const content = props.data;
  const id = props.id;
  	var faqSchema;
	var productSchema;
	if (props.pageID == 4205) {
	  faqSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{  "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What is charred timber?", "acceptedAnswer": { "@type": "Answer", "text": "Charred wood (also known as Yaki Sugi and Shou Sugi Ban) is a centuries-old Japanese method of wood preservation. The literal translation is ‘burnt timber board’, the product is used for cladding, screening, and timber ceilings." } },{ "@type": "Question", "name": "What is charred wood and what does charring wood do?", "acceptedAnswer": { "@type": "Answer", "text": "Charring wood means you have a protective carbon layer of charcoal on the surface timber. This protective burnt wood layer increases the lifespan of the timber. Charred timbers can last up to 5-10 years without maintenance however it is recommended re-coating the timber more often to keep it hydrated and water resistant." } },{ "@type": "Question", "name": "Can it be used internally?", "acceptedAnswer": { "@type": "Answer", "text": "Yes this product can be used internally. Mortlock Timber use a different timber coating on the surface which binds the char layer together and eliminates the rubbing off for interior projects." } },{ "@type": "Question", "name": "Does the charred surface rub off Shou Sugi Ban timber cladding?", "acceptedAnswer": { "@type": "Answer", "text": "On exterior Shou Sugi Ban the charcoal layer will rub off on your hands or clothes when you touch it, this is the loose particles on the surface of the timber. As the Shou Sugi Ban is exposed weather the loose particles that causes this issue will wash off the timber from the wind and rain over a few months and the rubbing off will stop. If your looking for Shou Sugi Ban timber cladding for interiors or areas not exposed to weather, Mortlock Timber use a different timber coating on the surface which binds the char layer together and eliminates the rubbing off" } },{ "@type": "Question", "name": "Do I have To maintain Shou Sugi Ban timber cladding?", "acceptedAnswer": { "@type": "Answer", "text": "Any timber exposed to the weather will need maintenance at some point. The good news is that Shou Sugi Ban timber cladding or charred timber does last longer without maintenance than non-charred timber. Different timbers offer different maintenance levels" } },{ "@type": "Question", "name": "How much does charred cladding cost? Is it expensive?", "acceptedAnswer": { "@type": "Answer", "text": "As a guide charred cladding will cost you around $35-$75 per m2 more than non-charred timber cladding. This is indicative and it does depend on the options you select. For full pricing download our Shou Sugi Ban pricing guide." } },{ "@type": "Question", "name": "Does Mortlock Timber provide an installation service?", "acceptedAnswer": { "@type": "Answer", "text": "No Mortlock Timber does not provide an installation service. As the manufacturer of timber products Mortlock Timber focuses on producing high quality products and leaves the installation to expert installers. Mortlock Timber works with the installer, provides installation advice and details to ensure your project runs smoothly. Shou Sugi Ban Timber cladding can be installed by a qualified carpenter." } },{ "@type": "Question", "name": "Does Shou Sugi Ban / charring the timber increase the fire rating of the timber?", "acceptedAnswer": { "@type": "Answer", "text": "No. Mortlock has done lab testing on this and the results showed that charring timber does not change the fire properties of the timber." } }] }'}}></script>;
	} else {
	  faqSchema= '';
	} 

	if (props.pageID == 561) {
	  productSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org/","@type":"Product","name":"Marineplank","image":"https://www.mortlock.com.au/static/57c99eb0d8ca2623dbaa16483ccb9e62/ca990/S3-ProductBenefits-Marineplank.webp","description":"Marineplank is an excellent choice for both commercial and residential applications, and really shines when used in spaces that receive high traffic or are exposed to harsh weather conditions.","sku":"001","mpn":"123","brand":{"@type":"Brand","name":"Mortlock Timber"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Jerry Hitch"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"10"},"offers":{"@type":"Offer","url":"https://www.mortlock.com.au/timber-decking/marine-timber-decking/","priceCurrency":"AUD","price":"000","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"}}'}}></script>;
	} else if (props.pageID == 573) {
	  productSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org/","@type":"Product","name":"Classicplank","image":"https://site.mortlock.com.au/wp-content/uploads/2020/08/S2-Large-Classicplank.jpg","description":"With its classic and timeless profile, Classicplank brings quality and elegance any project with a smooth finish and a flexible size profile.","sku":"00","mpn":"456","brand":{"@type":"Brand","name":"Mortlock Timber"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Jerry Hitch"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"10"},"offers":{"@type":"Offer","url":"https://www.mortlock.com.au/timber-decking/classicplank-timber-decking/","priceCurrency":"AUD","price":"000","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"}}'}}></script>;
	} else 	if (props.pageID == 567) {
	  productSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org/","@type":"Product","name":"Metroplank","image":"https://site.mortlock.com.au/wp-content/uploads/2020/08/H2-Large-metroplank.jpg","description":"A luxurious timber decking for both commercial and residential projects, Metroplank presents a cost-effective, time-efficient solution to decking that makes an impression.","sku":"002","mpn":"789","brand":{"@type":"Brand","name":"Mortlock Timber"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Jerry Hitch"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"10"},"offers":{"@type":"Offer","url":"https://www.mortlock.com.au/timber-decking/metro-plank/","priceCurrency":"AUD","price":"000","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"}}'}}></script>;
	} else	if (props.pageID == 4205) {
	  productSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org/","@type":"Product","name":"Shou Sugi Ban","image":"https://site.mortlock.com.au/wp-content/uploads/2020/08/ShouSugi-S1-MyBuild_Lachlan_72-1024x683-1.jpg","description":"Charred with fire Timber Cladding. Striking and sleek with its carbon black finish and textural beauty.","sku":"003","mpn":"147","brand":{"@type":"Brand","name":"Mortlock Timber"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Jerry Hitch"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"10"},"offers":{"@type":"Offer","url":"https://www.mortlock.com.au/timber-wall/shou-sugi-ban/","priceCurrency":"AUD","price":"000","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"}}'}}></script>;
	} else	if (props.pageID == 4209) {
	  productSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org/","@type":"Product","name":"Trendplank","image":"https://site.mortlock.com.au/wp-content/uploads/2020/08/trendplank-interior-1.jpg","description":"Concealed Fixed Timber Cladding expertly designed to allow for natural timber movement.","sku":"004","mpn":"258","brand":{"@type":"Brand","name":"Mortlock Timber"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Jerry Hitch"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"10"},"offers":{"@type":"Offer","url":"https://www.mortlock.com.au/timber-wall/trend-plank/","priceCurrency":"AUD","price":"000","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"}}'}}></script>;
	} else	if (props.pageID == 339) {
	  productSchema = <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org/","@type":"Product","name":"Proplank","image":"https://site.mortlock.com.au/wp-content/uploads/2020/07/proplank-image02.jpg","description":"Click-In Timber Battens for Walls & Ceilings to transform any straight or curved surface, indoor or outdoor","sku":"005","mpn":"369","brand":{"@type":"Brand","name":"Mortlock Timber"},"review":{"@type":"Review","reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Jerry Hitch"}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5","reviewCount":"10"},"offers":{"@type":"Offer","url":"https://www.mortlock.com.au/timber-ceilings/proplank-timber-battens/","priceCurrency":"AUD","price":"000","priceValidUntil":"2020-11-20","itemCondition":"https://schema.org/UsedCondition","availability":"https://schema.org/InStock"}}'}}></script>;
	} else {
	  productSchema= '';
	} 	
  return (
    <div className="pricing__block" id={ id ? id : null }>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="pricing__text" >
              <h2 dangerouslySetInnerHTML={{ __html: content.pricing_title }} />
              <p dangerouslySetInnerHTML={{ __html: content.pricing_description }} />
              {props.pageID == 573 ? ( <ProductPricingFormClassicplank gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> ) 
              : props.pageID == 561 ? ( <ProductPricingFormMarineplank gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )
              : props.pageID == 567 ? ( <ProductPricingFormMetroplank gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )
              : props.pageID == 339 ? ( <ProductPricingFormProplank gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )
              : props.pageID == 4205 ? ( <ProductPricingFormShousugiban gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )
              : props.pageID == 4209 ? ( <ProductPricingFormTrendplank gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )
              : ( <ProductPricingForm gtag={props.gtag} finishes={props.finishes} battensize={props.battensize} data={content} pageID={props.pageID} location={props.location} /> )  }
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="price__image" data-sal="slide-up" data-sal-easing="ease" data-sal-delay="5">
              {content.pricing_image ? <Img fluid={content.pricing_image.localFile.childImageSharp.fluid} alt="Mortlock Timber" /> : null}
            </div>
          </div>
		  {faqSchema}
		  {productSchema}
        </div>
      </div>
    </div>
  )
}

export default PricingBlock;
