## Nova SoundCloud Field 

A Laravel Nova field to play a SoundCloud audio
## Installation

You can install the package in to a Laravel app that uses Nova via composer:

```bash
composer require naif/soundcloud
```

## Usage:
Add the below to Nova/User.php resource:

```php
Soundcloud::make('Track')   
```
Copy past user/track_title from the SoundCloud url

Example:

URL: https://soundcloud.com/louie-zong/hello-world

User/Tilte: louie-zong/hello-world

<img src="https://raw.githubusercontent.com/naifalshaye/soundcloud/master/screenshots/add.png" width="700">

<img src="https://raw.githubusercontent.com/naifalshaye/soundcloud/master/screenshots/view.png" width="800">

## Support:
naif@naif.io

https://www.linkedin.com/in/naif

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
