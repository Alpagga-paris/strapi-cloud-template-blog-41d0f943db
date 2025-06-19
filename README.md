# 🚀 Getting started with Strapi

## Start Project 

Copy .env.example to .env

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)
```
npm run develop
```
It will run on http://localhost:1337

## Development guidelines 


### ✅ Environment Strategy

**Staging/Production Resource Convention:**

- Each Strapi resource MUST have both staging and production versions
- This enables safe testing in staging before production deployment
- Create environment-specific endpoint variables to target appropriate resources

**Local Development Limitations:**

- Local Strapi is NOT linked to production/staging databases, as it use sqlLite in local
- You must recreate accounts and test resources locally
- Image URLs point to local filesystem paths (not production-ready)

### ⚠️ Production Safety Rules

**Critical Deployment Guidelines:**

1. **Never rename or remove fields** before deploying corresponding code changes to production
2. Field modifications will **delete existing content** immediately upon deployment
3. Always coordinate field schema changes with code deployments
4. Test all schema changes thoroughly in staging environment first

Resource naming pattern:

- `staging-homepage` → staging environment
- `production-homepage` → production environment


## ⚙️ Deployment

Deployment will happens when you push to main on repository.



## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

