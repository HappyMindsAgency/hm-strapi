import type { Schema, Struct } from '@strapi/strapi';

export interface FooterBottomBar extends Struct.ComponentSchema {
  collectionName: 'components_footer_bottom_bars';
  info: {
    description: '';
    displayName: 'BottomBar';
    icon: 'arrowDown';
  };
  attributes: {
    credits: Schema.Attribute.RichText;
    iconaSocial: Schema.Attribute.Component<'shared.info-and-icona', true>;
  };
}

export interface FooterColonna1 extends Struct.ComponentSchema {
  collectionName: 'components_footer_colonna1s';
  info: {
    description: '';
    displayName: 'infoGenerali';
    icon: 'briefcase';
  };
  attributes: {
    descrizione: Schema.Attribute.RichText;
    nomeAgenzia: Schema.Attribute.String;
  };
}

export interface FooterColonna2 extends Struct.ComponentSchema {
  collectionName: 'components_footer_colonna2s';
  info: {
    description: '';
    displayName: 'datiGenerali';
    icon: 'bulletList';
  };
  attributes: {
    infoIcona: Schema.Attribute.Component<'shared.info-and-icona', true>;
    link: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SeoComponentsMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_seo_components_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SeoComponentsSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_components_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'seo-components.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_shared_call_to_actions';
  info: {
    displayName: 'CallToAction';
    icon: 'crown';
  };
  attributes: {
    descrizione: Schema.Attribute.Blocks;
    pulsante: Schema.Attribute.Component<'shared.link', false>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCardProgetto extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_progettos';
  info: {
    displayName: 'CardProgetto';
    icon: 'briefcase';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    descrizione: Schema.Attribute.RichText;
    immagine: Schema.Attribute.Media<'images'>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCodice extends Struct.ComponentSchema {
  collectionName: 'components_shared_codices';
  info: {
    displayName: 'Codice';
    icon: 'code';
  };
  attributes: {
    Code: Schema.Attribute.Text;
  };
}

export interface SharedContainerTextAndSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_container_text_and_slides';
  info: {
    displayName: 'ContainerText&Slide';
    icon: 'arrowRight';
  };
  attributes: {
    riga: Schema.Attribute.Component<'shared.text-and-slide', true>;
  };
}

export interface SharedCounter extends Struct.ComponentSchema {
  collectionName: 'components_shared_counters';
  info: {
    description: '';
    displayName: 'counter';
    icon: 'chartPie';
  };
  attributes: {
    numero: Schema.Attribute.Integer;
    sottotitolo: Schema.Attribute.Text;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedFormat extends Struct.ComponentSchema {
  collectionName: 'components_shared_formats';
  info: {
    description: '';
    displayName: 'Format';
    icon: 'briefcase';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    descrizione: Schema.Attribute.RichText;
    progetti: Schema.Attribute.Component<'shared.card-progetto', true>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedInfoAndIcona extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_and_iconas';
  info: {
    description: '';
    displayName: 'info&icona';
    icon: 'chartCircle';
  };
  attributes: {
    icona: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'https://fontawesome.com/search?q=cerca&o=r&ic=free'>;
    info: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: '';
    displayName: 'Link/Pulsante';
    icon: 'cursor';
  };
  attributes: {
    class: Schema.Attribute.String;
    link: Schema.Attribute.String;
    targetBlank: Schema.Attribute.Boolean;
    testoLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLogoCliente extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_clientes';
  info: {
    description: '';
    displayName: 'logoCliente';
    icon: 'walk';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    nome: Schema.Attribute.String;
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

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedPulsante extends Struct.ComponentSchema {
  collectionName: 'components_shared_pulsantes';
  info: {
    description: '';
    displayName: 'Pulsante';
    icon: 'cursor';
  };
  attributes: {
    destinazioneLink: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    etichetta: Schema.Attribute.String;
    titleParam: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'https://'>;
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

export interface SharedRigaCounter extends Struct.ComponentSchema {
  collectionName: 'components_shared_riga_counters';
  info: {
    description: '';
    displayName: 'RigaCounter';
    icon: 'chartPie';
  };
  attributes: {
    counter: Schema.Attribute.Component<'shared.counter', true>;
    immagine: Schema.Attribute.Media<'images'>;
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

export interface SharedSliderClienti extends Struct.ComponentSchema {
  collectionName: 'components_shared_slider_clientis';
  info: {
    displayName: 'sliderClienti';
    icon: 'briefcase';
  };
  attributes: {
    cliente: Schema.Attribute.Component<'shared.logo-cliente', true>;
  };
}

export interface SharedTextAndSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_and_slides';
  info: {
    description: '';
    displayName: 'Text&Slide';
    icon: 'arrowRight';
  };
  attributes: {
    paragrafo1: Schema.Attribute.RichText;
    paragrafo2: Schema.Attribute.RichText;
    reverseColumn: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    slider: Schema.Attribute.Media<'images', true>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedVideoHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_headers';
  info: {
    description: '';
    displayName: 'VideoHeader';
    icon: 'play';
  };
  attributes: {
    descrizione: Schema.Attribute.RichText;
    pulsante: Schema.Attribute.Component<'shared.link', false>;
    sottotitolo: Schema.Attribute.Text;
    titolo: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.bottom-bar': FooterBottomBar;
      'footer.colonna1': FooterColonna1;
      'footer.colonna2': FooterColonna2;
      'seo-components.meta-social': SeoComponentsMetaSocial;
      'seo-components.seo': SeoComponentsSeo;
      'shared.call-to-action': SharedCallToAction;
      'shared.card-progetto': SharedCardProgetto;
      'shared.codice': SharedCodice;
      'shared.container-text-and-slide': SharedContainerTextAndSlide;
      'shared.counter': SharedCounter;
      'shared.format': SharedFormat;
      'shared.info-and-icona': SharedInfoAndIcona;
      'shared.link': SharedLink;
      'shared.logo-cliente': SharedLogoCliente;
      'shared.media': SharedMedia;
      'shared.open-graph': SharedOpenGraph;
      'shared.pulsante': SharedPulsante;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.riga-counter': SharedRigaCounter;
      'shared.slider': SharedSlider;
      'shared.slider-clienti': SharedSliderClienti;
      'shared.text-and-slide': SharedTextAndSlide;
      'shared.video-header': SharedVideoHeader;
    }
  }
}
