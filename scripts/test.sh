export NODE_PATH=.
export NODE_ENV=testing
export PGUSER=drhades
export PGHOST=localhost 
export PGPASSWORD=EzequielEnPsql
export PGDATABASE=ecommerce_test
export PGPORT=5432
mocha test/**/*.test.js --exit