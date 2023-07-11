
```
docker compose run --rm  certbot certonly --manual --preferred-challenges=dns --email <email> --server https://acme-v02.api.letsencrypt.org/directory --agree-tos -d btz-dev.fr -d *.btz-dev.fr
```