import type { Struct, Schema } from '@strapi/strapi';

export interface LandingComponentsHeroHeader extends Struct.ComponentSchema {
  collectionName: 'components_landing_components_hero_headers';
  info: {
    displayName: 'HeroHeader';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    button: Schema.Attribute.Component<'landing-components.button', false>;
  };
}

export interface LandingComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_landing_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    outlined: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Text;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
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

export interface ComponentsTrusting extends Struct.ComponentSchema {
  collectionName: 'components_components_trustings';
  info: {
    displayName: 'Trusting';
    icon: 'handHeart';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'files' | 'images'> &
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
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    content: Schema.Attribute.Text;
    author: Schema.Attribute.String;
    jobTitle: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files'> & Schema.Attribute.Required;
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

export interface ComponentsBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    desktop: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    mobile: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    link: Schema.Attribute.Text;
    display: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface HomepageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Review';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    review: Schema.Attribute.Text;
  };
}

export interface HomepageTestimonialList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonial_lists';
  info: {
    displayName: 'ReviewListAndRate';
    description: '';
  };
  attributes: {
    reviews: Schema.Attribute.Component<'homepage.testimonial', true>;
    rate: Schema.Attribute.Decimal;
  };
}

export interface HomepageHomepage extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepages';
  info: {
    displayName: 'Homepage';
    description: '';
  };
  attributes: {
    bannerList: Schema.Attribute.Component<'homepage.banner-list', false>;
    clientLogoList: Schema.Attribute.Component<
      'homepage.client-logo-list',
      false
    >;
    reviewListAndRate: Schema.Attribute.Component<
      'homepage.testimonial-list',
      false
    >;
    faq: Schema.Attribute.Component<'homepage.faq-list', false>;
  };
}

export interface HomepageFaq extends Struct.ComponentSchema {
  collectionName: 'components_homepage_faqs';
  info: {
    displayName: 'SingleQuestion';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.String;
    answer: Schema.Attribute.RichText;
  };
}

export interface HomepageFaqList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_faq_lists';
  info: {
    displayName: 'FAQList';
    description: '';
  };
  attributes: {
    questions: Schema.Attribute.Component<'homepage.faq', true>;
  };
}

export interface HomepageClientLogoList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_client_logo_lists';
  info: {
    displayName: 'ClientLogoList';
    description: '';
  };
  attributes: {
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomepageBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    altText: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface HomepageBannerList extends Struct.ComponentSchema {
  collectionName: 'components_homepage_banner_lists';
  info: {
    displayName: 'BannerList';
    description: '';
  };
  attributes: {
    banners: Schema.Attribute.Component<'homepage.banner', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing-components.hero-header': LandingComponentsHeroHeader;
      'landing-components.button': LandingComponentsButton;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'components.trusting': ComponentsTrusting;
      'components.testimonial': ComponentsTestimonial;
      'components.testimonial-list': ComponentsTestimonialList;
      'components.banner': ComponentsBanner;
      'homepage.testimonial': HomepageTestimonial;
      'homepage.testimonial-list': HomepageTestimonialList;
      'homepage.homepage': HomepageHomepage;
      'homepage.faq': HomepageFaq;
      'homepage.faq-list': HomepageFaqList;
      'homepage.client-logo-list': HomepageClientLogoList;
      'homepage.banner': HomepageBanner;
      'homepage.banner-list': HomepageBannerList;
    }
  }
}
