# Config

```shell
php artisan vendor:publish --tag=simple-map-config
```

# Development

In the original project, remove the composer package from the vendor directory
```shell
docker exec -u root ${PROJECT_NAME} rm -rf /var/www/html/nova-map-field
```

In the original project, create a development symlink so every change in nova-components directory will result in update of vendor directory
```shell
docker exec -u root ${PROJECT_NAME} rm -rf /var/www/html/nova-map-field
docker exec -u root ${PROJECT_NAME} ln -s /var/www/html/nova-components/nova-map-field/ /var/www/html/vendor/yarbala/nova-map-field
```

Visit the original project nova-components directory in Node 14 container
The `pwd` command should return the directory of this file

```shell
docker run --rm -it -u root -v $(pwd):/var/www/html/nova-components -w /var/www/html/nova-components node:14 bash
```

Run the hot reload for development
```shell
npm run watch
```

# Production

Visit the original project nova-components directory in Node 14 container
The `pwd` command should return the directory of this file

```shell
docker run --rm -it -u root -v $(pwd):/var/www/html/nova-components -w /var/www/html/nova-components node:14 bash
```

Run the build command

```shell
npm run prod
```

Outside the container, commit the changes and create a new tag, where
X = primary version,
Y = secondary version
Z = minor version

```shell
git add .
git commit -m "Changes"
git push
git tag vX.Y.Z
git push --tags
```
