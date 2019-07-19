FROM node:10.15.0-alpine

# Next.js 빌드 시 app.config.js 설정을 위한 환경변수
# ARG NEXT_BUILD_ENV=development
# ENV NEXT_BUILD_ENV ${NEXT_BUILD_ENV}

# Dockerfile 생성/관리자
# MAINTAINER BBROS_LAB <dev@bbros.kr>
LABEL maintainer="Heechang Yang <yangtopia@gmail.com>"

# ADD Timezone Data
RUN apk add --no-cache tzdata

# App 디렉토리 생성 및 워크 디렉토리 지정
RUN mkdir -p /user/src/app
WORKDIR /user/src/app

# 소스 코드 파일을 워크 디렉토리로 복사
ADD . /user/src/app

# npm package install and project build
RUN npm install && npm run build

# Port 지정
EXPOSE 3000 80

# 컨테이너에서 실행할 명령 지정
CMD [ "npm", "start" ]
