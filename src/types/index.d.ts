export type Meta = {
  page_title: string;
  meta_title: string;
  description: string;
};

export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    meta_title?: string;
    meta_description?: string;
    title?: string;
    position?: string[];
    description?: string;
    short_description?: string;
    image?: string;
    location?: string;
    city?: string;
    duration?: string;
    salary?: string;
    image?: string;
    qualification?: string[];
    categories?: string[];
    tags?: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string | undefined;
  content?: string;
};

// general
export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

// homepage
export type ClientLogo = {
  enable: boolean;
  logos: {
    name: string;
    logo: string;
  }[];
};

export type Feature = {
  label: string;
  details: string;
  image: string;
  logo: string;
};
export type Features = {
  enable: boolean;
  title: string;
  content: string;
  features: Feature[];
};

export type Step = {
  label: string;
  logo: string;
  title: string;
  details: string;
  image: string;
  points: string[];
};
export type Steps = {
  enable: boolean;
  title: string;
  content: string;
  steps: Step[];
};

export type Review = {
  user: string;
  image: string;
  designation: string;
  review: string;
};
export type Reviews = {
  enable: boolean;
  title: string;
  content: string;
  reviews: Review[];
};

export type HomePage = {
  frontmatter: {
    banner: {
      title: string;
      content: string;
      image?: string;
      buttons: Button[];
    };
    logo: ClientLogo;
    feature: Features;
    step: Steps;
    review: Reviews;
  };
};

// -----------

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

// about
export type Achievement = {
  title: string;
  description: string;
};

export type Value = {
  title: string;
  description: string;
  values: { logo: string; name: string; description: string }[];
};

export type Member = {
  name: string;
  designation: string;
  image: string;
  social: {
    name: string;
    icon: string;
    link: string;
  }[];
};
export type Team = {
  title: string;
  description: string;
  members: Member[];
};

// usecases
export type CaseStep = {
  title: string;
  description: string;
  image: string;
  points: string[];
};
export type Case = {
  frontmatter: {
    img: any;
    meta_title?: string;
    description?: string;
    title: string;
    content: string;
    header: string;
    logo: string;
    steps: CaseStep[];
  };
  slug?: string;
  content?: string;
};

export type UseCases = {
  frontmatter: {
    title: string;
    meta_title: string;
    description: string;
    content: string;
    cards: [{ label: string; details: string; logo: string }];
  };
};

// pricing
export type Pack = {
  name: string;
  icon: string;
  price: number;
  popular: boolean;
  features: string[];
};
export type Plan = {
  label: string;
  packs: Pack[];
};
export type SinglePlan = {
  feature: string;
  basic: boolean;
  standard: boolean;
  gold: boolean;
};

export type ComparePlan = {
  name: string;
};
export type CompareFeature = {
  name: {
    name: string;
    available: boolean | string;
  }[];
};
export type Comparison = {
  title: string;
  content: string;
  plans: ComparePlan[];
  features: CompareFeature[];
  buttons: { name: string }[];
};

// career
export type Careers = {
  frontmatter: {
    title: string;
    meta_title: string;
    description: string;
    position: string[];
    details: string;
    summery: string;
    location: string;
    city: string;
    duration: string;
    salary: string;
    image: string;
    qualification: string[];
  };
  content: string;
  slug: string;
};

export type Choose = {
  icon: string;
  title: string;
  subtitle: string;
};

// faq
export type Faq = {
  title: string;
  content: string;
};

// blog
export type BlogPost = {
  frontmatter: {
    title: string;
    meta_title: string;
    description: string;
    date: string;
    image: string;
    categories: string[];
    featured?: boolean;
    draft: boolean;
  };
  slug: string;
  content: string;
};

// connect us
export type Connect = {
  icon: string;
  label: string;
};
