import type { Struct, Schema } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'components.trusting': ComponentsTrusting;
      'components.testimonial': ComponentsTestimonial;
      'components.testimonial-list': ComponentsTestimonialList;
      'components.banner': ComponentsBanner;
    }
  }
}
