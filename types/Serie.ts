export interface Serie {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta: any[];
    title: string;
    language: string;
    copyright: string;
    subtitle: string;
    author: string;
    owner_name: string;
    owner_email: string;
    explicit_option: string;
    complete_option: string;
    image: string;
    category1: Category1;
    category2: Category2;
    category3: Category3;
    yoast_head: string;
    yoast_head_json: YoastHeadJson;
    _links: Links;
}

export interface Category1 {
    category: string;
    subcategory: string;
}

export interface Category2 {
    category: string;
    subcategory: string;
}

export interface Category3 {
    category: string;
    subcategory: string;
}

export interface YoastHeadJson {
    title: string;
    robots: Robots;
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_url: string;
    og_site_name: string;
    og_image: OgImage[];
    twitter_card: string;
    twitter_site: string;
    schema: Schema;
}

export interface Robots {
    index: string;
    follow: string;
    'max-snippet': string;
    'max-image-preview': string;
    'max-video-preview': string;
}

export interface OgImage {
    width: number;
    height: number;
    url: string;
    path: string;
    size: string;
    id: number;
    alt: string;
    pixels: number;
    type: string;
}

export interface Schema {
    '@context': string;
    '@graph': Graph[];
}

export interface Graph {
    '@type': string;
    '@id': string;
    name?: string;
    url?: string;
    sameAs?: string[];
    logo?: Logo;
    image?: Image;
    description?: string;
    publisher?: Publisher;
    potentialAction?: PotentialAction[];
    inLanguage?: string;
    isPartOf?: IsPartOf;
    breadcrumb?: Breadcrumb;
    itemListElement?: ItemListElement[];
}

export interface Logo {
    '@type': string;
    '@id': string;
    inLanguage: string;
    url: string;
    contentUrl: string;
    width: number;
    height: number;
    caption: string;
}

export interface Image {
    '@id': string;
}

export interface Publisher {
    '@id': string;
}

export interface PotentialAction {
    '@type': string;
    target: any;
    'query-input'?: string;
}

export interface IsPartOf {
    '@id': string;
}

export interface Breadcrumb {
    '@id': string;
}

export interface ItemListElement {
    '@type': string;
    position: number;
    name: string;
    item?: string;
}

export interface Links {
    self: Self[];
    collection: Collection[];
    about: About[];
    'wp:post_type': WpPostType[];
    curies: Cury[];
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface About {
    href: string;
}

export interface WpPostType {
    href: string;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}
