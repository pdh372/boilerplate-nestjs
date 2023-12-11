. ./scripts/var.sh

MIGRATE_COMMAND="yarn prisma:migrate ${1}"
GEN_COMMAND="yarn prisma:gen"

docker exec ${CONTAINER_NAME} sh -c "${MIGRATE_COMMAND} && ${GEN_COMMAND}"
