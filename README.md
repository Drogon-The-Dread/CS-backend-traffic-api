# City Science - backend dev task

The links below all give information on traffic count and major road data.

* Data: <https://storage.googleapis.com/dft-statistics/road-traffic/downloads/data-gov-uk/dft_traffic_counts_aadf_by_direction.zip>
* Metadata: <https://storage.googleapis.com/dft-statistics/road-traffic/all-traffic-data-metadata.pdf>
* General info: <https://roadtraffic.dft.gov.uk/about>

We would like you to create (and deploy) a web API that enables a user to access this data.

* The API design is up to you, but the user should be able to to download a slice of the data
* Use JavaScript
* Use PostgreSQL for the database if you decide to use one

## FAQ

1. Do I need to host it somewhere?: Yes. We would like to try using it. It will only need to be up for a week.
2. Do I need to build a client?: No, we’re only after an API.
3. Do you need the code?: Yes please, we would like to review it. GitHub or GitLab.

# Dependancies

1. Node
2. Docker

## Usage

1. run `npm run build`
2. run `npm run start`

### Tests

1. run the docker for the DB `docker run --rm -d -p 5432:5432 traffic-postgres:latest `
2. run `npm run test`

# Endpoints

1. Health - returns the status if API is online
    - `localhost:3080/health`
2. Data - returns data from the database from the CSV
    - `localhost:3080/data`
        - OPTIONAL: Query limit - Use a number instead of # to return that many rows, default 5
        - `localhost:3080/data?limit=#`

# Roadmap
Features I'd hope to add to follow best practice 

- [ ] Query endpoint for specific rows or columns
- [ ] Node running within Container 
- [ ] More Github Actions to the pipeline. E.G. pushing image to release
- [ ] Mocked tests
- [ ] More tests

