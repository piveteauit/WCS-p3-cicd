inovin:
	echo 'Building inovin...'
	cd /home/ubuntu/projects/inovin
	git pull
	npm run build --prefix=wcs-client
	pm2 restart api-inovin
adt:
	echo 'Building adt...'
	cd /home/ubuntu/projects/adt
	git pull
	npm run build --prefix=wcs-client
	pm2 restart api-inovin
makesense:
	echo 'Building makesense...'
	cd /home/ubuntu/projects/makesense
	git pull
	npm run build --prefix=wcs-client
	pm2 restart api-inovin