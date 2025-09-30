# Usa a imagem oficial do PostgreSQL como base
FROM postgres:16

# Define variáveis de ambiente padrão (podem ser sobrescritas no docker-compose)
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=dot_api

# Copia scripts SQL de inicialização (se existirem) para a pasta especial do Postgres
# Esses scripts serão executados automaticamente na primeira vez que o container subir
# COPY ./init-scripts/ /docker-entrypoint-initdb.d/