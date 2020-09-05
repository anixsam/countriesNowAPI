// const { USER_TYPES, REGULAR } = require('./config/constants');
const SERVERS = require('./servers')
const { CONTACT, LICENCE } = require('./info')
const SCHEMAS = require('./schemas')

const CITIES_METHODS = require('./paths/cities')
const CODES_METHODS = require('./paths/codes')
const FILTER_METHODS = require('./paths/filter/')
const CAPITAL_METHODS = require('./paths/capital')
const CURRENCY_METHODS = require('./paths/currency')
const FLAG_METHODS = require('./paths/flags')
const LOCATION_METHODS = require('./paths/location')
const POPULATION_METHODS = require('./paths/population')

module.exports = {
  openapi: '3.0.1',
  info: {
    title: 'CountriesNow API',
    version: '0.1.0',
    description: 'Official Swagger documentation for countriesNow API',
    contact: CONTACT,
    license: LICENCE
  },
  servers: SERVERS,
  paths: {
    '/': {
      get: CITIES_METHODS.getCountriesAndCities
    },
    '/cities': {
      post: CITIES_METHODS.getCities
    },
    '/codes': {
      get: CODES_METHODS.getCodes,
      post: CODES_METHODS.getSingleContryDialCode
    },
    '/iso': {
      get: CODES_METHODS.getISO
    },
    '/info': {
      get: FILTER_METHODS.getProps
    },
    '/capital': {
      get: CAPITAL_METHODS.getCapitals,
      post: CAPITAL_METHODS.getCapitalSingle
    },
    '/currency': {
      get: CURRENCY_METHODS.getCurrencies
    },
    '/flag/images': {
      get: FLAG_METHODS.getFlagImages,
      post: FLAG_METHODS.getFlagImagesSingle
    },
    '/flag/unicode': {
      get: FLAG_METHODS.getFlagUnicode,
      post: FLAG_METHODS.getFlagUnicodeSingle
    },
    '/positions': {
      get: LOCATION_METHODS.getPosition,
      post: LOCATION_METHODS.getPositionSingle
    },
    '/positions/range': {
      post: LOCATION_METHODS.getPositionRange
    },
    '/population': {
      get: POPULATION_METHODS.getCountryPopulation,
      post: POPULATION_METHODS.getSingleCountryPopulation
    },
    '/population/cities': {
      get: POPULATION_METHODS.getCityPopulation,
      post: POPULATION_METHODS.getSingleCityPopulation
    },
    '/population/filter': {
      post: POPULATION_METHODS.filterCountryPopulation
    },
    '/population/cities/filter': {
      post: POPULATION_METHODS.filterCityPopulation
    }
  },
  components: {
    schemas: SCHEMAS
  }
};