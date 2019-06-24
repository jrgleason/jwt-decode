// TODO: Class?
function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function InvalidTokenError(message) {
  this.message = message;
}
InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

export { InvalidCharacterError, InvalidTokenError }