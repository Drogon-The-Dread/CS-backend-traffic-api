\pset null 'NULL'

\COPY traffic_data FROM '/docker-entrypoint-initdb.d/dft_traffic_counts_aadf_by_direction.csv' DELIMITER ',' CSV HEADER;
