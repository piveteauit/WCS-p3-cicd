inovin:
	echo 'Building inovin...'
	cd /home/ubuntu/projects/inovin && \
	git reset --hard && git checkout main && git pull && \
	cp inovin.env /home/ubuntu/projects/inovin/wcs-api/.env && \
	npm i --prefix=wcs-client && npm i --prefix=wcs-api && \
	npm run build --prefix=wcs-client && \
	pm2 start /home/ubuntu/projects/inovin/wcs-api/index.js --name=api-inovin -f
adt:
	echo 'Building adt...'
	cd /home/ubuntu/projects/adt && \
	git reset --hard && git checkout main && git pull && \
	cp adt.env /home/ubuntu/projects/adt/backend/.env && \
	npm i --prefix=frontend && npm i --prefix=backend && \
	npm run build --prefix=frontend && \
	pm2 start /home/ubuntu/projects/adt/backend/index.js --name=api-adt -f
makesense:
	echo 'Building makesense...'
	cd /home/ubuntu/projects/makesense && \
	git reset --hard && git checkout main && git pull && \
	cp makesense.env /home/ubuntu/projects/makesense/api/.env && \
	npm i --prefix=client && npm i --prefix=api && \
	npm run build --prefix=client && \
	pm2 start /home/ubuntu/projects/makesense/api/index.js --name=api-makesense -f
