<p align="center"><img src="https://github.com/dotansimha/graphql-yoga/raw/master/website/public/banner.svg" width="350" /></p>

# GraphQL Yoga for Cloudflare Workers (Wrangler template)

Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience:

- **Easiest way to run a GraphQL server:** Sensible defaults & includes everything you need with minimal setup (we also export a platform/env-agnostic handler so you can build your own wrappers easily).
- **Includes Subscriptions:** Built-in support for GraphQL subscriptions using **S**erver-**S**ent **E**vents.
- **Compatible:** Works with all GraphQL clients (Apollo, Relay...) and fits seamless in your GraphQL workflow.
- **WHATWG Fetch API:** the core package depends on [WHATWG Fetch API](https://fetch.spec.whatwg.org/) so it can run and deploy on any environment (Serverless, Workers, Deno, Node).
- **Easily Extendable:** New GraphQL-Yoga support all [`envelop`](https://www.envelop.dev) plugins.


<br />

[Read the 2.0 announcement blog post](https://www.the-guild.dev/blog/announcing-graphql-yoga-v2)

[Read the docs](https://www.graphql-yoga.com/docs/quick-start)

<p>&nbsp;</p>

----

<p>&nbsp;</p>

## Getting started


1. Install and configure wrangler

```sh
npm i @cloudflare/wrangler -g

wrangler login
```


2. Create a new project with the GraphQL Yoga template

```sh
 wrangler generate graphql-yoga-worker https://github.com/the-guild-org/yoga-cloudflare-workers-template
```


3. Build and deploy your CF Worker GraphQL API

```sh
cd graphql-yoga-worker
wrangler build
wrangler publish
```

<p>&nbsp;</p>

----

<p>&nbsp;</p>

## Going futher

- [GraphQL Yoga features documentation](https://www.graphql-yoga.com/docs/quick-start)
- [GraphQL Yoga on Cloudflare Workers](https://www.graphql-yoga.com/docs/integrations/integration-with-cloudflare-workers)
