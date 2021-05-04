# Movie app

## Important

For best results please match the versions

Node version `=15`

Npm version `7.7.6`

For this example we will use themoviedb api [link](https://developers.themoviedb.org/3/movies/get-movie-details)

So to be able to run this app locally you need to add your own api_key.

To do so create `.env` file in the root of the project and add this env variable there.

```javascript
API_KEY=fakekey1234
BASE_URL=https://image.tmdb.org/t/p/

```

To get the key, please follow these instructions [link](https://developers.themoviedb.org/3/getting-started/introduction)

### Development

After you have the `api_key` run

```javascript
$ npm ci
$ npm start
```

visit [http://localhost:8080/](http://localhost:8080/)

To check storybook run

```javascript
$ npm run storybook
```

## Project structure

```
/src
----/Components
    |----/ButtonComponent
         |----ButtonComponent.tsx
         |----ButtonComponent.spec.tsx
         |----ButtonComponent.scss
----/Hooks
    |----useLocalStorage.tsx
    |----useLocalStorage.spec.tsx
----/Pages
    |----/HomePage
         |----HomePage.tsx
         |----HomePage.spec.tsx
         |----HomePage.scss
----/Router
    |----Router.tsx
----/stories
    |----Button.stories.tsx
----/Styles
    |----breakpoints.scss
----/Utils
    |----getReleaseDate.ts
    |----getReleaseDate.spec.ts
----App.tsx
----index.html
----index.tsx

```

- We will use Dumb/Smart component design when creating new components

- What Classifies as a Dumb component?

```
Any component that contains no logic, but only renders data based od data model
```

- What Classifies as a Smart component?

```
Component needs to do some advanced data manipultion, use API's
```

### Data fetching

We are using [React-Query](https://react-query.tanstack.com/) to leverage their advanced caching mechanism.
To read more about it check it on this [link](https://react-query.tanstack.com/guides/caching)

Example usage

```javascript
const Component = () => {
  const { isLoading, data, isError, refetch } = useQuery(
    "Fake-cache-key",
    () => fetch(url, options).then((res) => res.json()),
    {
      enabled,
      staleTime: 1000 * 60, // one minute
    }
  );
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...</p>}
      {data && <CoolComponent data={data} onRefetch={refetch} />}
    </>
  );
};
```

### Testing

For testing we are using [Jest](https://jestjs.io/) framework

```
$ npm t
```

### FAQ

Netlify deployed app keeps redirecting and throwing 404

- fix for this is here https://stackoverflow.com/a/64842020
