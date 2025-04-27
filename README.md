# @39choko/lastfm

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/@39choko/lastfm"><img src="https://img.shields.io/npm/v/@39choko/lastfm.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/@39choko/lastfm"><img src="https://img.shields.io/npm/dt/@39choko/lastfm.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://github.com/39Choko/lastfm/commits/main/"><img alt="Last commit." src="https://img.shields.io/github/last-commit/39Choko/lastfm?logo=github&logoColor=ffffff">
	</p>
</div>

## About

@39choko/lastfm is a [NodeJS](https://nodejs.org) module that allows you to interacting with the [LastFM API](https://www.last.fm/api).

## Installation

```sh
npm install @39choko/lastfm
yarn add @39choko/lastfm
pnpm add @39choko/lastfm
bun add @39choko/lastfm
deno install npm:@39choko/lastfm
```

## Example usage

First, you need to obtain an API key from Last.fm. You can get one here: <https://www.last.fm/api/account/create>

```ts
const { Client } = require('@39choko/lastfm');

const lastfm = new Client(
  apiKey: 'YOUR_API_KEY', {
    /* Optional Parameters: */
    apiSecret: 'YOUR_API_SECRET', // Required for some methods like authentication
    appName: 'YourAppName' // Optional, but it's recommended
  }
);

await lastfm.login() // If you want to login into lastFM <- Need apiSecret
```

### Example

Getting Artist Info

```ts
await lastfm.artist.getInfo({ artist: "Cher" }).then(console.log);

// Or

const artistGetInfo = await lastfm.artist.getInfo({ artist: "Cher" });
console.log(artistGetInfo);
```

Searching for a Track

```ts
await lastfm.track.search({ track: "Believe" }).then(console.log);

// Or

const trackSearch = await lastfm.track.search({ track: "Believe" }).then(console.log);
console.log(trackSearch);
```

Adding a Tag to an Album

```ts
// You need to be logged in first

await lastfm.login();
await lastfm.album.addTags({ album: "ECHO", artist: "Crusher-P", tags: ["favorites", "study"] }); // return undefined
```

## Links

- [npm](https://www.npmjs.com/package/@39choko/lastfm)
- [LastFM Documentation](https://www.last.fm/api/intro)
