inovin:
	echo 'Building inovin...'
	cp /home/ubuntu/WCS-p3-cicd/inovin.env /home/ubuntu/projects/inovin/wcs-api/.env
	cd /home/ubuntu/projects/inovin && \
	git reset --hard && git checkout main && git pull && \
	npm i --prefix=wcs-client && npm i --prefix=wcs-api && \
	npm run build --prefix=wcs-client && \
	pm2 start /home/ubuntu/projects/inovin/wcs-api/index.js --name=api-inovin -f
adt:
	echo 'Building adt...'
	cp /home/ubuntu/WCS-p3-cicd/adt.env /home/ubuntu/projects/adt/backend/.env
	cd /home/ubuntu/projects/adt && \
	npm i --prefix=frontend && npm i --prefix=backend && \
	git reset --hard && git checkout main && git pull && \
	npm run build --prefix=frontend && \
	pm2 start /home/ubuntu/projects/adt/backend/index.js --name=api-adt -f
makesense:
	echo 'Building makesense...'
	cp /home/ubuntu/WCS-p3-cicd/makesense.env /home/ubuntu/projects/makesense/api/.env
	cd /home/ubuntu/projects/makesense && \
	git reset --hard && git checkout main && git pull && \
	npm i --prefix=client && npm i --prefix=api && \
	npm run build --prefix=client && \
	pm2 start /home/ubuntu/projects/makesense/api/index.js --name=api-makesense -f
