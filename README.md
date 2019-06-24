__jwt-decode__ is a small browser library that helps decoding JWTs token which are Base64Url encoded.

__IMPORTANT:__ This library doesn't validate the token, any well formed JWT can be decoded. You should validate the token in your server-side logic by using something like [express-jwt](https://github.com/auth0/express-jwt), [koa-jwt](https://github.com/stiang/koa-jwt), [Owin Bearer JWT](https://github.com/michaelnoonan/Auth0-Owin-JwtBearerAuthentication), etc.

## Installation

Install with npm, bower, or downloading from the build directory of this repository.

Use with AMD, browserify or just include with an script tag.

## Usage

~~~javascript
import { decode } from '@jrg/jwt-decode';
const token = 'eyJ0eXAiO.../// jwt token';

const decoded = decode(token);
console.log(decoded);

/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */
~~~

## TODO: Webpack to make ES5 Compatible

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Jackie Gleason]: https://jackiergleason.com

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

[jwt-decode]: https://github.com/auth0/jwt-decode
[webpack]: http://webpack.github.io/
