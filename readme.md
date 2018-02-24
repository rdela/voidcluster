# voidcluster

[Gatsby](https://www.gatsbyjs.org/) and [Netlify CMS](https://www.netlifycms.org) experiment based on the [Gatsby + Netlify CMS Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Getting Started (Recommended)

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. The example here a stripped down version of the [Gatsby + Netlify CMS Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms) Kaldi coffee company template (itself adapted from [One Click Hugo CMS](https://github.com/netlify-templates/one-click-hugo-cms)). Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/rdela/voidcluster&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## Getting Started (Without Netlify)
```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/rdela/voidcluster
$ cd [SITE_DIRECTORY_NAME]
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Deploy settings

### Netlify / ENV vars

```toml
[build]
  command = "gatsby build"
  publish = "public"

[template.environment]
  NODE_ENV = "production"
  NODE_VERSION = "node"
  RUBY_VERSION = "default"
```

https://www.netlify.com/blog/2016/08/30/introducing-deploy-contexts-in-netlify/

https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/

https://www.netlify.com/docs/continuous-deployment/#deploy-contexts

> Set a NODE_VERSION environment variable.
> You can set this as a variable in the build environment either
> while linking the repository or afterward from the site settings screen
> in our UI. The value inside can be anything you would use with nvm.

https://github.com/creationix/nvm

> In place of a version pointer like "0.10" or "5.0" or "4.2.1",
> you can use the following special default aliases
> […] > `node: this installs the latest version of node`

`RUBY_VERSION` env var is there to appease this lag/error I was seeing in deploy logs…

```
Attempting ruby version 2.2.3, read from environment
** WARNING **
Using custom ruby version 2.2.3, this will slow down the build.
To ensure fast builds, set the RUBY_VERSION environment variable, or .ruby-version file, to an included ruby version.
Included versions: 2.2.9 2.4.3 2.3.6
```

https://www.netlify.com/docs/continuous-deployment/#set-node-ruby-or-python-version

> We support any released version of Ruby that [rvm](https://github.com/rvm/rvm) understands.

[rvm](https://github.com/rvm/rvm):

> To switch between ruby versions you should call

> `rvm use INTERPRETER[-VERSION]`

> Same rules and options apply as for install command with two special interpreters.

> * `default` - default ruby (or the system ruby if a default hasn't been set)
> * `system` - system ruby (state before RVM was installed)

## License

https://docs.npmjs.com/files/package.json#license

> You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.

> If you are using a license that hasn't been assigned an SPDX identifier, or if you are using a custom license, use a string value like this one:

> `{ "license" : "SEE LICENSE IN <filename>" }`

[OpenBSD license](https://en.wikipedia.org/wiki/ISC_license#OpenBSD_license)
in [license.txt](license.txt)

> Consider also setting "private": true to prevent accidental publication.

[package.json#L28-L29](package.json#L28-L29)

```json
{
  "license": "SEE LICENSE IN license.txt",
  "private": true
}
```
