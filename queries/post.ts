export const postQuery = `query MyQuery($slug: String, $locale: SiteLocale, $fallbackLocale: [SiteLocale!]) {
  post(filter: {slug: {eq: $slug}, title: {isBlank: "false"}}, locale: $locale, fallbackLocales: $fallbackLocale) {
    _publishedAt
    title
    author {
      name
      bio
      slug
      picture {
        responsiveImage(imgixParams: {w: "64", h: "64", fit: crop}) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          bgColor
          base64
        }
      }
    }
    tags {
      id
      tag
      slug
    }
    content {
      value
      links {
        _publishedAt
        __typename
        slug
        id
        title
        tags {
          tag
        }
        seoTags {
          description
          image {
            responsiveImage {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              bgColor
              base64
            }
          }
        }
        author {
          name
          bio
          picture {
            responsiveImage(imgixParams: {w: "64", h: "64", fit: crop}) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              bgColor
              base64
            }
          }
        }
      }
      blocks {
        ... on ImageBlockRecord {
          id
          __typename
          image {
            id
            responsiveImage {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
        }
        ... on NewsletterSubscriptionRecord {
          id
          __typename
          buttonLabel
          subtitle
          title
          buttonColor {
            hex
          }
        }
        ... on CtaButtonWithImageRecord {
          id
          __typename
          title
          subtitle
          image {
            id
            responsiveImage {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
          buttonLabel
          buttonColor {
            hex
          }
        }
      }
    }
  }
}`;