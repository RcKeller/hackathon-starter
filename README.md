# @rckeller/hackathon-starter

An example of using CircleCI for several CI/CD test layers - build, unit, and e2e, in addition to deployment.

A script is included to auto-terminate runs based on files in commit ranges, preventing redundant test runs. E.g, build and unit tests don't run if the `client` folder is unchanged.

Will turn this into a hackathon starter kit later this month, would be useful for competition.

## Quick Start

```bash
# fork this repo
cd hackathon-starter
cd client && npm install
npm run build
cd ../server && npm install
touch .env
# ... fill out the .env file and include all the variables outlined in .env.defaults
```

## CircleCI Setup

1. [Enable third-party Orbs](https://circleci.com/docs/2.0/orbs-faq/#using-3rd-party-orbs)

2. [Add Environment Variables](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project)

You must have the following defined:

```
HTTP_PORT
HTTPS_PORT
API_PREFIX
API_VERSION
DB_PROTOCOL
DB_USER
DB_PASSWORD
DB_HOST
DB_NAME
```