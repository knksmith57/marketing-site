import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  SitewideFooter,
  SitewideHeader,
  TextLink as Link,
} from 'components';
import {
  FingerPrintIcon,
  SparklesIcon,
  LibraryIcon,
  MapIcon,
  NewspaperIcon,
  BeakerIcon,
  CollectionIcon,
  ShieldCheckIcon,
  ChipIcon,
  UsersIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'
import {
  AlternatingFeatureBlock,
  SplitGridLogoCloud,
  FooterCTA,
  VideoHero,
  CustomerLogoCloud,
} from 'components/landing';

import DragDropIllustration from '../../content/assets/home/illustrations/drag-drop-illustration.webp';
import DragDropIllustrationPng from '../../content/assets/home/illustrations/drag-drop-illustration.png';
import SecurityMaintenanceIllustration from '../../content/assets/home/illustrations/security-maintenance-illustration.webp';
import SecurityMaintenanceIllustrationPng from '../../content/assets/home/illustrations/security-maintenance-illustration.png';
import ServiceCatalogIllustration from '../../content/assets/home/illustrations/service-catalog-illustration.webp';
import ServiceCatalogIllustrationPng from '../../content/assets/home/illustrations/service-catalog-illustration.png';
import ProductionConsistencyIllustration from '../../content/assets/home/illustrations/production-consistency-illustration.webp';
import ProductionConsistencyIllustrationPng from '../../content/assets/home/illustrations/production-consistency-illustration.png';
import MikeExpediaGroupQuote from '../../content/assets/home/illustrations/mike-expedia-quote.webp';
import MikeExpediaGroupQuotePng from '../../content/assets/home/illustrations/mike-expedia-quote.png';

import GitHubLogo from '../../content/assets/logos/github/logos/modified/github.inline.svg';
import KubernetesLogo from '../../content/assets/logos/kubernetes/kubernetes.inline.svg';
import CircleCiLogo from '../../content/assets/logos/circle-ci/circleci.inline.svg';
import PagerDutyLogo from '../../content/assets/logos/pagerduty/pagerduty.inline.svg';
import ArgoLogo from '../../content/assets/logos/argo-cd/argo.inline.svg';
import JiraSoftwareLogo from '../../content/assets/logos/jira/jira.inline.svg';

const SEO_TITLE = 'The easiest way to get Spotify Backstage';
const LEAD = `
Roadie's SaaS platform handles hosting and upgrades and ensures
you always have access to the latest Backstage features.
`;

const PRODUCT = {
  htmlId: 'product',
  title: 'Spotify Backstage, with benefits...',
  description: `SaaS Backstage is simple to set up and maintenance free.`,
  features: [{
    title: 'Quick and easy setup',
    description: 'Customize Backstage in a couple of clicks. Drag plugins to where you want them. Add new ones instantly.',
    illustration: {
      webp: DragDropIllustration,
      png: DragDropIllustrationPng,
      alt: 'A component from a Backstage plugin being dragged around with the mouse pointer',
    },
    bullets: [{
      name: 'All plugin formats supported',
      description:
        `Roadie's drag and drop setup supports cards, tabs, sidebar links and full page plugins.`,
      icon: CollectionIcon,
    }, {
      name: 'Install custom plugins',
      description: 'Building your own internal plugins? Publish them to our private repository and they appear where you need them.',
      icon: BeakerIcon,
    }],

  }, {
    title: 'Maintenance free',
    description: 'Roadie handles upgrades and security so you can stay focused on the work your team does best.',
    illustration: {
      webp: SecurityMaintenanceIllustration,
      png: SecurityMaintenanceIllustrationPng,
      alt: 'A progress bar and cog to indicate an upgrade in progress.',
    },
    bullets: [{
      name: 'Automated upgrades',
      description:
        `Open-source community power means that Backstage moves quickly. It's easy to fall behind if you don't put the work in. We do the upgrades so you don't have to.`,
      icon: ChipIcon,
    }, {
      name: 'Security patches delivered',
      description:
        `We regularly patch vulnerabilities in the open-source code, ensuring you're using a hardened version of Backstage.`,
      icon: ShieldCheckIcon,
    }],
  }],
};

const SOLUTIONS = {
  htmlId: 'solutions',
  title: 'Turn tribal knowledge into shared context',
  description: 'Make docs, architecture diagrams and runbooks an integral part of your engineering workflow.',
  features: [{
    title: 'Built on Backstage',
    description: (
      <>
        Backstage is the developer portal and service catalog which has enabled engineering hypergrowth at Spotify since 2016. It can improve developer effectiveness, reduce downtime, and enable your teams to ship high-quality code quickly. Learn more in our <Link to="/backstage-spotify/" color="primary">Ultimate Guide to Spotify Backstage</Link>.
      </>
    ),
    illustration: {
      webp: MikeExpediaGroupQuote,
      png: MikeExpediaGroupQuotePng,
      alt: 'A face of a Backstage user with the quote: "We expect to see a 6x return on Backstage within a period of about 40 days."',
    },
    bullets: [{
      name: 'Scaffold new services',
      description: `The Backstage scaffolder allows engineers to create new services from pre-defined templates. Increasing velocity and production consistency.`,
      icon: SparklesIcon,
    }, {
      name: 'Bring order with the software catalog',
      description: 'The searchable catalog makes engineering tools discoverable and reduces context switching.',
      icon: LibraryIcon,
    }, {
      name: 'Write technical docs that get read',
      description: `TechDocs brings markdown technical documentation into Backstage, organises it by service, and makes it searchable.`,
      icon: NewspaperIcon,
    }],

  }, {
    title: 'Cut onboarding time with discoverability',
    description: 'Backstage centralizes the information that new engineers need to get up to speed quickly. Meaning they onboard in weeks rather than months.',
    illustration: {
      webp: ServiceCatalogIllustration,
      png: ServiceCatalogIllustrationPng,
      alt: 'A list of services that might exist in a company like Spotify: Pricing, Audio, Ratings etc. One service is selected and the user can see extra information about it. For example, which system it is part of, who the owner is etc.',
    },
    bullets: [{
      name: 'Rapid growth stretches knowledge',
      description: `Rapid growth means new engineers are joining and existing engineers are changing teams. Backstage ensures they become effective quickly, and stay that way.`,
      icon: UsersIcon,
    }, {

      name: 'Information at your fingertips',
      description: `Backstage centralises the service catalog and makes API specs, docs and tooling easy to access in one place, simplifying engineering tasks.`,
      icon: BookOpenIcon,
    }, {
      name: 'Proven results',
      description: `Spotify saw "time to 10ᵗʰ commit" drop by 55% in the two years after deploying Backstage internally. All while onboarding hundreds of engineers each year.`,
      icon: PresentationChartLineIcon,
    }],

  }, {
    title: 'Improve production consistency',
    description: 'Use the built in scaffolder to create new services from templates which have your best practices built in.',
    illustration: {
      webp: ProductionConsistencyIllustration,
      png: ProductionConsistencyIllustrationPng,
      alt: '5 services represented by one hexagon each. The hexagons are tightly packed together in a hive-like structure and they are all the same size. This indicates that they are consistent.',
    },
    bullets: [{
      name: 'Inconsistent environments slow development',
      description: `Nobody wants obstacles on the path to production, but heterogeneous environments cause operational headaches and slow technology migrations.`,
      icon: FingerPrintIcon,
    }, {
      name: 'Golden path to production',
      description:
        `Encode your best practices in templates which service teams can use to create new services. This ensures that increasing production consistency is the path of least resistance.`,
      icon: MapIcon,
    }],

  }],
};

const PLUGINS_SUPPORTED = {
  title: 'Pre-loaded with the best plugins',
  subTitle: `Open-source plugins are supported by default. Push your own plugins if you need something bespoke.`,
  link: {
    text: 'Browse our plugins and integrations catalog',
    to: '/docs/integrations/',
  },

  logos: [{
    src: <GitHubLogo />,
    key: 'github',
  }, {
    src: <KubernetesLogo />,
    key: 'k8s',
  }, {
    src: <PagerDutyLogo />,
    key: 'pagerduty',
  }, {
    src: <CircleCiLogo />,
    key: 'circleci',
  }, {
    src: <ArgoLogo />,
    key: 'argocd',
  }, {
    src: <JiraSoftwareLogo />,
    key: 'jira',
  }],
};

const Home = ({
  data: {
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },
  },
}) => (
  <>
    <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

    <SitewideHeader />
    <VideoHero />
    <CustomerLogoCloud />
    <AlternatingFeatureBlock content={SOLUTIONS} />
    <SplitGridLogoCloud content={PLUGINS_SUPPORTED} />
    <AlternatingFeatureBlock content={PRODUCT} />

    <FooterCTA />
    <SitewideFooter />
  </>
);

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
