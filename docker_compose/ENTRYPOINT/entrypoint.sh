#!/bin/sh
set -e

npx prisma contract emit
npx prisma db migrate

exec "$@"
