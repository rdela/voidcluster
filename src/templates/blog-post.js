import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import TwitterActions from '../components/TwitterActions';

// eslint-disable-next-line
export const BlogPostTemplate = ({
	content,
	contentComponent,
	description,
	helmet,
	siteTwitter,
	tags,
	title
}) => {
	const PostContent = contentComponent || Content;

	return (
		<section>
			{helmet || ''}
			<div className="container content">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<header>
							<h1
								className="title is-size-2 is-bold-light"
								style={{
									padding: '2.5rem 1.5rem 0',
									textAlign: 'center'
								}}
							>
								{title}
							</h1>
							<p
								className="description"
								style={{
									textAlign: 'center'
								}}
							>
								{description}
							</p>
						</header>
						<section className="section">
							<article
								style={{
									fontSize: '1.3125rem',
									margin: '0 auto 6rem',
									maxWidth: '40rem'
								}}
							>
								<PostContent content={content} />
								{tags && tags.length ? (
									<div style={{ marginTop: `4rem` }}>
										<h4>Tags</h4>
										<ul className="taglist">
											{tags.map((tag) => (
												<li key={tag + `tag`}>
													<Link to={`/t/${kebabCase(tag)}/`}>{tag}</Link>
												</li>
											))}
										</ul>
									</div>
								) : null}
								<TwitterActions account={siteTwitter} />
							</article>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<BlogPostTemplate
				content={post.html}
				contentComponent={HTMLContent}
				description={post.frontmatter.description}
				helmet={
					<Helmet titleTemplate={`%s - ${data.site.siteMetadata.title}`}>
						<title>{`${post.frontmatter.title}`}</title>
						<meta
							name="description"
							content={`${post.frontmatter.description}`}
						/>
					</Helmet>
				}
				siteTwitter={data.site.siteMetadata.twitter}
				tags={post.frontmatter.tags}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

export default BlogPost;

export const blogPostQuery = graphql`
	query BlogPostByID($id: String!) {
		site {
			siteMetadata {
				title
				twitter
			}
		}
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "DD MMMM YYYY")
				description
				tags
				title
			}
		}
	}
`;
