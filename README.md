# @rckeller/hackathon-starter

An example of using CircleCI for several CI/CD test layers - build, unit, and e2e, in addition to deployment.

A script is included to auto-terminate runs based on files in commit ranges, preventing redundant test runs. E.g, build and unit tests don't run if the `client` folder is unchanged.

Will turn this into a hackathon starter kit later this month, would be useful for competition.
