export interface Podcast {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    menu_order: number;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: Meta;
    tags: any[];
    series: number[];
    episode_featured_image: boolean;
    episode_player_image: string;
    download_link: string;
    audio_player: any;
    yoast_head: string;
    yoast_head_json: YoastHeadJson;
    _links: Links;
    page:number
    nextCursor:number
}

export interface Guid {
    rendered: string;
}

export interface Title {
    rendered: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface Excerpt {
    rendered: string;
    protected: boolean;
}

export interface Meta {
    episode_type: string;
    audio_file: string;
    duration: string;
    filesize: string;
    date_recorded: string;
    explicit: string;
    block: string;
    itunes_episode_number: string;
    itunes_title: string;
    itunes_season_number: string;
    itunes_episode_type: string;
    filesize_raw: string;
}

export interface YoastHeadJson {
    title: string;
    robots: Robots;
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_publisher: string;
    article_modified_time: string;
    og_image: OgImage[];
    twitter_card: string;
    twitter_image: string;
    twitter_site: string;
    twitter_misc: TwitterMisc;
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
    id: string;
    alt: string;
    pixels: number;
    type: string;
}

export interface TwitterMisc {
    'Durée de lecture est.': string;
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
    contentUrl?: string;
    width?: number;
    height?: number;
    isPartOf?: IsPartOf;
    datePublished?: string;
    dateModified?: string;
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
    author: Author[];
    replies: Reply[];
    'wp:attachment': WpAttachment[];
    'wp:term': WpTerm[];
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

export interface Author {
    embeddable: boolean;
    href: string;
}

export interface Reply {
    embeddable: boolean;
    href: string;
}

export interface WpAttachment {
    href: string;
}

export interface WpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}
