FROM postgres:latest

RUN apt-get update && apt-get install -y wget unzip 

RUN wget https://storage.googleapis.com/dft-statistics/road-traffic/downloads/data-gov-uk/dft_traffic_counts_aadf_by_direction.zip && \
    unzip dft_traffic_counts_aadf_by_direction.zip -d /docker-entrypoint-initdb.d/

ENV POSTGRES_DB traffic_data
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres

COPY db /docker-entrypoint-initdb.d/

EXPOSE 5432

CMD ["postgres"]
