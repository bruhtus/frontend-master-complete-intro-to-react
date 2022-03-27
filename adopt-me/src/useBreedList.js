import { useState, useEffect } from 'react';

// the idea here is, if we select cat and we get the list of cat data that is
// available, and then when we select dog, it did the same thing but when we go
// back to cat, we don't need to request it again because it's the same and
// store the cat data locally instead.
const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  // this is a string that represents what the state of the hooks is in.
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      // in case the api is down, returns an empty array. now we have caching
      // problems which is probably better than the app crashing.
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]);

  return [breedList, status];
}
