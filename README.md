Project using SOLID principals

Built with Laravel and Preactjs

Important: I'm having problems trying to connect the API, i think it might be something related to my location. there's a 5 seconds Ddos check.

So I implemented an Exception that returns a fallback for me in case my http call fails. The fallback is the API result when accessed on the browser.

## Requirements:

- nodejs 8.9.4
- php71
- composer

## API - up and running
`cd iconicbackend`

`php artisan serve`

## API - testing with PHP Unit

Test files are located in ./tests/Unit, so we run from command line

`./vendor/bin/phpunit`

## Web - Up and running

`cd webapp`

`npm run dev`

### SOLID Principals

* Response of controller ProductController must be separated, because its responsability is to know how to respond to requests, in example: Response returning JSON/View/XML

* Repositories MUST know how to retrieve/persist my data
  ** Interfaces used to decouple http client choices. In example, product repository uses GuzzleHttpClient, but AnotherRepository could use AnotherHttpClient, so we implement RepositoryInterface.

* Also, the Response Class from Laravel has open/closed principal, because is ready for extension (example for returning responses as TEXT, XML, JSON or other formats you want to create). You don't mofidy the class, you extend and create your format. 

* Models is a layer, representing my Entity for persistence.
In this case, i took a different approach that i enjoy working with: Providing API service to be consumed by other apps, so i'm not creating a Model here.