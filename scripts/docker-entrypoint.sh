Entrypoint

#!/bin/sh

/app/scripts/wait-for-it.sh -t 0 postgres:5432

echo "Starting server..."
npm prisma migrate dev --name init