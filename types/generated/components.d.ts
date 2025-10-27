import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_banners';
  info: {
    description: '';
    displayName: 'Banner';
    icon: 'picture';
  };
  attributes: {
    desktop: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    display: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    link: Schema.Attribute.Text;
    mobile: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface ComponentsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'check';
  };
  attributes: {
    author: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
    jobTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ComponentsTestimonialList extends Struct.ComponentSchema {
  collectionName: 'components_components_testimonial_lists';
  info: {
    displayName: 'TestimonialList';
    icon: 'grid';
  };
  attributes: {
    Testimonial: Schema.Attribute.Component<'components.testimonial', true>;
  };
}

export interface ComponentsTrusting extends Struct.ComponentSchema {
  collectionName: 'components_components_trustings';
  info: {
    displayName: 'Trusting';
    icon: 'handHeart';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    altText: Schema.Attribute.String;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link: Schema.Attribute.String;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomepageBannerList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_banner_lists';
  info: {
    description: '';
    displayName: 'BannerList';
  };
  attributes: {
    banners: Schema.Attribute.Component<'homepage.banner', true>;
  };
}

export interface HomepageClientLogoList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_client_logo_lists';
  info: {
    description: '';
    displayName: 'ClientLogoList';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface HomepageFaq extends Struct.ComponentSchema {
  collectionName: 'components_homepage_faqs';
  info: {
    description: '';
    displayName: 'SingleQuestion';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface HomepageFaqList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_faq_lists';
  info: {
    description: '';
    displayName: 'FAQList';
  };
  attributes: {
    questions: Schema.Attribute.Component<'homepage.faq', true>;
  };
}

export interface HomepageHomepage extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepages';
  info: {
    description: '';
    displayName: 'Homepage';
  };
  attributes: {
    bannerList: Schema.Attribute.Component<'homepage.banner-list', false>;
    clientLogoList: Schema.Attribute.Component<
      'homepage.client-logo-list',
      true
    >;
    faq: Schema.Attribute.Component<'homepage.faq-list', false>;
    reviewListAndRate: Schema.Attribute.Component<
      'homepage.testimonial-list',
      false
    >;
    showDestockage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface HomepageLogos extends Struct.ComponentSchema {
  collectionName: 'components_homepage_logos';
  info: {
    displayName: 'logos';
  };
  attributes: {};
}

export interface HomepageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    description: '';
    displayName: 'Review';
  };
  attributes: {
    name: Schema.Attribute.String;
    review: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageTestimonialList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonial_lists';
  info: {
    description: '';
    displayName: 'ReviewListAndRate';
  };
  attributes: {
    rate: Schema.Attribute.Decimal;
    reviews: Schema.Attribute.Component<'homepage.testimonial', true>;
  };
}

export interface LandingComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_landing_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.Text;
    outlined: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface LandingComponentsHeroHeader extends Struct.ComponentSchema {
  collectionName: 'components_landing_components_hero_headers';
  info: {
    displayName: 'HeroHeader';
  };
  attributes: {
    button: Schema.Attribute.Component<'landing-components.button', false>;
    content: Schema.Attribute.RichText;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.banner': ComponentsBanner;
      'components.testimonial': ComponentsTestimonial;
      'components.testimonial-list': ComponentsTestimonialList;
      'components.trusting': ComponentsTrusting;
      'homepage.banner': HomepageBanner;
      'homepage.banner-list': HomepageBannerList;
      'homepage.client-logo-list': HomepageClientLogoList;
      'homepage.faq': HomepageFaq;
      'homepage.faq-list': HomepageFaqList;
      'homepage.homepage': HomepageHomepage;
      'homepage.logos': HomepageLogos;
      'homepage.testimonial': HomepageTestimonial;
      'homepage.testimonial-list': HomepageTestimonialList;
      'landing-components.button': LandingComponentsButton;
      'landing-components.hero-header': LandingComponentsHeroHeader;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
