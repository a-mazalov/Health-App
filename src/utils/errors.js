class AuthStorageEmptyException extends Error { }
class UserNotFoundException extends Error { }
class UserExistException extends Error { }
class UserNotAuthenticatedException extends Error { }


export {
	AuthStorageEmptyException,
	UserNotAuthenticatedException,
	UserExistException,
	UserNotFoundException
}