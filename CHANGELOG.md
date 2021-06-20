# Changelog

All notable changes to the `appdrop-api` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this package adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.1.100] - 2021-06-20

### Changed

- Breaking changes to timestamps
- Interest metadata

## [4.2.122] - 2021-06-11

### Changed

- Fixes bug in `handleObjectUpdate` where map overwrites array

## [4.2.121] - 2021-06-08

### Changed

- Adds `creator_id` on `Publishable` object updates

## [4.2.120] - 2021-06-07

### Changed

- Refactors updates to do another db query instead of overwriting prevObj

## [4.2.119] - 2021-06-07

### Changed

- `Timestamp` mechanics

## [4.2.116] - 2021-06-07

### Added

- `getUserFullName`

## [4.2.113] - 2021-06-07

### Changed

- `Project` API adds push_server_endpoint

## [4.2.113] - 2021-06-07

### Changed

- `RemoteMessage` API


## [4.2.111] - 2021-06-03

### Changed

- `push_app_reducer_action_str` typo


## [4.2.110] - 2021-06-03

### Changed

- `Criteria` now has comparison
- `UpdateMarketplaceProjectParams` deprecates api_base_url

## [4.2.109] - 2021-06-01

### Added

- Dispatch interfaces
- RemoteMessage interface
- `dot-object` package.
- AuthErrorCodes
- `appendArrayItems` and `removeArrayItems` helpers
- server util for request validation `isValidRequest`

## Changed

- iOS App APNS properties
- `handleObjectUpdate` function
- Criteria API

## Removed
- `handleArrayUpdates` function

## [4.2.108] - 2021-05-31

### Removed

- `APIRequestBase` constant
- `secToTime` function

### Added

- `getAPIRequestBase` function

### Changed

- Migrates endpoints to v2

## [4.2.107] - 2021-05-20

### Changed

- 12hr format in `secToTime` function

## [4.2.106] - 2021-05-20

### Changed

- Exports `SignedInDeviceData`

## [4.2.105] - 2021-05-20

### Added

- AppdropUI screens and objects

- Notification APIs

### Changed

- Version API to include UI

## [4.2.104] - 2021-05-17

### Added

- `SendPasswordResetVerificationCodeParams` interface

## [4.2.103] - 2021-05-17

### Changed

- CreatePasswordResetParams: adds `verification_code` field

## [4.2.102] - 2021-05-16

### Added

- SendPasswordResetEmailParams

## [4.2.101] - 2021-05-16

### Changed

- PasswordReset extends CreatePasswordResetParams

## [4.2.100] - 2021-05-16

### Added

- Changelog

## [4.1.165] - 2021-05-16

### Added

- Reset Password support to Appdrop Auth

### Changed

- None

### Removed

- Deprecated `security_question` properties