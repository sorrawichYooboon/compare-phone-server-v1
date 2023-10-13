build-qa:
	aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 097170304260.dkr.ecr.ap-southeast-1.amazonaws.com
	docker build -t qa-flowech-device-server .

push-qa:
	docker tag qa-flowech-device-server:latest 097170304260.dkr.ecr.ap-southeast-1.amazonaws.com/qa-flowech-device-server:latest
	docker push 097170304260.dkr.ecr.ap-southeast-1.amazonaws.com/qa-flowech-device-server:latest

deploy-qa:
	aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 097170304260.dkr.ecr.ap-southeast-1.amazonaws.com
	docker build -t qa-flowech-device-server .
	docker tag qa-flowech-device-server:latest 097170304260.dkr.ecr.ap-southeast-1.amazonaws.com/qa-flowech-device-server:latest
	docker push 097170304260.dkr.ecr.ap-southeast-1.amazonaws.com/qa-flowech-device-server:latest