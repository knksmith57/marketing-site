import React from 'react';
import { graphql } from 'gatsby';
import pick from 'lodash/pick';
import get from 'lodash/get';

import { SEO, Page } from 'components';
import { PostSummary, ListHeader, HeadRssLink } from 'components/article';

const mapContentfulBlogPostToMarkdownRemarkBlogPost = ({ node }) => ({
  node: {
    frontmatter: {
      ...pick(node, ['title', 'tags', 'date', 'lastValidated']),

      description: get(node, 'description.childMarkdownRemark.rawMarkdownBody', ''),

      author: {
        name: node.author.name,
        avatar: {
          childImageSharp: {
            gatsbyImageData: node.author.avatar.gatsbyImageData,
          },
        },
      },
    },

    fields: {
      slug: node.slug,
    },
  },
});

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  const posts = data.allContentfulBlogPost.edges
    .map(mapContentfulBlogPostToMarkdownRemarkBlogPost);

  return (
    <>
      <SEO
        title={`All blog posts | ${siteTitle}`}
        description={`
          Backstage content. Everything from technical how-tos to recaps of community sessions and 
          general engineering effectiveness content.
        `}
      />

      <HeadRssLink />
      <Page>
        <ListHeader title="Blog" />

        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map(({ node }) => (
            <PostSummary key={node.fields.slug} post={node} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    allContentfulBlogPost(sort: {fields: date, order: DESC}) {
      edges {
        node {
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
            description
          }
          date
          author {
            name
            avatar {
              gatsbyImageData(layout: FIXED, width: 40)
            }
          }
          slug
          tags
          title
          lastValidated
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
