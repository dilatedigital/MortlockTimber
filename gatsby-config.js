require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Architectural Timber | Hardwood Suppliers | Mortlock Timber`,
    description: `Mortlock Timber is Australia's leading designer, manufacturer and hardwood supplier of architectural timber products, with over 80 years of combined experience.`,
    author: `@bipubajgai`,
    siteUrl: `https://gatsby.dilatedigital.com.au`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MR25ZVL",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" }
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src"
          // "@components": "src/components",
        },
        extensions: [
          "js",
        ],
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-background-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        redirect: [
          // 'RewriteRule ^not-existing-url/?$ /jarrah-timber-decking/ [R=301,L,NE]',
          'RedirectMatch 301 /product/proplank/?$ https://mortlock.com.au/timber-decking/proplank-timber-battens/',
          'RedirectMatch 301 /products/timber-cladding/?$ https://mortlock.com.au/timber-cladding/',
          'RedirectMatch 301 /builders/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /portfolio/timber-decking/?$ https://www.mortlock.com.au/timber-decking/',
          'RedirectMatch 301 /product/trendplank/?$ https://www.mortlock.com.au/timber-cladding/trend-plank/',
          'RedirectMatch 301 /portfolio/timber-cladding/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /clarendon/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /resources/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber-leaching/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /resources/sustainability/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber-movement/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /presentations-samples/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /eagle-bay/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /terms-conditions/?$ https://www.mortlock.com.au/terms-and-conditions/',
          'RedirectMatch 301 /profile/profile/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /resources/architects/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /video-conference/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /resources/maintenance/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /augusta-holiday-home/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /broadwater-holiday-residence/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /sitemap/?$ https://www.mortlock.com.au/sitemap.xml',
          'RedirectMatch 301 /trendplank-timber-cladding/?$ https://www.mortlock.com.au/timber-cladding/trend-plank/',
          'RedirectMatch 301 /perth-garden-festival/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /selection-projects-2016/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /aria-luxury-apartments/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /new-tautliners-curtains/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /profile/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /resources/timber-species/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /trendplank_cladding_details/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /staging/contact-us/?$ https://mortlock.com.au/contact-us/',
          'RedirectMatch 301 /equinox-perth-april-2016/?$ https://mortlock.com.au/portfolio/',
          'RedirectMatch 301 /aerial-view-elizabeth-quay/?$ https://mortlock.com.au/portfolio/',
          'RedirectMatch 301 /pacific-teak-vitex-cofassus/?$ https://mortlock.com.au/portfolio/',
          'RedirectMatch 301 /news-botanical-apartments-subiaco/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /kielder-observatory-northumberland-uk/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /thank-you-request-quote/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /thank-you-product-guide/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /media_category/swatches/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /project_type/commercial/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/ironbark/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/bunbury/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /project_type/residential/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/ironbark/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /product/satinplank/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/jarrah/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/trendplank/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/trendplank/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/perth/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/blackbutt/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /product/metroplank/?$ https://mortlock.com.au/timber-decking/metro-plank/',
          'RedirectMatch 301 /resources/news/?$ https://mortlock.com.au/news/',
          'RedirectMatch 301 /product/marineplank/?$ https://mortlock.com.au/timber-decking/marine-timber-decking/',
          'RedirectMatch 301 /timber_species_type/merbau/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /request-quote/?$ https://mortlock.com.au/request-a-quote/',
          'RedirectMatch 301 /tag/blackbutt/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/spotted-gum/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/pacific-teak/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/john-smith/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/burnt-ash/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/victorian-ash/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/spotted-gum/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/burnt-ash/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/jesse-searls/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/burnt-ash/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /3-timber-facades-becoming-increasingly-popular/?$ https://mortlock.com.au/news/',
          'RedirectMatch 301 /building-with-timber-in-bushfire-areas/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /do-it-once-do-it-right/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /wood-is-good-for-human-health/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /blackened-timber-retreat-by-studio-aula/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /maddocks-a-workspace-designed-for-wellness/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /on-site-with-mortlock-hardys-carpentry/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /on-site-with-mortlock-urbane-projects/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/paul-rennae/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/timber-species/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products/hardwood/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /the-benefits-of-using-wood/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /fijian-mahogany-timber-decking-cladding/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /difference-between-fsc-and-pefc/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /resources/maintenance/external-timber-maintenance/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /profile/vision-mission-and-values/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /mortlock-timber-legal-email-disclaimer/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /design-for-durability-low-maintenence/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /resources/maintenance/internal-timber-products/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /trendplank_timber-cladding_revit/?$ https://mortlock.com.au/timber-cladding/trend-plank/',
          'RedirectMatch 301 /tag/proplank/?$ https://mortlock.com.au/timber-decking/proplank-timber-battens/',
          'RedirectMatch 301 /product/classicplank/?$ https://mortlock.com.au/timber-decking/classicplank-timber-decking/',
          'RedirectMatch 301 /timber_species_type/jarrah/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/blackbutt/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2014/05/Species-Data-Sheet-Burnt-Ash.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /5-reasons-to-use-mortlock-timber/?$ https://www.mortlock.com.au/contact-us/',
          'RedirectMatch 301 /contact-form-request-consultation/?$ https://www.mortlock.com.au/contact-us/',
          'RedirectMatch 301 /contact/?$ https://www.mortlock.com.au/contact-us/',
          'RedirectMatch 301 /resources/news/visit-south-west-region-wa/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /products/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /contact-form-request-samples/?$ https://www.mortlock.com.au/contact-us/',
          'RedirectMatch 301 /what-you-need-to-know-shou-sugi-ban/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /spotted-gum-corymbia-maculata/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /weathered-timber-low-maintenance-solution/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /tag/timber/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/battens/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/mortlock/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /tag/mortlock-timber/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/rosewood/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/silvertop-ash/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/american-white-oak/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/victorian-ash/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/tasmanian-oak/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timberspecies/pacific-teak/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=73&amp;file_type=attention-architects--designers/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=1293&amp;file_type=view-proplank-product-guide/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files-trendplank/?post_id=90&amp;file_type=view-our-new-trendplank-guide-here/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /product/hardwood-timber/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products/ceiling-lining/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /product/trendplan/?$ https://mortlock.com.au/timber-cladding/trend-plank/',
          'RedirectMatch 301 /product/shou-sugi-ban/?$ https://mortlock.com.au/timber-cladding/shou-sugi-ban/',
          'RedirectMatch 301 /products/timber-cladding/?$ https://www.mortlock.com.au/timber-decking/',
          'RedirectMatch 301 /product/fijian-mahogany-decking/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products/timber-decking/?$ https://www.mortlock.com.au/timber-decking/',
          'RedirectMatch 301 /huize-looveld-is-a-blackened-timber-house-built-on-the-site-of-a-razed-farmstead/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /corpus-christi-college-theatre-award-winning-style-and-simplicity/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /scarboro-surf-life-saving-club-sand-sea-and-style/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /hillarys-residential-landscape/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /visit-south-west/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /on-site-with-mortlock-bunbury-may-16/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /branksome-gardens/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /hear-what-solwest-construction-has-to-say-proplank-timber-batten-system-2/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /scarboro-surf-life-saving-club-sand-sea-and-style/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /scarboro-surf-life-saving-club-sand-sea-and-style/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /scarboro-surf-life-saving-club-sand-sea-and-style/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /hear-what-solwest-construction-has-to-say-proplank-timber-batten-system-2/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /burnt-ash-thermally-modified-american-ash-timber/?$ https://www.mortlock.com.au/news/',
          'RedirectMatch 301 /proplank-timelapse/?$ https://www.mortlock.com.au/timber-decking/',
          'RedirectMatch 301 /thank-you-request-samples/?$ https://www.mortlock.com.au/contact-us/',
          'RedirectMatch 301 /thank-you-request-consultation/?$ https://www.mortlock.com.au/contact-us/',
          'RedirectMatch 301 /thank-you/?$ https://www.mortlock.com.au/contact-us/',
          'RedirectMatch 301 /testimonial/shane-allnutt-owner-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/american-oak/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/nathan-poletti-geraldton-building-services-cabinets-gbsc-pty-ltd/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/dean-robinson-carpenter-all-style-carpentry/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /project/shire-leonora-offices/?$ https://www.mortlock.com.au/portfolio/',
          'RedirectMatch 301 /wp-content/uploads/2020/06/Mortlock-Timber-SHOU-SUGI-BAN-Timber-Cladding-Guide.-email-version.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/allan-shaw-owner-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2019/09/Mortlock-Timber-Group-Product-Pricing-Guide.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/greg-vincent-master-plan-sa-pty-ltd/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/anthony-waugh-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /doc-1624-pollinate-health-report-february-2018-1/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/jesse-searls-founder-of-the-surreal-foundry-cycleworks/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/darrell-playle-rusty-nail-designs/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2018/09/doc-1624-pollinate-health-report-february-2018-1.pdf?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/shou-sugi-ban-cladding/?$ https://www.mortlock.com.au/timber-cladding/shou-sugi-ban/',
          'RedirectMatch 301 /seascape-rise-by-adrian-zorzi/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/hemlock/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /faq/how-do-you-prevent-colour-leaching-from-vertical-cladding/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/suzanne-burke-amerex/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/nigel-avern-owner-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/mihajlo-elakovic-building-designer/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2015/11/Wood_Human_Health_final-single.pdf?utm_medium=email&amp?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2020/06/FireAust_ProjectBALBuildAspublishedMay2020.pdf?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2019/09/Mortlock-Timber-Group-Product-Pricing-Guide.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /virgula-i-adds-warm-wood-to-white-walled-portuguese-hotel/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=73&amp/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/prolam-laminated-timber-beams/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products/solid-wood-flooring/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/shou-sugi-ban-burnt-ash/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2014/05/Species-Data-Sheet-Victorian-Ash.pdf?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/marineplank-timber-decking/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=73&amp/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/classicplank-timber-decking/?$ https://www.mortlock.com.au/timber-decking/classicplank-timber-decking/',
          'RedirectMatch 301 /testimonial/gaetan-dalle-owner-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/proplank-batten-lining/?$ https://www.mortlock.com.au/timber-decking/proplank-timber-battens/',
          'RedirectMatch 301 /products-category/miscellaneous/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/guy-boudville-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2015/11/Wood_Human_Health_final-single.pdf?utm_medium=email&amp/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/hardwood-timber/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /perths-longest-lunch-may-2016/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /media_category/banners/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2014/05/Species-Data-Sheet-Spotted-Gum.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /project_type/public-spaces/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/satinplank-timber-lining/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /faq/what-is-thermally-modified-timber/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/matt-mearns-owner-builder-from-nsw/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/chris-borella-charter-property-group/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2014/05/Species-Data-Sheet-Jarrah.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /projects-of-2018/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /project_type/education-culture/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/macky-valakas-architect/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/screenplank-timber-screening/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2014/05/Species-Data-Sheet-Ironbark.pdf?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /faq/what-is-class-1-timber-durability/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/dervla-mccarey-architect/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /faq/how-long-will-cutek-last-how-often-do-i-need-to-reapply/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/ascher-smith-landscape-architect/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /products-category/metroplank-timber-decking/?$ https://www.mortlock.com.au/timber-decking/metro-plank/',
          'RedirectMatch 301 /products-category/ultraplank-timber-flooring/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/shane-roberts-perth-wa/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=1293&amp/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /faq/what-timber-species-are-bal-rated/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2020/05/Wood-Solutions-Building-with-Timber-in-Bushfire-prone-Areas.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /faq/what-is-the-best-coating-product-to-protect-timber/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/russell-slaughter-perth-wa/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /timber_species_type/stringybark/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2019/10/Mortlock-Timber-PROPLANK-Timber-Batten-Guide.-email-version.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/justin-stuart/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /project/kings-park/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2014/05/Species-Data-Sheet-Blackbutt.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/trixie-and-rob-owner-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/todd-mead-builder-at-well-measured-carpentry/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/nic-crowe-landscape-architect-blarch/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/elton-fawkes-adage-furniture/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /wp-content/uploads/2014/05/Species-Data-Sheet-Pacific-Teak.pdf/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/elena-bibian-owner-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=73&amp/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /testimonial/jordan-miller-builder/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=1293&amp/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /download-files/?post_id=73&amp/?$ https://www.mortlock.com.au/',
          'RedirectMatch 301 /project/seascape-rise-yallingup/?$ https://www.mortlock.com.au/project/yallingup/',
          'Redirect 301 /wp-content/uploads/2015/11/Wood_Human_Health_final-single.pdf?utm_medium=email&amp https://www.mortlock.com.au/',
          'Redirect 301 /download-files-trendplank/?post_id=90&amp?$ https://www.mortlock.com.au/timber-decking/proplank-timber-battens/' ,
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/favicon/`,
        background_color: `#fff`,
        theme_color: `#a2764f`,
        icon: `src/images/mortlock-icon.png`,
        icons: [
          {
            src: `/favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon/android-chrome-512x512.png`,
            sizes: `192x192`,
            type: `image/png`,
          }
        ]
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        minimizeDeprecationNotice: true,
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: process.env.API_URL,
        // The protocol. This can be http or https.
        protocol: process.env.API_PROTOCOL,
        // The rest api route prefix that your WordPress site is using.
        // Sometimes this is modified by WordPress plugins.
        // If not set, it uses the default of "wp-json"
        restApiRoutePrefix: "wp-json",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // The IDs provided to this array should correspond to the `post_id` value when defining your
        // options page using the provided `acf_add_options_page` method, in your WordPress setup
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          htaccess_user: "your-htaccess-username",
          htaccess_pass: "your-htaccess-password",
          htaccess_sendImmediately: false,

          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: "54793",
          wpcom_user: "gatsbyjswpexample@gmail.com",
          wpcom_pass: process.env.WORDPRESS_PASSWORD,

          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set cookies that should be send with requests to WordPress as key value pairs
        cookies: {},
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://wp.iamskater.com",
        //   replacementUrl: "https://wp.iamskater.com",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        // "**/users",
        includedRoutes: [
          "**/categories",
          "**/project-category",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/menus",
          "**/project"
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: ["**/posts/1456"],
        // Set this to keep media sizes.
        // This option is particularly useful in case you need access to
        // URLs for thumbnails, or any other media detail.
        // Defaults to false
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
        // The normalizers option allows you to manipulate the array of internal
        // normalizers that are applied to entities after they're fetched
        // from WordPress.
        // You can add your own normalizers to this array by adding an object
        // that contains name and normalizer properties.
        // Name is the name of your normalizer, and normalizer is a function that
        // should return the array of entities that are passed to it.
        // This is useful if you need more control over the order of normalizers,
        // instead of your normalizer being applied after the built in normalizers (as is the case with the normalizer option).
        normalizers: normalizers => [
          ...normalizers,
          {
            name: "nameOfTheFunction",
            normalizer: function({ entities }) {
              // manipulate entities here
              return entities
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
