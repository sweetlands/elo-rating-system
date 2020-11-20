# elo-rating-system
a system for chess algoritm
## Usage

```sh
# install elo-system-rating
npm install @sweetlands/elo-rating-system

#### Syntax

```js
import Rating from '@sweetlands/elo-rating-system';

const scoreA = 100
const scoreB = 200
# const pi = 400  required
const rating = new Rating(scoreA , scoreB , pi)
const E = rating.resolveE()
```

